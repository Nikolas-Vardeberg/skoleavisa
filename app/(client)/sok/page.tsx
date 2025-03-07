"use client"

import { Button } from "@/common/components/ui/button";
import useSearch from "@/common/hook/data/use-search";
import { Loader2 } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function Sok() {
    const [page, setPage] = useState(1);
    const [searchedQuery, setSearchedQuery] = useState('');
    const [selectedTags, _] = useState<string[]>();
    const { isPending, data } = useSearch({ page, search: searchedQuery, tags: selectedTags ?? [], });
    const [query, setQuery] = useState(searchedQuery);

    const handleSearch = () => {
		if (query === searchedQuery) return;
		const q = query.trim();
		if (q === '') {
			setQuery('');
			return;
		}

		setSearchedQuery(q);
	};

    return (
        <div className="bg-blue-200">
                <div className="w-full md:w-1/2 items-center rounded-full focus-within:border-blue-900 h-12 border flex justify-between bg-white overflow-hidden">
                    <input 
                    placeholder="Søk..."
                    className="border-none outline-none mx-4 w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
                <Button 
                    type="submit"
                    className="p-4 h-full rounded-none"
                    aria-label="Søk"
                    onClick={() => handleSearch()}
                >
                    Søk
                </Button>
            </div>

            <div>
                    {isPending ? (
                        <Loader2 className="animate-spin size-5 text-grey-700" />
                    ): (
                        <div className="flex flex-col">
                            {searchedQuery && !!data && data?.count !== 0 ? (
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <h3>Ditt søk på {searchedQuery} ga {data.count} treff</h3>

                                        <span className="text-blue-500 flex gap-x-2 text-lg items-center">Søketips <ChevronDown /></span>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        {data.items.map((page) => (
                                            <pre>
                                                {JSON.stringify(page, undefined, 2)}
                                            </pre>
										))}
                                    </div>
                                </div>
                            ) : (
                                searchedQuery && (
                                    <div className="flex flex-col gap-5">
                                        <h2 className='font-normal'>
                                            Vi fant dessverre ingen treff på "{searchedQuery}"
                                        </h2>
                                        <p className='lead'>
                                            Prøv å bruke noen andre ord, eller ta kontakt med oss om det er noe vi kan
                                            hjelpe deg med.
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
        </div>
    )
}
