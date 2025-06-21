# 🚀 Automação de Testes Web com Cypress + Page Object Model (POM)

![GitHub Actions](https://github.com/adeliasb/cypress-web-pom-login-tests/actions/workflows/cypress.yml/badge.svg)

Este projeto demonstra uma automação de testes web focada no fluxo de login, utilizando o framework **Cypress**. Foi implementado o padrão de projeto **Page Object Model (POM)** para manter o código limpo, escalável e de fácil manutenção. Também foram aplicadas boas práticas como uso de **fixtures**, **commands customizados** e **integração contínua (CI)** com **GitHub Actions**.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- ✅ [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- ✅ JavaScript (ES6+)
- ✅ Node.js (ambiente de execução)
- ✅ GitHub Actions - Integração contínua (CI)
- ✅ HerokuApp – Site base: [the-internet.herokuapp.com](https://the-internet.herokuapp.com/login)

---

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│ └── login.cy.js # Testes de login positivos
│ └── login_negativo.cy.js # Testes negativos
├── fixtures/
│ └── usuarioValido.json # Massa de dados com perfis
├── pages/
│ └── LoginPage.js # Page Object Model
├── support/
│ └── commands.js # Comandos customizados
│ └── e2e.js # Setup global do Cypress

---

## ✅ Boas Práticas Aplicadas

- 🔁 **Page Object Model (POM)** para encapsular a lógica das páginas
- 📦 **Fixtures** para centralizar e reutilizar dados de teste
- ♻️ **Parametrização de cenários** com `Object.entries()` para evitar repetição
- 🧱 **Separação de testes positivos e negativos**
- 🧩 **Custom commands** com `commands.js`
- ☁️ **Integração contínua com GitHub Actions**
- 🔍 **Validação de mensagens de erro específicas**

---

## ▶️ Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/adeliasb/cypress-web-pom-login-tests.git
cd cypress-web-pom-login-tests

2.	Instale as dependências:
    npm install

3.	Execute os testes:
    npx cypress open   # Interface visual
    npx cypress run    # Headless (modo terminal)

---

☁️ Execução no GitHub Actions

Este projeto está configurado para rodar automaticamente os testes Cypress no navegador Chrome headless, sempre que houver alterações no repositório.

🔄 A automação é executada via workflow cypress.yml.

---

👩‍💻 Desenvolvido por

Adélia dos Santos Barroso
Analista de Qualidade de Software | QA Senior
LinkedIn: https://www.linkedin.com/in/abarroso/

---

📚 Links úteis
	•	Documentação oficial do Cypress: https://docs.cypress.io/
	•	Page Object Model – Cypress Docs: https://docs.cypress.io/guides/references/best-practices#Page-Objects
```
