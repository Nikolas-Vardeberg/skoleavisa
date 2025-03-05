import "../(client)/globals.css";
import React from 'react'
import { ThemeProvider } from "@/common/components/theme-provider";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <main>{children}</main>
            </ThemeProvider>
        </>
    )
}