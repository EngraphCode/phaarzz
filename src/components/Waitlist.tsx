import { useState, type CSSProperties, type FormEvent } from 'react';
import { Button, Card, Eyebrow, Field, Heading, Input, Text } from '@phaarzz/ui';

export interface WaitlistProps {
	/** First city — the copy promises this one opens first. */
	city: string;
}

const column = (gap: string): CSSProperties => ({
	display: 'flex',
	flexDirection: 'column',
	gap: `var(--space-${gap})`,
});

/**
 * Waitlist signup card — the page's one real piece of interactivity, so it
 * ships as a hydrated island while everything around it stays static.
 *
 * Client-side only for now: there is no backend yet, so joining flips the
 * card to its confirmation state without sending the details anywhere.
 */
export default function Waitlist({ city }: WaitlistProps) {
	const [confirmName, setConfirmName] = useState<string | null>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const name = String(new FormData(event.currentTarget).get('name') ?? '').trim();
		setConfirmName(name.split(/\s+/)[0] || 'Darling');
	}

	if (confirmName !== null) {
		return (
			<Card>
				<div
					style={{
						...column('3'),
						alignItems: 'center',
						textAlign: 'center',
						padding: 'var(--space-8) 0',
					}}
				>
					<span
						style={{
							fontFamily: 'var(--font-display)',
							fontSize: 'var(--text-xl)',
							color: 'var(--primary)',
						}}
					>
						shh — you're in.
					</span>
					<Text size="sm" muted>
						{confirmName}, we'll whisper the moment {city} opens. Until then: chin up, shoulders
						back, carry on.
					</Text>
				</div>
			</Card>
		);
	}

	return (
		<Card>
			<div style={column('6')}>
				<div style={column('3')}>
					<Eyebrow>The waitlist</Eyebrow>
					<Heading level={2}>First in, first to exhale</Heading>
					<Text size="sm" muted>
						{city} opens first; more cities to follow. Founding members keep founding prices for
						life. We will never tell anyone you're on this list.
					</Text>
				</div>
				<form onSubmit={handleSubmit} style={column('4')}>
					<Field label="Name">
						{({ id, describedBy, invalid }) => (
							<Input
								id={id}
								name="name"
								autoComplete="name"
								placeholder="Margot Bennett"
								aria-describedby={describedBy}
								aria-invalid={invalid}
							/>
						)}
					</Field>
					<Field label="Email">
						{({ id, describedBy, invalid }) => (
							<Input
								id={id}
								name="email"
								type="email"
								required
								autoComplete="email"
								placeholder="you@example.com"
								aria-describedby={describedBy}
								aria-invalid={invalid}
							/>
						)}
					</Field>
					<Field label="City">
						{({ id, describedBy, invalid }) => (
							<Input
								id={id}
								name="city"
								autoComplete="address-level2"
								placeholder={city}
								aria-describedby={describedBy}
								aria-invalid={invalid}
							/>
						)}
					</Field>
					<Button type="submit" style={{ width: '100%' }}>
						Join the waitlist
					</Button>
				</form>
			</div>
		</Card>
	);
}
