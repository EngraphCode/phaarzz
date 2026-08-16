import type { HTMLAttributes, ReactNode } from 'react';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	children?: ReactNode;
	tone?: 'primary' | 'soft' | 'neutral';
}
export function Badge({ children, tone = 'soft', className, ...rest }: BadgeProps) {
	return (
		<span className={cx('pz-badge', `pz-badge--${tone}`, className)} {...rest}>
			{children}
		</span>
	);
}
