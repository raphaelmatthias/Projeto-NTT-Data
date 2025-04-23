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
Cypress.Commands.add('emailJaCadastrado', (emailFixo = 'contatoraphaelmathias@gmail.com') => {
  return cy.request('GET', 'https://serverest.dev/usuarios').then((response) => {
    const usuarios = response.body.usuarios || [];

    const emailAlvo = emailFixo.trim().toLowerCase();

    const emailEncontrado = usuarios.find(user => {
      const emailUsuario = user.email?.trim().toLowerCase();
      const match = emailUsuario === emailAlvo;
      console.log(`Comparando: "${emailUsuario}" === "${emailAlvo}" -> ${match}`);
      return match;
    });

    return !!emailEncontrado;
  });
});




