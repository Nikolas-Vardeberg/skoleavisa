"use client"

import { Article } from "@/common/types/pages/article.types";
import SanityImage from "../SanityImage";
import RichText from "../RichText";
import { useRouter } from "next/navigation";
import TransportItem from "../TransportItem";
import Link from "next/link";
import { Card } from "../ui/card";
import OnThisPage from "../on-this-page";

export default function ArticleView({ data }: { data: Article }) {
    return(
        <>
       <div className="bg-blue-200">
            <div className="w-full py-12 sm:py-20">
                <div className="flex flex-col gap-8 max-w-[1200px] mx-auto px-8">
                   
                    <div className="grid grid-cols-1 md:grid-cols-6 w-full justify-between gap-8">
                        <div className="h-fit hidden top-10 sticky lg:flex lg:col-span-2 flex-col gap-6">
                            <Card>
                                <OnThisPage value={data.content} />
                            </Card>
                        </div>
                        <div className="flex flex-col gap-8 col-span-full lg:col-span-4">
                            <Card className="w-full h-fit rounded-xl overflow-hidden ">
                                <SanityImage 
                                    image={data.mainImage}
                                    height={600}
                                    width={1200}
                                />
                                <div className="p-4 flex flex-col gap-4">
                                    <div className="text-foreground flex-grow flex gap-x-2">
                                        {data.tags?.map((tag) => (
                                            <Link href={tag.slug} key={tag.slug} className="p-2 bg-green-200">
                                                {tag.title}
                                            </Link>
                                        ))}
                                    </div>

                                    <h1 className="text-2xl sm:text-4xl">{data.title}</h1>
                                    <RichText blocks={data.entry ?? []} elementClassName="lead" />
                                    <RichText blocks={data.content} />
                                </div>
                            </Card>
                            <Card className="w-full flex flex-col gap-5 rounded-xl overflow-hidden p-6">
                                <h4 className="text-xl md:text-2xl">Les relaterte artikler</h4>
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between gap-8">
                                    {data.related?.map((article) => (
                                        <TransportItem 
                                            page={article}
                                            key={article._id}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}