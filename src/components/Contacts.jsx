// Importing components
import SignUpForm from "./SignUpForm";
import SocialMedia from "./SocialMedia";
import { BsTelephoneForward } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { MdMessage } from "react-icons/md";

const Contacts = () => (
	<div className="contacts">
		<h2 className="contacts__title">Наши контакты</h2>

		<div className="contacts-info">
			<div className="contacts-info__item contacts-info__phone">
				<a className="contacts-info__link" href="tel:+998987074922">
					<BsTelephoneForward className="contacts-info__icon" />
					<span>+998 (98) 707-49-22</span>
				</a>
			</div>
			<div className="contacts-info__item contacts-info__phone">
				<a className="contacts-info__link" href="tel:+998994395221">
					<BsPhone className="contacts-info__icon" />
					<span>+998 (99) 439-52-21</span>
				</a>
			</div>
			<div className="contacts-info__item contacts-info__email">
				<a
					className="contacts-info__link"
					href="mailTo:info.webpark.uz@gmail.com"
				>
					<MdMessage className="contacts-info__icon" />
					<span>info.webpark.uz@gmail.com</span>
				</a>
			</div>
			<div className="contacts-info__item contacts-info__location">
				Республика Узбекистан, г. Ташкент, Юнусабадский р-н, Ц5, дом
				46B/24
			</div>

			<SocialMedia />
		</div>

		<SignUpForm />
	</div>
);

export default Contacts;
