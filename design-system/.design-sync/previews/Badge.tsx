import { Badge } from '@phaarzz/ui';

export const Tones = () => (
	<div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
		<Badge tone="primary">Coming soon</Badge>
		<Badge tone="soft">In beta</Badge>
		<Badge tone="neutral">Archived</Badge>
	</div>
);

export const InContext = () => (
	<div style={{ display: 'flex', gap: '.5rem', alignItems: 'baseline' }}>
		<span style={{ fontSize: '1.375rem', fontFamily: 'var(--font-display)' }}>Partnership tier</span>
		<Badge tone="primary">Most popular</Badge>
	</div>
);
