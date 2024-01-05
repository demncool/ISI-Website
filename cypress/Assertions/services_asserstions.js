class ServicesAssertions {
    assertTitle(val) {
        cy.get(val).should("be.visible")
            .and("contain", "What We Do")
    }

    VerifyiftheAboutPageContainsAllElementsAssertions(selector, servicesList) {
        cy.get(selector)
            .each((el, index, list) => {
                cy.wrap(el)
                    .should("contain", servicesList[index])
                    .get(".services-description")
                    .should("be.visible")
            })
    }

    Verify_if_Inquire_Now_Button_on_Each_Services_is_WorkingAssertion() {
        cy.get(".contact-us-title")
            .should("contain", "Contact Us")
            .and("be.visible")
            .wait(200)
    }
}
module.exports = ServicesAssertions