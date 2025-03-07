"use client"

import { MenuIcon, Moon, SearchIcon, Settings, Sun, User, Bookmark, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import { Loader2 } from "lucide-react";
import SanityImage from "@/common/components/SanityImage";
import useArticles from "../hook/use-articles";
import { buildUrl } from "@/common/lib/url";

export default function Menu() {
    const { setTheme, theme } = useTheme();
    const [open, setOpen] = useState(false);
    const { data, isPending } = useArticles();

    return(
        <header className="bg-background border-b-2 z-10 w-full">
        <div className="py-5 px-8 max-w-[1220px] mx-auto flex items-center justify-between lg:py-7 gap-x-12">
            <Link href='/' className='flex items-center justify-center lead !text-black dark:!text-white' aria-label='Hjem'>
                Skolebladet
            </Link>

            <div className="flex items-center justify-center gap-x-8">
                {open ? (
                    <X onClick={() => setOpen(false)} />
                ): (
                    <SearchIcon onClick={() => setOpen(true)} />
                )}

                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput 
                        placeholder="Søk på hele nettstedet" 
                    />
                    <CommandList>
                        <CommandEmpty>Ingen treff</CommandEmpty>
                        
                        <CommandGroup heading="Artikler">
                            {isPending ? (
                                <Loader2 className="animate-spin size-5 text-grey-700" /> 
                            ): (
                                <>
                                    {data.map((article: any) => (
                                        <CommandItem key={article._id}>
                                            <Link href={buildUrl(article) ?? ""} className="flex items-center gap-4">
                                                <SanityImage
                                                    image={article.mainImage}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-md object-cover"
                                                />
                                                <span>{article.title}</span>
                                            </Link>
                                        </CommandItem>
                                    ))}
                                </>
                            )}
                        </CommandGroup>

                        <CommandSeparator />

                        <CommandGroup heading="Innstillinger">
                            <CommandItem>
                                <User />
                                <span>Profil</span>
                            </CommandItem>
                            <CommandItem>
                                <Bookmark />
                                <span>Bookmarked</span>
                            </CommandItem>
                            <CommandItem>
                                <Settings />
                                <span>Innstillinger</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>

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