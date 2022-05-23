const Highlights = ({ className }) => (
	<div className={className}>
		<div className={`${className}-item`}>
			<span className={`${className}-item__title`}>
				Прибыльный бизнес
			</span>
			<p className={`${className}-item__para`}>
				Вы будете довольны увиденным
			</p>
		</div>

		<div className={`${className}-item`}>
			<span className={`${className}-item__title`}>Высшее качество</span>
			<p className={`${className}-item__para`}>
				Гарантируем предоставление качественного продукта
			</p>
		</div>

		<div className={`${className}-item`}>
			<span className={`${className}-item__title`}>
				Ежедневные заявки
			</span>
			<p className={`${className}-item__para`}>Клиенты потекут рекой</p>
		</div>

		<div className={`${className}-item`}>
			<span className={`${className}-item__title`}>
				Индивидуальный подход
			</span>
			<p className={`${className}-item__para`}>
				Мы подберем всё самое необходимое для вашего бизнеса
			</p>
		</div>
	</div>
);

export default Highlights;
