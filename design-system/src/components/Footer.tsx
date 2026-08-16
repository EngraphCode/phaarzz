import type { ReactNode } from 'react';

export interface FooterProps {
	children?: ReactNode;
	owner?: ReactNode;
	year?: number;
	className?: string;
}
export function Footer({ children, owner, year, className }: FooterProps) {
	return (
		<footer className={['pz-footer', className].filter(Boolean).join(' ')}>
			{children ?? (
				<>
					&copy; {year ?? new Date().getFullYear()} {owner}. All rights reserved.
				</>
			)}
		</footer>
	);
}
