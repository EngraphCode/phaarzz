import { Container, Heading, Section, Text } from '@phaarzz/ui';

export const Consecutive = () => (
	<div>
		<Section>
			<Container>
				<Heading level={3}>What we do</Heading>
				<Text size="sm" muted>Consecutive sections are separated by a hairline automatically.</Text>
			</Container>
		</Section>
		<Section>
			<Container>
				<Heading level={3}>How it works</Heading>
				<Text size="sm" muted>No divider markup required at the call site.</Text>
			</Container>
		</Section>
	</div>
);
