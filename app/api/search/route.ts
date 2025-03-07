import { SEARCH_LIMIT, searchQuerySimpleWLimit } from '@/common/queries/search.queries';
import { client } from '@/sanity/lib/client';
import { draftMode } from 'next/headers';

export const GET = async (req: Request) => {
    const query = new URLSearchParams(req.url.split('?')[1]);
    const search = query.get('q') as string | undefined;
    const page = query.get('page') as string | undefined;
    const tags = query.get('tags') as string | undefined;

    if (!search) return new Response('Missing search query', { status: 400 });

    const pageInt = Number.parseInt(page || '1');
    if (Number.isNaN(pageInt)) return new Response('Invalid page number', { status: 400 });

    const { isEnabled } = await draftMode();
    const c = client.withConfig(isEnabled ? { stega: true } : {});

    const tagsArr = tags?.split(',') || [];

    const SKIP = Math.max(0, (pageInt - 1) * SEARCH_LIMIT);

    const data = await c.fetch(searchQuerySimpleWLimit, {
        q: search?.split(' ').map((s) => `*${s}*`),
        tags: tagsArr ?? [],
        limit: SEARCH_LIMIT * pageInt,
        skip: SKIP,
    });

    return Response.json(data);
};