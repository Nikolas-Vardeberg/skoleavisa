import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Menu from "@/common/components/Menu";
import { ThemeProvider } from "@/common/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aeronaut = localFont({
  variable: "--font-aeronaut",
  src: "./font/Aeronaut.woff2"
});

export const metadata: Metadata = {
  title: "Skoleavisa",
  description: "Skoleavisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Menu />
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
