/// <reference types="cypress" />
import LoginPage from "../../support/Pages/LoginPage"
describe('Validate error messages', () => {

 it('SuccessfullLogin', () => {
    LoginPage.Login("contatoraphaelmathias@gmail.com","raphael.123");
    LoginPage.CheckLoggedIn();
    });

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
