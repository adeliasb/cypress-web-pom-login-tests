/// <reference types="cypress" />

import { LoginPage } from "../pages/LoginPage";

const cenariosNegativos = {
  senhaErrada: {
    descricao: "Senha incorreta",
    mensagemEsperada: "Your password is invalid!",
  },
  usuarioInexistente: {
    descricao: "Usuário que não existe",
    mensagemEsperada: "Your username is invalid!",
  },
  camposVazios: {
    descricao: "Campos obrigatórios vazios",
    mensagemEsperada: "Your username is invalid!",
  },
};

describe("Cenários negativos de login", () => {
  let usuarios = {};

  // Carrega a fixture ANTES de rodar os testes
  before(() => {
    cy.fixture("usuarioInvalido").then((dados) => {
      usuarios = dados;
    });
  });

  // Os testes ficam visíveis desde o início
  Object.entries(cenariosNegativos).forEach(([perfil, config]) => {
    it(`Não deve logar com perfil inválido: ${config.descricao}`, () => {
      const loginPage = new LoginPage();

      const dados = usuarios[perfil];
      if (!dados) {
        throw new Error(`Perfil "${perfil}" não encontrado na fixture`);
      }

      if (perfil === "camposVazios") {
        loginPage.loginInvalido("", "", true); // não preencher
      } else {
        const { username, password } = dados;
        loginPage.loginInvalido(username, password);
      }

      cy.get(".flash.error")
        .should("be.visible")
        .and("contain", config.mensagemEsperada);
    });
  });
});
