"use client"

import { useReducer, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Summary({ content }: { content: any[] }) {
    const [isOpen, toggle] = useReducer((s) => !s, false);
    const ref = useRef<HTMLDivElement>(null);
    const [points, setPoints] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/summary', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content }),
                });

                if (!response.ok) {
                    throw new Error('Failed to generate summary');
                }

                const data = await response.json();
                const summaryPoints = data.summary
                    .split('\n')
                    .map((point: string) => point.trim())
                    .filter((point: string) => point.length > 0)
                    .map((point: string) => point.startsWith('-') ? point.substring(1).trim() : point);

                setPoints(summaryPoints);
            } catch (err) {
                console.error('Error fetching summary:', err);
                setError(err instanceof Error ? err.message : 'Failed to generate summary');
            } finally {
                setIsLoading(false);
            }
        };

        fetchSummary();
    }, [content]);

    return (
        <div className="w-full mx-auto relative bg-primary">
            <div className="p-8 flex flex-col gap-6">
                <motion.div
                    initial={{ maxHeight: 180 }}
                    transition={{ duration: 0.2 }}
                    animate={{
                        maxHeight: isOpen
                            ? ref.current?.clientHeight
                                ? ref.current?.clientHeight + 180
                                : ref.current?.clientHeight
                            : 180,
                    }}
                    className="overflow-hidden flex flex-col gap-4 relative"
                >
                    <h3 className="text-primary-foreground text-2xl">Kort forklart</h3>

                    <div className="flex flex-col gap-4" ref={ref}>
                        {isLoading ? (
                            <div className="text-center">Genererer sammendrag...</div>
                        ) : error ? (
                            <div className="text-red-500">{error}</div>
                        ) : (
                            points.map((point, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className="text-blue-900 font-bold">&#8226;</span>
                                    <span className="text-black">
                                        {point}
                                    </span>
                                </li>
                            ))
                        )}
                    </div>

                    <div className="text-sm text-center text-gray-600 py-2">
                        Teksten er laget av kunstig intelligens-verktøyet OpenAI. 
                    </div>
                </motion.div>
            </div>
            <Button 
                onClick={toggle} 
                variant="secondary"
                className="absolute -bottom-5 left-0 right-0 items-center gap-2 max-w-fit mx-auto"
            >
                {isOpen ? "Vis mindre" : "Vis mer"}
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </Button>
        </div>
    );
}