/// <reference types="cypress" />
class RegisterMethods{
    
   RegisterUser(){

    const novoUsuario = {
      nome: 'raphinha da Silva',
      email: `teste${Date.now()}'@exemplo.com`, 
      password: 'senhaSegura123',
      administrador: "false"
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', 
      body: novoUsuario,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201); 
      expect(response.body).to.have.property('_id');
    });
    }
  }
  export default new RegisterMethods();
