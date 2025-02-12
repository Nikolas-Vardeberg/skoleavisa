"use client";

import { Button } from "@/common/components/ui/button";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <BrowserRouter>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold italic text-9xl ">404</h1>
                <p className="text-3xl p-3 font-bold">Der var det visst ikkeno</p>

                    <Button className="hover:shadow-xl bg-primary text-primary-foreground shadow hover:bg-primary/90">
                <Link to={"/"} className="font-bold">Home</Link>
                </Button>
            </div>
            </BrowserRouter>

        </div>
    );
}
