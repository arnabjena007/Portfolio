import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { PageTransition } from "@/components/layout/PageTransition";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Devo Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${instrumentSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "x5viuw258x");
            `}
          </Script>
          {/* Background */}
          <div className="fixed inset-0 min-h-screen w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500 pointer-events-none z-0" />

          <div className="relative z-10 w-full">
            <Navbar />
            <LeftSidebar />
            <div className="max-w-7xl mx-auto">
            </div>
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
