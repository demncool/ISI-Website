class ContactUsAssertions {

    assertContactModalContainsElements() {
    }

    verifyFormFieldIfEmptyAssertions() {
        cy.get(".errors").should("be.visible")
    }
}
module.exports = ContactUsAssertions