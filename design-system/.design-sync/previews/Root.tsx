import { Root, Heading, Text, Button, Stack, Card } from '@phaarzz/ui';

const Sample = () => (
	<Stack gap={4} style={{ padding: '1.5rem' }}>
		<Heading level={3}>Token scope</Heading>
		<Text size="sm" muted>Everything inside resolves against this container's theme.</Text>
		<Card title="Nested surface">
			<Text size="sm" muted>Raised surface, border and shadow all follow.</Text>
		</Card>
		<Button size="sm">Action</Button>
	</Stack>
);

export const LightAndDark = () => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
		<Root theme="light">
			<Sample />
		</Root>
		<Root theme="dark">
			<Sample />
		</Root>
	</div>
);

export const FollowsSystem = () => (
	<Root>
		<Sample />
	</Root>
);
