import { QueryProvider } from "@/common/providers/query-provider";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const aeronaut = localFont({
  variable: "--font-aeronaut",
  src: "./font/Aeronaut.woff2"
});

export const metadata: Metadata = {
  title: "Skolebladet",
  description: "SkoleNytt er en digital nyhetsplattform laget for elever, lærere og foreldre som ønsker å holde seg oppdatert på det som skjer i skolehverdagen. Her finner du alt fra viktige kunngjøringer og hendelser til elevintervjuer, faglige tips og spennende reportasjer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning className={`${aeronaut.variable}`}>
      <QueryProvider>
        <body>
          {children}
        </body>
      </QueryProvider>
    </html>
  );

}
