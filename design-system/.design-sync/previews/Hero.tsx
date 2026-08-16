import { Button, Hero } from '@phaarzz/ui';

export const Full = () => (
	<Hero
		eyebrow="Coming soon"
		title="Phaarzz"
		lede="One line explaining what Phaarzz does and who it is for."
		actions={
			<>
				<Button href="#contact">Get in touch</Button>
				<Button href="#what" variant="secondary">
					Learn more
				</Button>
			</>
		}
	/>
);

export const TitleOnly = () => <Hero title="Phaarzz" lede="The quietest version of the page opener." />;
