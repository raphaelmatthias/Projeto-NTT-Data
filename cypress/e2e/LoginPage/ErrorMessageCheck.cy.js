/// <reference types="cypress" />
import LoginPage from "../../support/Pages/LoginPage"
describe('Validate error messages', () => {
  it('Validate incorrect email and password', () => {
    LoginPage.CheckIncorrectCredentials();
    });

     it('Validate empty email', () => {
    LoginPage.CheckIncorrectCredentials("user");
    });

     it('Validate empty password', () => {
    LoginPage.CheckIncorrectCredentials("password");
    });

});
