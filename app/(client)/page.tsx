"use client"

import TransportItem from "@/common/components/TransportItem";
import { Button } from "@/common/components/ui/button";
import { Card, CardDescription } from "@/common/components/ui/card";
import useArticles from "@/common/hook/use-articles";
import type { Page } from "@/common/types/root.types";
import { ArrowRight, BookOpen, Heart, Loader2, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data, isPending } = useArticles();

  const renderHero = () => (
    <div className="bg-blue-200 py-12 sm:py-20">
      <div className="flex mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl sm:text-5xl text-black">Hold Deg Oppdatert på Elevsamfunnet 📰✨</h1>  
            <p className="text-muted-foreground">Les artikler om skolehverdag, politikk, trender og saker som betyr noe for deg som elev. Få innsikt og bli engasjert!</p>  
            <Link href="/artikler" className="max-w-fit">
              <Button variant="destructive">
                Les siste nytt nå  
                <ArrowRight />
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/bilde.jpg"
              height={600}
              quality={100}
              width={600}
              alt="Bilde"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderFeatures = () => (
    <div className="py-10 flex flex-col gap-8 px-8">
      <h2 className="text-2xl sm:text-4xl text-foreground">Slik fungerer det</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-4 gap-8 justify-between">
          <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
            <div className="bg-yellow-100 text-black p-4 rounded-full border-none">
              <BookOpen />
            </div>
            <CardDescription>
              <p className="text-foreground text-base group-hover:underline">Les Artikler</p>
            </CardDescription>
          </Card>
          <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
            <div className="bg-blue-100 text-black p-4 rounded-full border-none">
              <User />
            </div>
            <CardDescription>
              <p className="text-foreground text-base group-hover:underline">Lag Bruker</p>
            </CardDescription>
          </Card>
          <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
            <div className="bg-green-100 p-4 text-black rounded-full border-none">
              <MessageCircle />
            </div>
            <CardDescription>
              <p className="text-foreground text-base group-hover:underline">Kommenter på innlegg</p>
            </CardDescription>
          </Card>
          <Card className="w-full items-center group text-center p-10 justify-center flex flex-col gap-4">
            <div className="bg-red-100 text-black p-4 rounded-full border-none">
              <Heart />
            </div>
            <CardDescription>
              <p className="text-foreground text-base group-hover:underline">Lik innlegg</p>
            </CardDescription>
          </Card>
      </div>
    </div>
  )

  const renderArticles = () => (
    <div className="flex flex-col gap-6 py-10 px-8">
      <h2 className="inline-flex text-2xl sm:text-4xl items-center">Les Artikler</h2>
        {isPending ? (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin h-6 w-6 text-gray-500 " />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {data?.map((page: Page) => (
              <TransportItem page={page} key={page._id} />
            ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="flex flex-col">
      {renderHero()}
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {renderFeatures()}
        {renderArticles()}
      </div>
    </div>
  );
}
