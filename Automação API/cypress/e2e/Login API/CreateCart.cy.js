/// <reference types="cypress" />


describe('Cadastro de carrinho via API', () => {
  it('Deve cadastrar um novo carrinho com sucesso', () => {
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
      const token = response.body.authorization;
      expect(token).to.contain('Bearer');
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: {
          Authorization: token
        },
        body: {
          "produtos": [
                        {
                         "idProduto": "BeeJh5lz3k6kSIzA",
                         "quantidade": 1
                        }
                      ]
        }
      }).then((carrinhoResponse) => {
        expect(carrinhoResponse.status).to.eq(201);
        expect(carrinhoResponse.body).to.have.property('message').and.contain('sucesso');
      });
    });
    });
  });

