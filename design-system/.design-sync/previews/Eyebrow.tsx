import { Eyebrow, Heading, Stack, Text } from '@phaarzz/ui';

export const AboveAHeading = () => (
	<Stack gap={2}>
		<Eyebrow>Coming soon</Eyebrow>
		<Heading level={2}>What we do</Heading>
		<Text muted>The eyebrow sets context in a word or two before the heading lands.</Text>
	</Stack>
);
