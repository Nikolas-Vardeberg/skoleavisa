"use client"

import { Article } from "@/common/types/pages/article.types";
import SanityImage from "../SanityImage";
import RichText from "../RichText";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArticleView({ data }: { data: Article }) {
    const router = useRouter();

    return(
        <div className="flex flex-col max-w-[1200px] gap-5 mx-auto py-10 px-8">
            <div>
                <Button onClick={() => router.back()} variant="link">
                    <ArrowLeft />
                    Tilbake
                </Button>
            </div>
            <h1 className="text-3xl md:text-5xl">{data.title}</h1>
            <RichText blocks={data.entry ?? []} elementClassName="lead" />
            <SanityImage 
                image={data.mainImage}
                height={700}
                width={1200}
                className="object-cover w-full bg-yellow-200"
            />
            <div className="flex flex-col max-w-[800px] mx-auto">
                <RichText blocks={data.content} />
            </div>
        </div>
    )
}