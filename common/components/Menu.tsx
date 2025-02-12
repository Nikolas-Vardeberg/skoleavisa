"use client"

import { MenuIcon, Moon, Search, SearchIcon, User } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { ModeToggle } from "./theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/common/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Menu() {
    const { setTheme } = useTheme()

    return(
        <header className="bg-white dark:bg-black dark:bg-grey-200 border-b-2 z-10 w-full">
        <div className="py-5 px-8 max-w-[1220px] mx-auto flex items-center justify-between lg:py-7 gap-x-12">
            <Link href='/' className='flex items-center justify-center lead text-black dark:text-white' aria-label='Hjem'>
                Skolebladet
            </Link>

            <div className="w-full hidden md:block">
                <input 
                    className="w-full bg-slate-200 dark:bg-slate-200 placeholder:text-black text-lg py-3 px-4"
                    placeholder="Søk..."
                />
            </div>

            <div className="flex items-center justify-center gap-x-8">
                <a href="/sok">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <SearchIcon className="size-6 text-black dark:text-white" />
                    </span>
                </a>

                <button type="button">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <MenuIcon className="size-6 text-black dark:text-white" />
                    </span>
                </button>
                
                <Link href="/sign-in">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <User className="size-6 text-black dark:text-white" />
                    </span>
                </Link>

                <span className="flex items-center justify-center lead gap-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Moon className="size-6 text-black dark:text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </span>

            </div>
        </div>
    </header>
    )
}