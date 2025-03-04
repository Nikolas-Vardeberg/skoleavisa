import TagView from "@/common/components/views/tag-view";
import { TAG_QUERY } from "@/common/queries/other/tag.queries";
import { sanityFetch } from "@/sanity/lib/live"
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>
}

const getHook = async({ params }: { params: QueryParams }) => {
    return await sanityFetch({query: TAG_QUERY, params });
}

export default async function TagPage(props: Props) {
    const params = await props.params;
    const initial = await getHook({ params });

    if (!initial || !initial.data) return notFound();

    return(
        <TagView data={initial.data} />
    )
}