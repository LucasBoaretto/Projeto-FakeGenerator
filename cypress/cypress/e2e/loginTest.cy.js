describe('Login', () => {
  it('Realizar login com sucesso', () => {
    // Arrange
    cy.visit('https://lucasboaretto.github.io/Projeto-FakeGenerator/formulario.html')
    // Act
    cy.get('#name').type('standard name')
    cy.get('#email').type('user@dominio.com.br')
    cy.get('#phone').type('46912341234')
    cy.get('#password').type('password123')
    cy.get('#verify').type('password123')
    cy.get('#enviarFormulario').click()
    // Assert
    // cy.on('window:alert', (alertText) => {
    //   expect(alertText).to.contains('Cadastro realizado com sucesso!')
    // })
  })
})