"use client"

import type { Tags } from "@/common/types/other/tag.types";
import { Page } from "@/common/types/root.types";
import TransportItem from "../TransportItem";
import RichText from "../RichText";

export default function TagView({ data }: { data: Tags }) {
    return(
        <div className="bg-blue-200">
            <div className="flex flex-col gap-5 max-w-[1200px] mx-auto py-10 px-8">
                <h1 className="text-3xl sm:text-5xl">{data.title}</h1>
                <RichText blocks={data.description ?? []} elementClassName="lead"  />
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
                    {data.related?.map((page: Page) => (
                        <TransportItem page={page} key={page._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
