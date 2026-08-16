import { Heading, Stack } from '@phaarzz/ui';

export const Levels = () => (
	<Stack gap={4}>
		<Heading level={1}>Phaarzz</Heading>
		<Heading level={2}>Warm colour, soft form</Heading>
		<Heading level={3}>The serif display face</Heading>
	</Stack>
);

export const SemanticOverride = () => (
	<Stack gap={2}>
		<Heading level={1} as="h2">
			Visually level 1, semantically h2
		</Heading>
		<Heading level={3} as="p">
			Visually level 3, rendered as a paragraph
		</Heading>
	</Stack>
);
