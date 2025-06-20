/// <reference types="cypress" />

import { LoginPage } from "../pages/LoginPage";

describe("Testes de login com múltiplos perfis", () => {
  let usuarios;

  // Antes dos testes, carrega o arquivo de fixture com os usuários
  before(() => {
    cy.fixture("usuarioValido").then((dados) => {
      usuarios = dados;
    });
  });

  // Define os perfis com rótulos amigáveis (chave, valor)
  const perfis = {
    simples: "Usuário básico",
    avancado: "Usuário avançado",
    vendedor: "Usuário vendedor",
  };

  // Para cada perfil, executa um teste separado
  Object.entries(perfis).forEach(([chavePerfil, descricaoPerfil]) => {
    it(`Deve logar com perfil: ${descricaoPerfil}`, () => {
      const loginPage = new LoginPage(); // Cria uma instância da página
      const { username, password } = usuarios[chavePerfil]; // Acessa o usuário correspondente

      loginPage.loginValido(username, password); // Executa o login

      // Validação pós-login
      cy.contains("You logged into a secure area!").should("be.visible");

      // Faz logout após login
      cy.get(".icon-2x.icon-signout").click();
    });
  });
});
