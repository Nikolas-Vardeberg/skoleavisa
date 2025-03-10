import "../(client)/globals.css";
import React from 'react'
import { ThemeProvider } from "@/common/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/common/components/ui/sidebar";
import { AppSidebar } from "@/common/components/Sidebar";
import { createClient } from '@/common/utils/supabase/server'

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      const supabase = await createClient()
    
      const {
        data: { user },
      } = await supabase.auth.getUser();
    return(
        <>
        <SidebarProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AppSidebar 
                    email={user?.email || ""}
                />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </ThemeProvider>
        </SidebarProvider>
        </>
    )
}