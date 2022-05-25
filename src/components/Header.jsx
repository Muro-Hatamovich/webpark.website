import { useState } from "react";

// Importing components
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hamburger from "hamburger-react";

const Header = () => {
	const [isMobileNav, setIsMobileNav] = useState(false);

	return (
		<header className="header">
			<div className="header__container container">
				<Logo
					className="header__logo logo"
					src="/images/logo-dark.png"
				/>
				<Navbar className={isMobileNav ? "active navbar" : "navbar"} />
				<button className="header__btn">Оставить заявку</button>
				<Hamburger toggled={isMobileNav} toggle={setIsMobileNav} />
			</div>
		</header>
	);
};

export default Header;
