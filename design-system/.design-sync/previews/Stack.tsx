import { Stack, Text } from '@phaarzz/ui';

const Box = ({ children }: { children: React.ReactNode }) => (
	<div style={{ background: 'var(--primary-soft)', padding: '.5rem .75rem', borderRadius: 'var(--radius-sm)' }}>
		<Text size="sm">{children}</Text>
	</div>
);

export const Gaps = () => (
	<div style={{ display: 'flex', gap: '2rem' }}>
		{([2, 4, 6, 8] as const).map((g) => (
			<div key={g}>
				<Text size="sm" muted>gap={g}</Text>
				<Stack gap={g} style={{ marginTop: '.5rem' }}>
					<Box>One</Box>
					<Box>Two</Box>
					<Box>Three</Box>
				</Stack>
			</div>
		))}
	</div>
);
