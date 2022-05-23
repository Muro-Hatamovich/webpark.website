// Importing components
import Contacts from "./Contacts";

const Footer = () => (
	<footer className="footer">
		<div className="footer__container container">
			<img className="footer__img" src="/images/contact-us.png" alt="" />

			<Contacts />
		</div>
	</footer>
);

export default Footer;
