import { Card, Text, Grid, Badge } from '@phaarzz/ui';

export const Petal = () => (
	<Card title="Considered by default">
		<Text size="sm" muted>
			The asymmetric radius leans the eye diagonally. This is the container most content should sit in.
		</Text>
	</Card>
);

export const Rounded = () => (
	<Card shape="rounded" title="The calmer alternative">
		<Text size="sm" muted>
			Even radius on all four corners, for when the petal shape would fight the content.
		</Text>
	</Card>
);

export const InAGrid = () => (
	<Grid>
		<Card title="Discovery">
			<Text size="sm" muted>We start by understanding what you actually need.</Text>
		</Card>
		<Card title="Design">
			<Text size="sm" muted>Then we shape it, in the open, with you in the room.</Text>
		</Card>
		<Card title="Delivery">
			<Text size="sm" muted>And we ship it, with the tests to prove it works.</Text>
		</Card>
	</Grid>
);

export const WithBadge = () => (
	<Card title="Partnership tier">
		<div style={{ marginBottom: '.75rem' }}>
			<Badge tone="primary">Most popular</Badge>
		</div>
		<Text size="sm" muted>Ongoing collaboration with a standing weekly session.</Text>
	</Card>
);
