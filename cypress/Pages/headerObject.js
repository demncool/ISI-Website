class headerObject {
    verifyHeaderElements = (selector) => {
        return cy.get(selector)
    }

    verifyHeaderLogo = (selector) => {
        cy.get(selector)
            .click()
    }

    verifyNavigationFunction = (selector) => {
        return cy.get(selector)
            .click()
    }
}
module.exports = headerObject