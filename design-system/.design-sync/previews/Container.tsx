import { Container, Text } from '@phaarzz/ui';

export const Default = () => (
	<div style={{ background: 'var(--surface-sunken)', paddingBlock: '1.5rem' }}>
		<Container>
			<div style={{ background: 'var(--primary-soft)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
				<Text size="sm">Centred, capped at the container token, with a consistent page gutter.</Text>
			</div>
		</Container>
	</div>
);
