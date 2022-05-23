// Importing components
import Clients from "./Clients";

const About = () => (
	<div className="about">
		<div className="about__container container">
			<div className="about__row">
				<div className="about__block about__left">
					<h2 className="about__title">Немного о W E B P A R K</h2>
					<p className="about__para">
						WebPark - это студия веб разработки которая
						предоставляет услуги разработки веб сайтов написанных
						ручным кодом, и SMM (продвижение в социальных сетях)
						Уникальная функция amoCRM — диджитал воронка позволяет
						интегрировать в вашу воронку продаж весь спектр онлайн
						инструментов коммуникации и утепления клиентов. Проще
						говоря, клиенты будут видеть специальную рекламу,
						получать уведомления, а вы будете видеть их реакцию.
						Таким образом, продвижения потенциального клиента по
						воронке продаж происходит, практически, автоматически.
					</p>
				</div>

				<div className="about__block about__right">
					<img
						className="about__img"
						src="/images/about.img.png"
						alt="About us"
					/>
				</div>
			</div>

			<Clients />
		</div>
	</div>
);

export default About;
