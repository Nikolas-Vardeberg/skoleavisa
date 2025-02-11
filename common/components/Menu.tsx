import { MenuIcon, Search, SearchIcon, User } from "lucide-react";
import Link from "next/link";


export default function Menu() {
    return(
        <header className="bg-white border-b-2 z-10 w-full">
        <div className="py-5 px-8 max-w-[1220px] mx-auto flex items-center justify-between lg:py-7 gap-x-12">
            <Link href='/' className='flex items-center justify-center lead' aria-label='Hjem'>
                Skolebladet
            </Link>

            <div className="w-full hidden md:block">
                <input 
                    className="w-full bg-slate-200 placeholder:text-black text-lg py-3 px-4"
                    placeholder="Søk..."
                />
            </div>

            <div className="flex items-center justify-center gap-x-8">
                <a href="/sok">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <SearchIcon className="size-6" />
                    </span>
                </a>

                <button type="button">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <MenuIcon className="size-6" />
                    </span>
                </button>

                <Link href="/sign-in">
                    <span className="flex items-center justify-center lead gap-x-2">
                        <User className="size-6" />
                    </span>
                </Link>

            </div>
        </div>
    </header>
    )
}