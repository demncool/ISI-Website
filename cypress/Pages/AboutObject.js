class AboutOject {
    verifyAboutPageElements = () => {
        cy.get(".abtus-text")
            .scrollIntoView()
            .should("be.visible")
            .and("not.be.empty")
        cy.get(".joinTeam-abtus-btn")
            .should("be.visible")
            .scrollIntoView()
        cy.get("h2.about-title:eq(0)")
            .scrollIntoView()
            .should("be.visible")
            .and("not.be.empty")
    }

    verifyJoinUsBtn = (selector) => {
        cy.get(selector)
            .scrollIntoView()
            .click()
    }
}
module.exports = AboutOject