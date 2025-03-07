import { Page } from '@/common/types/root.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useSearch({ page, search, tags }: { page: number; search: string; tags: string[] }) {
	const queryKey = ['search', { page, search }];
	const isSearchEnabled = search.length > 0;

	const res = useQuery<{
		items: Page[];
		count: number;
	}>({
		queryKey,
		enabled: isSearchEnabled,
		queryFn: async () => {
			const params = new URLSearchParams({
				q: search,
				page: page.toString(),
				tags: tags.join(','),
			}).toString();
			const res = await axios.get(`/api/search?${params}`);
			return res.data;
		},
	});

	return {
		...res,
		isPending: res.isPending && isSearchEnabled,
	};
}