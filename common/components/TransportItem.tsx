import Link from "next/link";
import { TransportItemProps } from "../types/block/transport.types";
import clsx from "clsx";
import { toPlainText } from "next-sanity";
import SanityImage from "./SanityImage";
import { buildUrl } from "../lib/url";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const TransportItem = ({ page, hideImage }: TransportItemProps) => {
    return(
        <Card className="overflow-hidden">
        <Link href={buildUrl(page) ?? ""} key={page._id} className="flex flex-col group overflow-hidden">
            {hideImage ?? (
                <div className="relative">
                    <SanityImage 
                        image={page.mainImage}
                        height={300}
                        width={500}
                        className="object-cover w-full group-hover:border-dashed border"
                    />
                </div>
            )}
            <div className="flex flex-col gap-4 py-3 px-4">
                <div className="text-foreground flex-grow flex gap-x-2">
                        {page.tags?.map((tag) => (
                            <Badge key={tag.slug}>
                                <Link href={tag.slug}>
                                    {tag.title}
                                </Link>
                            </Badge>
                        ))}
                    </div>
                <h4 className="text-3xl text-black  dark:text-white group-hover:underline decoration-blue-500">{page.title}</h4>
                
                {page.entry && (
					<p className={clsx('line-clamp-3 text-muted-foreground')}>{toPlainText(page.entry)}</p>
				)}
            </div>
        </Link>
        </Card>
    )
}

export default TransportItem;