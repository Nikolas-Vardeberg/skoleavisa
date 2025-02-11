import type { ReactNode } from 'react';
import '../studio.css';

export const metadata = {
	title: "Skoleavisa studio",
	description: "Skoleavisa studio",
};

export default function StudioLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <body>{children}</body>;
}