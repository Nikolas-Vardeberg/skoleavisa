import type { PortableTextBlock } from '@portabletext/react';
import { Page } from '../root.types';

export type TransportHeaderProps = {
	title?: string;
	description?: PortableTextBlock[];
};

export type ITransportBlock = {
	_type: 'transportBlocks';
	flipHorizontal?: boolean;
	pages: Page;
	variant?: string;
	options?: {
		hideLabel: boolean;
		hideTags: boolean;
	};
} & TransportHeaderProps;

export interface TransportGridProps {
	pages: Page[];
	block: ITransportBlock;
}

export interface GridProps {
	pages: Page[];
	block: ITransportBlock;
}

export interface TransportItemProps {
	page: Page;
}