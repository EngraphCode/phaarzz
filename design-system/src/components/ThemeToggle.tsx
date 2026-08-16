import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'phaarzz-theme';

const OPTIONS: { value: Theme; label: string }[] = [
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },
	{ value: 'system', label: 'Auto' },
];

function readStored(): Theme {
	try {
		const v = localStorage.getItem(THEME_STORAGE_KEY);
		return v === 'light' || v === 'dark' ? v : 'system';
	} catch {
		return 'system';
	}
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;
	// Only an explicit choice sets a class; on "system" neither is present and
	// the prefers-color-scheme rules in tokens.css decide — which is what keeps
	// theme detection working with JavaScript disabled.
	root.classList.remove('light', 'dark');
	if (theme !== 'system') root.classList.add(theme);
	root.style.colorScheme = theme === 'system' ? 'light dark' : theme;
}

export interface ThemeToggleProps {
	className?: string;
}

/**
 * Three-state theme control: Light / Dark / Auto.
 *
 * Renders nothing on the server pass and mounts with the stored value, so the
 * pressed state is never wrong — the static-site equivalent of the hydration
 * guard. Pair it with the inline head script that applies the stored theme
 * before first paint; this component only handles interaction.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
	const [theme, setTheme] = useState<Theme>('system');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setTheme(readStored());
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = () => {
			if (readStored() === 'system') applyTheme('system');
		};
		media.addEventListener('change', onChange);
		const onStorage = (e: StorageEvent) => {
			if (e.key === THEME_STORAGE_KEY) setTheme(readStored());
		};
		window.addEventListener('storage', onStorage);
		return () => {
			media.removeEventListener('change', onChange);
			window.removeEventListener('storage', onStorage);
		};
	}, [mounted]);

	const choose = useCallback((next: Theme) => {
		try {
			if (next === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
			else localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {
			// Storage unavailable — the choice still applies to this page view.
		}
		setTheme(next);
		applyTheme(next);
	}, []);

	useEffect(() => {
		if (mounted) applyTheme(theme);
	}, [mounted, theme]);

	return (
		<div className={['pz-theme-toggle', className].filter(Boolean).join(' ')} role="group" aria-label="Theme selection">
			{OPTIONS.map((option, i) => (
				<span key={option.value} style={{ display: 'contents' }}>
					{i > 0 ? (
						<span className="pz-theme-toggle__sep" aria-hidden="true">
							·
						</span>
					) : null}
					<button type="button" aria-pressed={mounted && theme === option.value} onClick={() => choose(option.value)}>
						{option.label}
					</button>
				</span>
			))}
			<span className="pz-sr-only" aria-live="polite">
				{mounted
					? theme === 'system'
						? 'Theme set to system preference'
						: `Theme set to ${theme} mode`
					: ''}
			</span>
		</div>
	);
}
