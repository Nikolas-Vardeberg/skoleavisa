import HomeView from "@/common/components/views/home-view";
import { ARTICLES_QUERY } from "@/common/queries/pages/article.queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const initial = await sanityFetch({
    query: ARTICLES_QUERY
  })

  return (
    <HomeView data={initial.data} />
  );
}
