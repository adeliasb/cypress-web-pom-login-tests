// Classe (em LoginPage.js)

// Exporta a classe para ser usada nos testes
export class LoginPage {
  visitar() {
    cy.visit("/login");
  }

  // Preenche o campo de nome de usuário
  preencherUsername(username) {
    cy.get("#username").type(username);
  }

  // Preenche o campo de senha
  preencherPassword(password) {
    cy.get("#password").type(password);
  }

  // Clica no botão de login
  submeter() {
    cy.get('button[type="submit"]').click();
  }

  // Fluxo completo de login com parâmetros
  loginValido(username, password) {
    this.visitar();
    this.preencherUsername(username);
    this.preencherPassword(password);
    this.submeter();
  }
  // Fluxo de login inválido (pode simular campos vazios sem quebrar o Cypress)
  loginInvalido(username, password, pularPreenchimento = false) {
    this.visitar(); // Abre a tela de login

    if (!pularPreenchimento) {
      // Preenche somente se não for para pular
      cy.get("#username").clear().type(username);
      cy.get("#password").clear().type(password);
    }

    this.submeter(); // Clica no botão de login
  }
}
