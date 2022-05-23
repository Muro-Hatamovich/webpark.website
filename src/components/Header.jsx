// Importing components
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => (
	<header className="header">
		<div className="header__container container">
			<Logo className="header__logo logo" src="/images/logo-dark.png" />
			<Navbar className="navbar" />
			<button className="header__btn">Оставить заявку</button>
		</div>
	</header>
);

export default Header;
