"use client"

import { MenuIcon, Moon, SearchIcon, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Menu() {
    const { setTheme, theme } = useTheme()
    
    return(
        <header className="bg-background border-b-2 z-10 w-full">
        <div className="py-5 px-8 max-w-[1220px] mx-auto flex items-center justify-between lg:py-7 gap-x-12">
            <Link href='/' className='flex items-center justify-center lead !text-black dark:!text-white' aria-label='Hjem'>
                Skolebladet
            </Link>

            <div className="flex items-center justify-center gap-x-8">
                <input 
                    className="w-full bg-slate-200 placeholder:!text-black dark:placeholder:!text-black text-lg py-3 px-4 outline-none hidden sm:block"
                    placeholder="Søk..."
                />

                <Link href="/sok">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <SearchIcon className="size-6" />
                    </span>
                </Link>

                <button type="button">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <MenuIcon className="size-6" />
                    </span>
                </button>

                <Link href="/sign-in">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <User className="size-6" />
                    </span>
                </Link>

                <button>
                    <span className="flex items-center justify-center lead gap-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                {theme === "light" ? <Moon className="size-6 text-black dark:text-white" /> : <Sun className="size-6 text-black dark:text-white" />}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <Sun className="text-yellow-500"/> Lys
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <Moon className="text-black dark:text-white" /> Mørk
                                    
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </span>
                </button>

            </div>
        </div>
    </header>
    )
}