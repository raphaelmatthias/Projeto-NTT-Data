/// <reference types="cypress" />


describe('Cadastro de usuário via API', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const User = {
      email: 'contatoraphaelmathias@gmail.com', 
      password: 'raphael.123',
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login', 
      body: User,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('authorization');
    });
  });
});
