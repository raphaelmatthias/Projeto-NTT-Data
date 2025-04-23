/// <reference types="cypress" />
import RegisterElements from "../elements/RegisterElements"

       
    
class RegisterPage{

    FillFields(){
        cy.emailJaCadastrado().then((existe) => {
            cy.log('Email existe?', existe);
  const email = existe ? `${Date.now()}@gmail.com` : 'contatoraphaelmathias@gmail.com';
  cy.log(existe);
  cy.get(RegisterElements.name()).type('Raphael');
  cy.get(RegisterElements.email()).type(email);
  cy.get(RegisterElements.password()).type('raphael.123');
  cy.get(RegisterElements.registerButton()).click();
});

      


    }
    CheckSuccessfullRegister(){
         cy.get(RegisterElements.sucessMsg()).contains('Cadastro realizado com sucesso').should('be.visible');
         cy.url().should('include', '/home');
    }


}

export default new RegisterPage();
    
    
 
