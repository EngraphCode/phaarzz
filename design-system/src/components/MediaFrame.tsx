import type { HTMLAttributes, ReactNode } from 'react';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

export interface MediaFrameProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	/** `arch` is the identity shape — a doorway. */
	shape?: 'arch' | 'petal' | 'circle';
	src?: string;
	alt?: string;
}
/**
 * Shaped media container. With no `src` it renders the brand gradient, which
 * makes it usable as a placeholder while imagery is outstanding.
 */
export function MediaFrame({ children, shape = 'arch', src, alt = '', className, ...rest }: MediaFrameProps) {
	return (
		<div className={cx('pz-media', `pz-media--${shape}`, className)} {...rest}>
			{src ? <img src={src} alt={alt} /> : children}
		</div>
	);
}
