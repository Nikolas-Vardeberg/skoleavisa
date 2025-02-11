"use client"

import type { Article } from "@/common/types/pages/article.types";

export default function HomeView({data: data}: { data: Article }) {
    
    const renderArticles = () => (
        <div>
            <pre>
                {JSON.stringify(data, undefined, 2)}
            </pre>
        </div>
    )

    return(
        <div className="flex flex-col max-w-[1200px] mx-auto">
            {renderArticles()}
        </div>
    )
}