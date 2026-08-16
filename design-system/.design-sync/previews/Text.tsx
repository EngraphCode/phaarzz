import { Text, Stack } from '@phaarzz/ui';

export const Sizes = () => (
	<Stack gap={4}>
		<Text size="lg">
			A larger lede, for the sentence that has to carry the page before anyone scrolls.
		</Text>
		<Text>
			Body copy sits on Atkinson, which the package ships itself rather than assuming the host
			provides it. Line height is generous because most of this reads as prose, not interface.
		</Text>
		<Text size="sm" muted>
			Small muted text, for captions, metadata and the things that support the main line.
		</Text>
	</Stack>
);

export const Measure = () => (
	<Text>
		Text is capped at a readable measure by default, so a paragraph dropped into a wide container
		does not run to a line length nobody can track. The cap is a token, so a layout that genuinely
		needs wider lines can override it in one place rather than per component.
	</Text>
);
