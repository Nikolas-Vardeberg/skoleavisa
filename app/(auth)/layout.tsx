import "../(client)/globals.css";
import React from 'react'
import { ThemeProvider } from "@/common/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/common/components/ui/sidebar";
import { AppSidebar } from "@/common/components/Sidebar";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
        <SidebarProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </ThemeProvider>
        </SidebarProvider>
        </>
    )
}