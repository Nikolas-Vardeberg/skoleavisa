"use client"

import TransportItem from "@/common/components/TransportItem";
import useArticles from "@/common/hook/use-articles";
import type { Page } from "@/common/types/root.types";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data, isPending } = useArticles();

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto py-10 px-8">
      {isPending ? (
        <div className="flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-gray-500 " />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {data?.length > 0 && (
            <TransportItem page={data[0]} key={data[0]._id} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {data?.slice(1).map((page: Page) => (
              <TransportItem page={page} key={page._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
