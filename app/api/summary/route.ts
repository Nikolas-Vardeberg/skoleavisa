import { azure } from "@/common/lib/azure";
import { generateText } from "ai";
import { NextResponse } from "next/server";

interface BlockChild {
    text: string;
}

interface ContentBlock {
    _type: string;
    children?: BlockChild[];
}

export async function POST(req: Request) {
    try {
        const { content } = await req.json();

        const text = content.map((block: ContentBlock) => {
            if (block._type === 'block' && block.children) {
                return block.children.map((child: BlockChild) => child.text).join(' ');
            }
            return '';
        }).join(' ');

        const response = await generateText({
            model: azure('gpt-35-turbo'),
            prompt: `You are a news editor specializing in creating 'Kort forklart' (shortly explained) summaries for complex news articles. Your task is to read the provided article and generate a concise, easy-to-understand summary using bullet points. Each bullet point should highlight a key aspect or takeaway from the article. Aim for approximately 3-5 bullet points, keeping the language simple and accessible to a general audience. Focus on answering the 'who, what, where, when, why, and how' of the story in a clear and succinct manner. Avoid jargon and technical terms, or explain them briefly if necessary. Maintain a neutral and objective tone. Article: ${text}`,
            temperature: 0
        });

        return NextResponse.json({ summary: response.text });
    } catch (error) {
        console.error('Summary generation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate summary' },
            { status: 500 }
        );
    }
}