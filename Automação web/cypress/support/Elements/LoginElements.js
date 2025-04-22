class LoginElements{

	user = () => '#email';
	password = () => '#password';
	submitButton = () => 'button[type="submit"]';
	registerButton = () => '.btn.btn-link';
	errorMsg = () => 'span';
}
export default new LoginElements();