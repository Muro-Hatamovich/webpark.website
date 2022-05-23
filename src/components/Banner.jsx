// Importing components
import Highlights from "../components/Highlights";

const Banner = () => (
	<div className="banner">
		<div className="banner__container container">
			<div className="banner__row">
				<div className="banner__block banner__left">
					<h1 className="banner__title">
						WebPark - Ваш надежный партнер
					</h1>
					<p className="banner__para">
						Социальные сети — огромная площадка для работы с
						аудиторией. Выход за рамки сообществ, готовность к
						диалогу, сдерживанию негатива и оказанию поддержки
						бренд-адептам — все это, в конечном счете, позволяет
						бренду стать ближе к своему конечному покупателю и лучше
						понять его.
					</p>

					<button className="banner__btn btn">
						Бесплатная консультация
					</button>
				</div>

				<div className="banner__block banner__right">
					<img
						className="banner__img"
						src="/images/banner.image.coding.png"
						alt=""
					/>
				</div>
			</div>

			<Highlights className="highlights" />
		</div>
	</div>
);

export default Banner;
