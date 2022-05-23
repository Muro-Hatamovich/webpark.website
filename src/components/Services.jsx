// Importing components
import Service from "./Service";

const Services = () => (
	<div className="services">
		<div className="services__container container">
			<div className="services__block services__left">
				<h2 className="services__title">Наши услуги</h2>

				<p className="services__para">
					Мы предоставляем качественный продукт, каждый
					предоставляемый нами продукт проходит полный цикл
					тестирования.
				</p>

				<button className="services__btn">Заказать услугу</button>
			</div>

			<div className="services__block services__right">
				<Service
					img={"/images/service-web-dev.png"}
					name="Разработка сайтов"
					description="Разработка сайтов высокого качества, с помощью новейших технологии и использованием ручного кода."
				/>
				<Service
					img={"/images/smm-target.png"}
					name="SMM продвижение"
					description="Продвижение вашего бизнеса в социальных сетях. Таргетирование и увеличение количества заявок."
				/>
				<Service
					img={"/images/service-design.png"}
					name="ui / ux дизайн"
					description="Создание современного дизайна/макета с индивидуальным подходом к каждому клиенту."
				/>
			</div>
		</div>
	</div>
);

export default Services;
