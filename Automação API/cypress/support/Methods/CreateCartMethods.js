/// <reference types="cypress" />

class CreateCartMethods {
  CreateCart(idProduct, quantity) {
    cy.get('@token').then((token) => {
      cy.get('@idUsuario').then((idUsuario) => {
        cy.request({
          method: 'GET',
          url: `https://serverest.dev/carrinhos?idUsuario=${idUsuario}`,
          headers: {
            Authorization: token
          }
        }).then((carrinhosResponse) => {
          if (carrinhosResponse.body.quantidade > 0) {
            cy.request({
              method: 'DELETE',
              url: 'https://serverest.dev/carrinhos/cancelar-compra',
              headers: {
                Authorization: token
              }
            }).then((deleteResponse) => {
              expect(deleteResponse.status).to.eq(200);
              expect(deleteResponse.body).to.have.property('message').and.contain('sucesso');
              createNewCart(token);
            });
          } else {
            createNewCart(token);
          }
        });
      });
    });



    function createNewCart(token) {
      const produtoParaAdicionar = {
        idProduto: idProduct,
        quantidade: quantity
      };

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
          Authorization: token
        },
        body: {
          produtos: [produtoParaAdicionar]
        }
      }).then((carrinhoResponse) => {
        expect(carrinhoResponse.status).to.eq(201);
        expect(carrinhoResponse.body).to.have.property('message').and.contain('sucesso');
      });
    }
  }
}

export default new CreateCartMethods();
