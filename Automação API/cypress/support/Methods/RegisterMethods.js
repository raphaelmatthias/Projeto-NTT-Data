/// <reference types="cypress" />
class RegisterMethods {
  
  RegisterUser() {
    const email = "contatoraphaelmathias@gmail.com";
    
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
    }).then((response) => {
      const usuarios = response.body.usuarios || [];
      const usuarioExistente = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (!usuarioExistente) {
        const novoUsuario = {
          nome: 'raphinha da Silva',
          email: email, 
          password: 'raphael.123',
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
      } else {
        const novoUsuarioComEmailUnico = {
          nome: 'raphinha da Silva',
          email: `teste${Date.now()}@exemplo.com`,
          password: 'raphael.123',
          administrador: "false"
        };

        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/usuarios', 
          body: novoUsuarioComEmailUnico,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(201); 
          expect(response.body).to.have.property('_id');
        });
      }
    });
  }
}

export default new RegisterMethods();
