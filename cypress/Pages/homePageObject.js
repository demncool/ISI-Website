class homepageObject {
    verifyAllElement = (selector) => {
        return cy.get(selector)
    }

    verifyLetsTalkBtn = (selector) => {
        cy.get(selector)
            .click()
    }

    verifyJoinBtn = (selector) => {
        cy.get(selector)
            .click()
    }

    verifyLogoHover = (selector) => {
        cy.get(selector).rightclick()
    }
}

module.exports = homepageObject