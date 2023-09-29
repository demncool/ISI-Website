const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "https://dev.innovuze.com/",
    scrollBehavior: 'nearest',
    //numTestsKeptInMemory: 0,
    pageLoadTimeout: 120000,
    responseTimeout: 120000,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
