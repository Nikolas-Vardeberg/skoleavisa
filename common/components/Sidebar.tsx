"use client"

import * as React from "react"
import { User, Bookmark, Settings, ChevronDown, ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/common/components/ui/sidebar"
import { Avatar, AvatarImage } from "@/common/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/common/components/ui/collapsible"
import { useState } from "react"
import Link from "next/link"

type AppSidebarProps = {
  email: string;
  username: string;
};

export function AppSidebar(props: AppSidebarProps) {
  const [openSettings, setOpenSettings] = useState(true);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold">
            <Link href="/">Skolebladet</Link>
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/account">
                  <User className="size-4" />
                  <span>Account</span>
                  <ChevronRight className="ml-auto size-4" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/account/bookmarks">
                  <Bookmark className="size-4" />
                  <span>Bookmarks</span>
                  <ChevronRight className="ml-auto size-4" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <Collapsible open={openSettings} onOpenChange={setOpenSettings} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <Settings className="size-4" />
                    <span>Settings</span>
                    <ChevronDown
                      className={`ml-auto size-4 transition-transform ${openSettings ? "rotate-180" : ""}`}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">General</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">Team</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">Billing</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="#">Limits</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="outline" size="lg" asChild>
              <a href="#">
                <Avatar className="size-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                </Avatar>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">{props.username}</span>
                  <span className="text-xs text-muted-foreground">{props.email}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

