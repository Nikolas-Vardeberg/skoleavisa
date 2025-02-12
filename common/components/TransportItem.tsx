import Link from "next/link";
import { TransportItemProps } from "../types/block/transport.types";
import clsx from "clsx";
import { toPlainText } from "next-sanity";
import SanityImage from "./SanityImage";
import { buildUrl } from "../lib/url";


const TransportItem = ({ page }: TransportItemProps) => {
    return(
        <Link href={buildUrl(page) ?? ""} key={page._id} className="flex flex-col">
            {page.mainImage && (
                <SanityImage 
                    image={page.mainImage}
                    height={300}
                    width={500}
                    className="object-cover w-full"
                />
            )}
            <div className="flex flex-col gap-4 py-3">
                <h4 className="text-3xl text-black underline dark:text-white">{page.title}</h4>
                {page.entry && (
					<p className={clsx('line-clamp-3 text-muted-foreground')}>{toPlainText(page.entry)}</p>
				)}
            </div>
        </Link>
    )
}

export default TransportItem;