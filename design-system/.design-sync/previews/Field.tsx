import { Field, Input, Select, Textarea, Stack } from '@phaarzz/ui';

export const WithHint = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Field label="Name" hint="As you would like to be addressed">
			{({ id, describedBy }) => <Input id={id} aria-describedby={describedBy} placeholder="Ada Lovelace" />}
		</Field>
	</div>
);

export const WithError = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Field label="Email" error="Enter a valid email address">
			{({ id, describedBy, invalid }) => (
				<Input id={id} aria-describedby={describedBy} aria-invalid={invalid} defaultValue="ada@" />
			)}
		</Field>
	</div>
);

export const FullForm = () => (
	<div style={{ maxWidth: '22rem' }}>
		<Stack gap={4}>
			<Field label="Name">{({ id }) => <Input id={id} placeholder="Ada Lovelace" />}</Field>
			<Field label="Enquiry type">
				{({ id }) => (
					<Select id={id}>
						<option>General</option>
						<option>Partnership</option>
						<option>Press</option>
					</Select>
				)}
			</Field>
			<Field label="Message" hint="A sentence or two is plenty">
				{({ id, describedBy }) => (
					<Textarea id={id} aria-describedby={describedBy} placeholder="Tell us what you need" />
				)}
			</Field>
		</Stack>
	</div>
);
