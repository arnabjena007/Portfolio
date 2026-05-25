import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { LeftSidebar } from "@/components/LeftSidebar";
import { PageTransition } from "@/components/PageTransition";
import { html } from "framer-motion/client";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
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
      <body className={`${inter.variable} ${instrumentSerif.variable} font-serif antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Background - solid black */}
          <div className="fixed inset-0 min-h-screen w-full bg-black pointer-events-none z-0" />

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
