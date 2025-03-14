import Menu from "@/common/components/Menu";
import "./globals.css";
import React from 'react'
import { ThemeProvider } from "@/common/components/theme-provider";
import SKOLEBLADET_CONFIG from "@/common/utils/config";
import Script from "next/script";

export default async function ClientLayout({
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
                <Menu />
                <main>{children}</main>
            </ThemeProvider>
            {SKOLEBLADET_CONFIG.isProd && (
                <Script 
                    id="CookieConsent"
                    src="https://policy.app.cookieinformation.com/uc.js"
                    data-culture="NB"
                    data-gcm-version="2.0"
                    type="text/javascript"
                />
            )}
        </>
    )
}