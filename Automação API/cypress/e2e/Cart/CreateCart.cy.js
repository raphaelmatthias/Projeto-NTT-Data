/// <reference types="cypress" />
import CreateCartMethods from "../../support/Methods/CreateCartMethods"

describe('Cadastro de carrinho via API', () => {
  it('Criar novo carrinho checando se já há um cadastrado anteriormente', () => {
  
  cy.loginEGuardarToken("contatoraphaelmathias@gmail.com", "raphael.123"); 
   cy.recuperarIDUsuario("contatoraphaelmathias@gmail.com");
   CreateCartMethods.CreateCart("BeeJh5lz3k6kSIzA", "1", "c29kcL2tLUuhLvs6");
  });
});
