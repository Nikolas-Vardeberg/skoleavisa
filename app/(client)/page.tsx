"use client"

import useArticles from "@/common/hook/use-articles";
import { Article } from "@/common/types/pages/article.types";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data, isPending } = useArticles();

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto">
      {isPending ? (
        <div className="flex items-center justify-center">
            <Loader2 className="animate-spin h-6 w-6 text-gray-500 " />
        </div>
      ): (
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-8">
            {data?.map((page: Article, i: number) => {
                return (
                  <pre key={i}>
                    {JSON.stringify(page, undefined, 2)}
                  </pre>
                )
            })}
        </div>
      )}
    </div>
  );
}
