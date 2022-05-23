import { Link } from "react-router-dom";

const Navbar = ({ className }) => (
	<nav className={className}>
		<Link className={`${className}__item`} to="/">
			Главная
		</Link>
		<Link className={`${className}__item`} to="/">
			О Нас
		</Link>
		<Link className={`${className}__item`} to="/">
			Услуги
		</Link>
		<Link className={`${className}__item`} to="/">
			Контакты
		</Link>
	</nav>
);

export default Navbar;
