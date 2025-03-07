import Link from "next/link";
import { TransportItemProps } from "../types/block/transport.types";
import clsx from "clsx";
import { toPlainText } from "next-sanity";
import SanityImage from "./SanityImage";
import { buildUrl } from "../lib/url";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";

const TransportItem = ({ page, hideImage }: TransportItemProps) => {
    return(
        <Link href={buildUrl(page) ?? ""} key={page._id} className="flex flex-col group">
        <Card className="rounded-xl overflow-hidden">
            {hideImage ?? (
                <div className="relative">
                    <SanityImage 
                        image={page.mainImage}
                        height={300}
                        width={500}
                        className="object-cover w-full group-hover:border-dashed border"
                    />
                    <div className="absolute top-2 left-2">
                        <Button variant="outline" aria-label="Bookmark artikelen" size="icon" className="rounded-full">
                            <Bookmark />
                        </Button>
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-4 py-3 px-4">
                <div className="text-foreground flex-grow flex gap-x-2">
                        {page.tags?.map((tag) => (
                            <Badge key={tag.slug}>
                                {tag.title}
                            </Badge>
                        ))}
                    </div>
                <h4 className="text-3xl text-black  dark:text-white group-hover:underline decoration-blue-500">{page.title}</h4>
                
                {page.entry && (
					<p className={clsx('line-clamp-3 text-muted-foreground')}>{toPlainText(page.entry)}</p>
				)}
            </div>
        </Card>
        </Link>
    )
}

export default TransportItem;