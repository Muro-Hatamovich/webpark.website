// Importing components
import Field from "./Field";

const SignUpForm = () => (
	<form className="sign-up-form">
		<h2 className="sign-up-form__title">Обратная связь</h2>

		<Field label="Ваше имя" />
		<Field label="Ваша электронная почта" />
		<Field label="Ваш номер телефона" />

		<input
			className="sign-up-form__submit"
			type="submit"
			value="Отправить"
		/>
	</form>
);

export default SignUpForm;
