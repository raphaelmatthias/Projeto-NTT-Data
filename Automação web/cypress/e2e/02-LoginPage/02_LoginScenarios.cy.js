/// <reference types="cypress" />
import LoginPage from "../../support/Pages/LoginPage"
describe('Login scenarios', () => {

 it('Successfull Login', () => {
    LoginPage.Login("contatoraphaelmathias@gmail.com","raphael.123");
    LoginPage.CheckLoggedIn();
    });

  it('Validate incorrect email and password', () => {
    LoginPage.CheckIncorrectCredentials();
    });

     it('Validate empty email', () => {
    LoginPage.CheckEmptyCredential("user");
    });

     it('Validate empty password', () => {
    LoginPage.CheckEmptyCredential("password");
    });

   

});
