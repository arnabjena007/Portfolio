const https = require('https');
const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Read .env.local manually since we don't want to depend on dotenv package if not installed
const envPath = path.resolve(__dirname, '../.env.local');
let clientId = '';
let clientSecret = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            if (key.trim() === 'SPOTIFY_CLIENT_ID') clientId = value.trim();
            if (key.trim() === 'SPOTIFY_CLIENT_SECRET') clientSecret = value.trim();
        }
    });
} catch (error) {
    console.error('Error reading .env.local. Make sure it exists in the root directory.');
    process.exit(1);
}

if (!clientId || clientId === 'your_client_id_here') {
    console.error('Please fill in SPOTIFY_CLIENT_ID in .env.local first.');
    process.exit(1);
}
if (!clientSecret || clientSecret === 'your_client_secret_here') {
    console.error('Please fill in SPOTIFY_CLIENT_SECRET in .env.local first.');
    process.exit(1);
}

const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

// 1. Create Server to listen for callback
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const code = url.searchParams.get('code');

    if (code) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Auth Code Received!</h1><p>Check your terminal for the Refresh Token.</p><script>window.close()</script>');
        server.close();
        getRefreshToken(code);
    }
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000/callback');

    // 2. Construct Auth URL
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

    console.log('\nPlease open this URL in your browser to authorize:');
    console.log(authUrl);
    console.log('\nWaiting for callback...');

    // Try to open automatically
    const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
    exec(`${start} "${authUrl}"`);
});

function getRefreshToken(code) {
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
    }).toString();

    const authOptions = {
        hostname: 'accounts.spotify.com',
        path: '/api/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        }
    };

    const req = https.request(authOptions, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(body);
                if (json.refresh_token) {
                    console.log('\nSUCCESS! Here is your Refresh Token:');
                    console.log('\n' + json.refresh_token + '\n');
                    console.log('Please copy this token and paste it into your .env.local file as SPOTIFY_REFRESH_TOKEN.');

                    // Allow simple append if empty
                    updateEnvFile(json.refresh_token);
                } else {
                    console.error('Error getting token:', json);
                }
            } catch (e) {
                console.error('Error parsing response:', e);
            }
        });
    });

    req.write(data);
    req.end();
}

function updateEnvFile(token) {
    try {
        let content = fs.readFileSync(envPath, 'utf8');
        if (content.includes('SPOTIFY_REFRESH_TOKEN=')) {
            // simple check if it's empty
            if (content.includes('SPOTIFY_REFRESH_TOKEN=\n') || content.endsWith('SPOTIFY_REFRESH_TOKEN=')) {
                content = content.replace(/SPOTIFY_REFRESH_TOKEN=.*/, `SPOTIFY_REFRESH_TOKEN=${token}`);
                fs.writeFileSync(envPath, content);
                console.log('Automatically updated .env.local with the new token!');
            }
        }
    } catch (e) {
        console.log('Could not auto-update .env.local. Please paste manually.');
    }
}
