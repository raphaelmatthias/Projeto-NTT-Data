// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
Cypress.Commands.add('loginEGuardarToken', (email, password) => {
  cy.request('POST', 'https://serverest.dev/login', {
    email: email,
    password: password
  }).then((res) => {
    const token = res.body.authorization;
    cy.wrap(token).as('token');
  });
});
Cypress.Commands.add('recuperarIDUsuario', (email) => {
  cy.request('GET', 'https://serverest.dev/usuarios').then((res) => {
    const usuarios = res.body.usuarios || [];
    const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (usuario && usuario._id) {
      cy.wrap(usuario._id).as('idUsuario'); // Armazena com alias se quiser usar depois com this.idUsuario
    } else {
      throw new Error(`Usuário com email "${email}" não encontrado.`);
    }
  });
});
