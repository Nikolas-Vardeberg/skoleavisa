"use client"

import * as React from "react"
import { PlayCircle, Layers, FileText, Settings, ChevronDown, ChevronRight, Database } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
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

export function AppSidebar() {
  const [openSettings, setOpenSettings] = useState(true);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <PlayCircle className="size-4" />
                  <span>Playground</span>
                  <ChevronRight className="ml-auto size-4" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Layers className="size-4" />
                  <span>Models</span>
                  <ChevronRight className="ml-auto size-4" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <FileText className="size-4" />
                  <span>Documentation</span>
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
                  <span className="font-medium">shadcn</span>
                  <span className="text-xs text-muted-foreground">m@example.com</span>
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

