import { Footer } from '@phaarzz/ui';

export const Default = () => <Footer owner="Phaarzz" year={2026} />;

export const CustomContent = () => (
	<Footer>
		<span>
			Built in the open. <a href="#contact">Get in touch</a>.
		</span>
	</Footer>
);
