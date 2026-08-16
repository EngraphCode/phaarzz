import type { ReactNode } from 'react';
import { Container } from './primitives';
import { ThemeToggle } from './ThemeToggle';

export interface HeaderLink {
	href: string;
	label: string;
}

export interface HeaderProps {
	brand: ReactNode;
	brandHref?: string;
	links?: HeaderLink[];
	/** Set false on pages that mount the toggle elsewhere. */
	showThemeToggle?: boolean;
	className?: string;
}
export function Header({ brand, brandHref = '/', links = [], showThemeToggle = true, className }: HeaderProps) {
	return (
		<header className={['pz-header', className].filter(Boolean).join(' ')}>
			<Container className="pz-header__bar">
				<a className="pz-header__brand" href={brandHref}>
					{brand}
				</a>
				{links.length > 0 ? (
					<nav className="pz-header__nav" aria-label="Sections">
						{links.map((l) => (
							<a key={l.href} href={l.href}>
								{l.label}
							</a>
						))}
					</nav>
				) : null}
				{showThemeToggle ? <ThemeToggle /> : null}
			</Container>
		</header>
	);
}
