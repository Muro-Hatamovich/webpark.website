// Importing components
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const SocialMedia = () => (
	<div className="social-media">
		<a
			className="social-media__item"
			href="https://google.com"
			rel="noreferrer"
			target="_blank"
		>
			<BsInstagram className="social-media__icon" />
		</a>

		<a
			className="social-media__item"
			href="https://google.com"
			rel="noreferrer"
			target="_blank"
		>
			<BsFacebook className="social-media__icon" />
		</a>

		<a
			className="social-media__item"
			href="https://google.com"
			rel="noreferrer"
			target="_blank"
		>
			<BsTelegram className="social-media__icon" />
		</a>
	</div>
);

export default SocialMedia;
