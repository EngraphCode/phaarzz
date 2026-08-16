import type { HTMLAttributes, ReactNode } from 'react';
import { Heading } from './primitives';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

/** `title` is omitted from the DOM attributes: the native one is a string
 *  tooltip, and here it is the card's rendered heading. */
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	children?: ReactNode;
	/** `petal` is the identity shape — asymmetric radius. Default. */
	shape?: 'petal' | 'rounded';
	title?: ReactNode;
}
export function Card({ children, shape = 'petal', title, className, ...rest }: CardProps) {
	return (
		<div className={cx('pz-card', `pz-card--${shape}`, className)} {...rest}>
			{title ? <Heading level={3}>{title}</Heading> : null}
			{children}
		</div>
	);
}
