import type { ReactNode } from 'react';
import { Container, Eyebrow, Heading, Section, Stack, Text } from './primitives';

export interface HeroProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	lede?: ReactNode;
	actions?: ReactNode;
	className?: string;
	id?: string;
}
/** Page-opening band: eyebrow, display title, lede, actions. */
export function Hero({ eyebrow, title, lede, actions, className, id }: HeroProps) {
	return (
		<Section className={className} id={id}>
			<Container>
				<Stack gap={4}>
					{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
					<Heading level={1}>{title}</Heading>
					{lede ? (
						<Text size="lg" muted>
							{lede}
						</Text>
					) : null}
					{actions ? (
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
							{actions}
						</div>
					) : null}
				</Stack>
			</Container>
		</Section>
	);
}
