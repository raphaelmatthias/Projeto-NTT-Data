/// <reference types="cypress" />
import RegisterPage from "../../support/Pages/RegisterPage"
import LoginPage from "../../support/Pages/LoginPage"
describe('register the user in the system', () => {
  it('Register Successfully', () => {
    LoginPage.GoToRegisterPage();
    RegisterPage.FillFields();
    RegisterPage.CheckSuccessfullRegister();
    });


});
