describe('Teste de API com Cypress', () => {
  it('Deve obter os posts de um usuário específico', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => {
        // Verifique se a resposta tem o status de sucesso (200)
        expect(response.status).to.eq(200);

        // Verifique se a resposta tem uma lista de posts
        expect(response.body).to.be.an('array').that.is.not.empty;

        // Verifique se cada post tem as propriedades corretas
        const firstPost = response.body[0];
        expect(firstPost).to.have.property('userId', 1);
        expect(firstPost).to.have.property('id').that.is.a('number');
        expect(firstPost).to.have.property('title').that.is.a('string');
        expect(firstPost).to.have.property('body').that.is.a('string');
      });
  });
});
