/// <reference types="cypress" />

import RegisterMethods from "../../support/Methods/RegisterMethods"
describe('Cadastro de usuário via API', () => {
  it('Deve cadastrar um novo usuário no sistema', () => {

   RegisterMethods.RegisterUser();

  });
});
