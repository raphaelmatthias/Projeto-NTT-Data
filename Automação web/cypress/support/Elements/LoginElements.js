class LoginElements{

	user = () => '#email';
	password = () => '#password';
	submitButton = () => 'button[type="submit"]';
	registerButton = () => 'button[type="button"]';
	errorMsg = () => 'span';
}
export default new LoginElements();