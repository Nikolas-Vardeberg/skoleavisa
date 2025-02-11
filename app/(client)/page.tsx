import { ARTICLES_QUERY } from "@/common/queries/pages/article.queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const initial = await sanityFetch({
    query: ARTICLES_QUERY
  })

  return (
    <div className="flex flex-col">
      <pre>
        {JSON.stringify(initial, undefined, 2)}
      </pre>
    </div>
  );
}
