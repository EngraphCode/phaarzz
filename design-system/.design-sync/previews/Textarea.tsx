import { Textarea, Stack } from '@phaarzz/ui';

export const States = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Stack gap={4}>
			<Textarea placeholder="Tell us what you need" />
			<Textarea defaultValue="We are looking for help shaping a new product from scratch, starting in the autumn." />
		</Stack>
	</div>
);
