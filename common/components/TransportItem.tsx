import Link from "next/link";
import { TransportItemProps } from "../types/block/transport.types";
import clsx from "clsx";
import { toPlainText } from "next-sanity";
import SanityImage from "./SanityImage";


const TransportItem = ({ page }: TransportItemProps) => {
    return(
        <Link href="/" key={page._id} className="flex flex-col">
            {page.mainImage && (
                <SanityImage 
                    image={page.mainImage}
                    height={400}
                    width={500}
                    className="object-cover w-full"
                />
            )}
            <div className="flex flex-col gap-4 py-3">
                <h4 className="lead text-black dark:text-white">{page.title}</h4>
                {page.entry && (
					<p className={clsx('line-clamp-3 text-muted-foreground')}>{toPlainText(page.entry)}</p>
				)}
            </div>
        </Link>
    )
}

export default TransportItem;