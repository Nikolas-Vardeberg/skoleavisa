import type { PortableTextBlock } from '@portabletext/react';
import { Page } from '../root.types';

export type TransportHeaderProps = {
	title?: string;
	description?: PortableTextBlock[];
};

export type ITransportBlock = {
	_type: 'transportBlocks';
	pages: Page;
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
	hideImage?: boolean;
}