/// <reference types="cypress" />
import RegisterElements from "../elements/RegisterElements"

       
    
class RegisterPage{

    FillFields(){
        cy.get(RegisterElements.name()).type('Raphael');
        cy.get(RegisterElements.email()).type(`${Date.now()}@gmail.com`);
        cy.get(RegisterElements.password()).type('SenhaTeste');
        cy.get(RegisterElements.registerButton()).click();

    }
    CheckSuccessfullRegister(){
         cy.get(RegisterElements.sucessMsg()).contains('Cadastro realizado com sucesso').should('be.visible');
         cy.url().should('include', '/home');
    }


}

export default new RegisterPage();
    
    
 
