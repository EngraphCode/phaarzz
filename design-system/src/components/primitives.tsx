import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

/** Root wrapper. Establishes the token scope and base typography. */
export interface RootProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	/** Force a theme. Omit to follow the user's system preference. */
	theme?: 'light' | 'dark';
}
export function Root({ children, theme, className, ...rest }: RootProps) {
	return (
		<div className={cx('pz-root', theme, className)} {...rest}>
			{children}
		</div>
	);
}

/** Centred, max-width page gutter. */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
export function Container({ children, className, ...rest }: ContainerProps) {
	return (
		<div className={cx('pz-container', className)} {...rest}>
			{children}
		</div>
	);
}

/** A vertical page band. Consecutive sections are separated by a hairline. */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
	children?: ReactNode;
}
export function Section({ children, className, ...rest }: SectionProps) {
	return (
		<section className={cx('pz-section', className)} {...rest}>
			{children}
		</section>
	);
}

/** Vertical rhythm. `gap` maps to the spacing scale. */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	gap?: 2 | 4 | 6 | 8;
}
export function Stack({ children, gap = 4, className, ...rest }: StackProps) {
	return (
		<div className={cx('pz-stack', `pz-stack--${gap}`, className)} {...rest}>
			{children}
		</div>
	);
}

/** Auto-fitting responsive grid. */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
export function Grid({ children, className, ...rest }: GridProps) {
	return (
		<div className={cx('pz-grid', className)} {...rest}>
			{children}
		</div>
	);
}

/** Display heading. Always renders in the serif display face. */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: ReactNode;
	level?: 1 | 2 | 3;
	/** Render a different tag than the visual level implies. */
	as?: ElementType;
}
export function Heading({ children, level = 2, as, className, ...rest }: HeadingProps) {
	const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
	return (
		<Tag className={cx('pz-heading', `pz-heading--${level}`, className)} {...rest}>
			{children}
		</Tag>
	);
}

/** Body copy. */
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	children?: ReactNode;
	size?: 'sm' | 'base' | 'lg';
	muted?: boolean;
	as?: ElementType;
}
export function Text({ children, size = 'base', muted, as, className, ...rest }: TextProps) {
	const Tag = (as ?? 'p') as ElementType;
	return (
		<Tag
			className={cx('pz-text', size !== 'base' && `pz-text--${size}`, muted && 'pz-text--muted', className)}
			{...rest}
		>
			{children}
		</Tag>
	);
}

/** Small uppercase label above a heading. */
export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
	children?: ReactNode;
}
export function Eyebrow({ children, className, ...rest }: EyebrowProps) {
	return (
		<p className={cx('pz-eyebrow', className)} {...rest}>
			{children}
		</p>
	);
}
