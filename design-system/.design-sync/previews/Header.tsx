import { Header } from '@phaarzz/ui';

const LINKS = [
	{ href: '#what', label: 'What we do' },
	{ href: '#how', label: 'How it works' },
	{ href: '#contact', label: 'Contact' },
];

export const WithNav = () => <Header brand="Phaarzz" links={LINKS} />;

export const BrandOnly = () => <Header brand="Phaarzz" showThemeToggle={false} />;
