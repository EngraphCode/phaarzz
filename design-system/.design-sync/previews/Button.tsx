import { Button } from '@phaarzz/ui';

export const Variants = () => (
	<div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
		<Button>Get in touch</Button>
		<Button variant="secondary">Learn more</Button>
		<Button variant="ghost">Cancel</Button>
	</div>
);

export const Sizes = () => (
	<div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
		<Button size="md">Book a call</Button>
		<Button size="sm">Book a call</Button>
	</div>
);

export const States = () => (
	<div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
		<Button disabled>Unavailable</Button>
		<Button variant="secondary" disabled>
			Unavailable
		</Button>
	</div>
);

export const AsLink = () => (
	<div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
		<Button href="https://www.phaarzz.com">Visit the site</Button>
		<Button href="#pricing" variant="secondary">
			See pricing
		</Button>
	</div>
);
