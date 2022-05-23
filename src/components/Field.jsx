const Field = ({ label, ...props }) => (
	<div className="field">
		<label className="field__label">{label}</label>
		<input className="field__input" {...props} />
	</div>
);

export default Field;
