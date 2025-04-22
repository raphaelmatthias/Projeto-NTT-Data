/// <reference types="cypress" />
import LoginElements from "../elements/LoginElements"

class LoginPage{

    CheckIncorrectCredentials(){
        cy.visit('https://front.serverest.dev/login');
        cy.get(LoginElements.user()).type('emailincorreto@gmail.com');
        cy.get(LoginElements.password()).type('minhaSenha');
        cy.get(LoginElements.submitButton()).click();
        cy.get(LoginElements.errorMsg()).contains('Email e/ou senha inválidos').should('be.visible');
    }

    CheckEmptyCredential(credential){
        cy.visit('https://front.serverest.dev/login');
        if(credential == "user"){
            cy.get(LoginElements.password()).type('minhaSenha');
            cy.get(LoginElements.submitButton()).click();
            cy.get(LoginElements.errorMsg()).contains('Email é obrigatório').should('be.visible');
        } else if (credential == "password"){
            cy.get(LoginElements.user()).type('emailincorreto@gmail.com');
            cy.get(LoginElements.submitButton()).click();
            cy.get(LoginElements.errorMsg()).contains('Password é obrigatório').should('be.visible');
        }
    }

    Login(user,password){
        cy.visit('https://front.serverest.dev/login');
            cy.get(LoginElements.user()).type(user);
            cy.get(LoginElements.password()).type(password);
            cy.get(LoginElements.submitButton()).click();
    }
     CheckLoggedIn(){
         cy.url().should('include', '/home');
    }

    GoToRegisterPage(){
        cy.visit('https://front.serverest.dev/login');
        cy.get(LoginElements.registerButton()).click();
    }

}

export default new LoginPage();
    
    
 
