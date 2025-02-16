"use client";

import { Button } from "@/common/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold italic text-9xl ">404</h1>
                <p className="text-3xl p-3 font-bold">Her var det visst ikkeno</p>

                <Link href="/" >
                    <Button>
                        Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
