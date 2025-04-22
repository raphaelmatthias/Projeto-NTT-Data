/// <reference types="cypress" />


describe('Login de usuário via API', () => {
  it('Deve logar um novo usuário no sistema', () => {

    cy.loginEGuardarToken("contatoraphaelmathias@gmail.com", "raphael.123"); 
   
  });
});
