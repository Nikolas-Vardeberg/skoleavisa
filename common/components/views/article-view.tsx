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
import { Heart, Share2, Volume2 } from "lucide-react";

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
                                            <Badge key={tag.slug}>
                                                <Link href={tag.slug}>
                                                    {tag.title}
                                                </Link>
                                            </Badge>
                                        ))}
                                    </div>

                                    <h1 className="text-2xl sm:text-4xl">{data.title}</h1>
                                    <RichText blocks={data.entry ?? []} elementClassName="lead" />
                                    <RichText blocks={data.content} />
                                </div>
                            </Card>
                                    
                                {/* Comments */}
                                <Card className="w-full flex flex-col gap-5 rounded-xl overflow-hidden p-6 overflow-y-auto">
                                    <h4 className="text-xl md:text-2xl">Kommentarer</h4>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <img src="https://github.com/shadcn.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-black">Username</p>
                                                    <p className="text-gray-600">This is a comment from a user. It can be a question, feedback, or any other type of interaction.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                            <Card className="w-full flex flex-col gap-5 rounded-xl overflow-hidden p-6">
                                <h4 className="text-xl md:text-2xl">Les relaterte artikler</h4>
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between gap-8">
                                    {data.related?.map((article) => (
                                        <TransportItem 
                                            page={article}
                                            key={article._id}
                                            hideImage={true}
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