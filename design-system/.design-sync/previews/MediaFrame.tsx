import { MediaFrame, Text } from '@phaarzz/ui';

export const Shapes = () => (
	<div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
		<div style={{ textAlign: 'center' }}>
			<MediaFrame style={{ width: '7rem', height: '9rem' }} />
			<Text size="sm">Arch</Text>
		</div>
		<div style={{ textAlign: 'center' }}>
			<MediaFrame shape="petal" style={{ width: '9rem', height: '7rem' }} />
			<Text size="sm">Petal</Text>
		</div>
		<div style={{ textAlign: 'center' }}>
			<MediaFrame shape="circle" style={{ width: '7rem' }} />
			<Text size="sm">Circle</Text>
		</div>
	</div>
);

export const AsPlaceholder = () => (
	<div style={{ maxWidth: '16rem' }}>
		<MediaFrame style={{ width: '100%', height: '10rem' }} />
		<Text size="sm" muted style={{ marginTop: '.5rem' }}>
			With no src, the brand gradient stands in — usable while imagery is outstanding.
		</Text>
	</div>
);
