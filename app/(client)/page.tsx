"use client"

import SanityImage from "@/common/components/SanityImage";
import TransportItem from "@/common/components/TransportItem";
import useArticles from "@/common/hook/use-articles";
import type { Page } from "@/common/types/root.types";
import { toPlainText } from "next-sanity";
import { ArrowRight, Loader2} from "lucide-react";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { data, isPending } = useArticles();

  if (isPending) {
    return (
      <div className="flex flex-col bg-blue-200 dark:bg-blue-300 min-h-screen">
        <div className="max-w-[1200px] mx-auto flex flex-col flex-1 items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
        </div>
      </div>
    );
  }

  const renderHero = () => (
    <div className="py-12 sm:py-20 px-8">
      {data && data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center p-8 rounded-xl bg-background justify-between gap-8 w-full">
          <div className="flex-col gap-8 h-full flex items-start justify-center px-4">
            <h2 className="text-3xl sm:text-5xl text-foreground hover:underline decoration-blue-500">{data[0].title}</h2>
            <p className="text-muted-foreground">{toPlainText(data[0].entry)}</p>
            <Link href={`/artikler/${data[0].slug}`}>
              <Button
                variant="secondary"
              >
                Les mer
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <SanityImage 
              image={data[0].mainImage}
              height={500}
              width={500}
              className="object-cover w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )

  const renderArticles = () => (
    <div className="flex flex-col gap-6 py-10 px-8">
      <h2 className="inline-flex text-2xl sm:text-4xl items-center text-black">Les Artikler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
        {data?.slice(1)
          .sort((a: Page, b: Page) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .map((page: Page) => (
            <TransportItem page={page} key={page._id} />
          ))}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col bg-blue-200">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {renderHero()}
        {renderArticles()}
      </div>
    </div>
  );
}
