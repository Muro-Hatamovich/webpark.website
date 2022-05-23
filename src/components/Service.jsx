const Service = ({ img, name, description }) => (
	<div className="service">
		<img className="service__img" src={img} alt="" />
		<div className="service__body">
			<h3 className="service__name">{name}</h3>
			<p className="service__description">{description}</p>
		</div>
	</div>
);

export default Service;
