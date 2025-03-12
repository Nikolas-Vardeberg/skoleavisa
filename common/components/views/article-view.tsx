"use client"

import { Article } from "@/common/types/pages/article.types";
import SanityImage from "../SanityImage";
import RichText from "../RichText";
import TransportItem from "../TransportItem";
import Link from "next/link";
import { Card } from "../ui/card";
import OnThisPage from "../on-this-page";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Bookmark, Heart, Share2, Volume2 } from "lucide-react";
import { toPlainText } from "next-sanity";
import { buildUrl } from "@/common/lib/url";
import Summary from "../Summary";

export default function ArticleView({ data }: { data: Article }) {
    return(
        <>
       <div className="bg-blue-200">
            <div className="w-full py-12 sm:py-20">
                <div className="flex flex-col gap-8 max-w-[1200px] mx-auto px-8">
                   
                    <div className="grid grid-cols-1 md:grid-cols-6 w-full justify-between gap-8">
                        <div className="flex flex-col gap-8 col-span-full lg:col-span-4">
                            <Card className="w-full h-fit rounded-xl overflow-hidden ">
                                <div className="relative">
                                    <SanityImage 
                                        image={data.mainImage}
                                        height={600}
                                        width={1200}
                                    />
                                    <div className="absolute top-2 left-2">
                                        <Button variant="outline" aria-label="Bookmark artikelen" size="icon" className="rounded-full">
                                            <Bookmark />
                                        </Button>
                                    </div>
                                </div>
                             

                                <div className="p-4 flex flex-col gap-4">
                                    <div className="text-foreground flex-grow flex gap-x-2">
                                        {data.tags?.map((tag) => (
                                            <Badge key={tag.slug}>
                                                <Link href={tag.slug}>
                                                    {tag.title}
                                                </Link>
                                            </Badge>
                                        ))}
                                    </div>

                                    <Summary content={data.content ?? []} />

                                    <h1 className="text-2xl sm:text-4xl">{data.title}</h1>
                                    <RichText blocks={data.entry ?? []} elementClassName="lead" />
                                    <RichText blocks={data.content} />
                                </div>
                            </Card>


                            <Card>
                                <OnThisPage value={data.content} />
                            </Card>
                            <Card className="w-full flex flex-col gap-5 rounded-xl overflow-hidden p-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl md:text-2xl">Les relaterte artikler</h4>
                                    <Button variant="link" size="icon" className="rounded-full">
                                        Les mer
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 w-full justify-between gap-8">
                                    {data.related?.map((article) => (
                                        <Link href={buildUrl(article) ?? ""} className="flex justify-between gap-2 group">
                                            <SanityImage 
                                                image={article.mainImage}
                                                height={100}
                                                width={100}
                                            />
                                            <div className="flex flex-col gap-2">
                                                <h4 className="group-hover:underline decoration-blue-500 underline-offset-4">{article.title}</h4>
                                                <p className="text-sm line-clamp-2">{toPlainText(article.entry)}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="h-fit hidden top-10 sticky lg:flex lg:col-span-2 flex-col gap-6">
                            <Card>
                                <OnThisPage value={data.content} />
                            </Card>
                            <Card className="w-full flex flex-col gap-5 rounded-xl overflow-hidden p-6">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xl md:text-2xl">Les relaterte artikler</h4>
                                    <Button variant="link" size="icon" className="rounded-full">
                                        Les mer
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 w-full justify-between gap-8">
                                    {data.related?.map((article) => (
                                        <Link href={buildUrl(article) ?? ""} className="flex justify-between gap-2 group">
                                            <SanityImage 
                                                image={article.mainImage}
                                                height={100}
                                                width={100}
                                            />
                                            <div className="flex flex-col gap-2">
                                                <h4 className="group-hover:underline decoration-blue-500 underline-offset-4">{article.title}</h4>
                                                <p className="text-sm line-clamp-2">{toPlainText(article.entry)}</p>
                                            </div>
                                        </Link>
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