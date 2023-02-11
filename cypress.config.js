const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://kasir-api.belajarqa.com",
    specPattern: "cypress/support/e2e/0all.js",
    testIsolation: false,
    supportFile: false,
    experimentalStudio: true,
    defaultCommandTimeout: 10000
  }
  //,
  // env: {
  //   username: "test123",
  //   password: "12345"
  // }
});
