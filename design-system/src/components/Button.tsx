import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

type Common = {
	children?: ReactNode;
	variant?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md';
	className?: string;
};

export type ButtonProps = Common &
	(
		| ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>)
		| ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
	);

/**
 * Pill-shaped action. Renders an `<a>` when `href` is given, otherwise a
 * `<button>` — so a link never has to pretend to be a button for the sake of
 * styling.
 */
export function Button({ children, variant = 'primary', size = 'md', className, ...rest }: ButtonProps) {
	const classes = cx('pz-button', `pz-button--${variant}`, size === 'sm' && 'pz-button--sm', className);

	if ('href' in rest && rest.href !== undefined) {
		return (
			<a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
				{children}
			</a>
		);
	}
	return (
		<button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	);
}
