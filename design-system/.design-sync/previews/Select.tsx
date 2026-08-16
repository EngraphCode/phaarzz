import { Select, Stack } from '@phaarzz/ui';

export const Options = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Stack gap={4}>
			<Select>
				<option>General enquiry</option>
				<option>Partnership</option>
				<option>Press</option>
			</Select>
			<Select disabled>
				<option>Unavailable</option>
			</Select>
		</Stack>
	</div>
);
