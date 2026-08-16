import { Input, Stack } from '@phaarzz/ui';

export const States = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Stack gap={4}>
			<Input placeholder="Empty, with placeholder" />
			<Input defaultValue="Filled in" />
			<Input aria-invalid defaultValue="Invalid value" />
			<Input disabled defaultValue="Disabled" />
		</Stack>
	</div>
);
