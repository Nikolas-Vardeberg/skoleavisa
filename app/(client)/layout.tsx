
import Menu from "@/common/components/Menu";
import "./globals.css";
import React from 'react'

export default async function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <body>
            <>
                <Menu />
                <main>{children}</main>
            </>
        </body>
    )
}