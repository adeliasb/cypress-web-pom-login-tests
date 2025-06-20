const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com", // 🔁 substitua com o endereço real que você está usando
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
