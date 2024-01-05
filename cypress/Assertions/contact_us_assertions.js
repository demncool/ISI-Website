class ContactUsAssertions {
    verifyFormFieldIfEmptyAssertions() {
        cy.get(".errors").should("be.visible")
    }
}
module.exports = ContactUsAssertions