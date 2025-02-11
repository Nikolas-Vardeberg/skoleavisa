import { ARTICLE_QUERY } from "@/common/queries/pages/article.queries"
import { sanityFetch } from "@/sanity/lib/live"
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";


type Props = {
    params: Promise<{
        slug: string;
    }>
}

const getHook = async({ params }: { params: QueryParams }) => {
    return await sanityFetch({query: ARTICLE_QUERY, params });
}


export default async function ArticlePage(props: Props) {
    const params = await props.params;
    const initial = await getHook({ params });

    if (!initial || !initial.data) return notFound();

    return(
        <div className="flex flex-col max-w-[1200px] mx-auto">
            <pre>
                {JSON.stringify(initial.data, undefined, 2)}
            </pre>
        </div>
    )
}