import { ARTICLES_QUERY } from "@/common/queries/pages/article.queries";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export const POST = async () => {
    const res = await client.fetch(ARTICLES_QUERY, {
    }, {
        cache: 'no-cache',
    });

    if (res.length === 0) return NextResponse.json([]);

    return NextResponse.json(res);
}