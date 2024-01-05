import ContactUsAssertions from "../Assertions/contact_us_assertions"

const contactUsAssertions = new ContactUsAssertions

class ContactUs {
    formFieldsSelector = {
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        subject: () => cy.get('#subject'),
        message: () => cy.get('#message'),
        submitBtn: () => cy.get("#getintouch-submit")
    }

    verifyFormFieldIfEmpty() {
        this.formFieldsSelector.submitBtn().click()
        contactUsAssertions.verifyFormFieldIfEmptyAssertions()
    }

    verifyInvalidEmailFunction(input) {
        this.formFieldsSelector.email()
            .click()
            .type(input)
    }

    inputDataOnFields(name, email, subject, message) {
        this.formFieldsSelector.name().type(name)
        this.formFieldsSelector.email().type(email)
        this.formFieldsSelector.subject().type(subject)
        this.formFieldsSelector.message().type(message)

        //clear one field
        cy.getSize(".mb-3 > input").then((size) => {
            cy.selectOneElementFromArray(size).clear()
        }).then(() => {
            this.formFieldsSelector.submitBtn().click()
        })
    }

    verifyContactUsExpectedFunction(name, email, subject, message) {
        this.formFieldsSelector.email().type(email)
        this.formFieldsSelector.name().type(name)
        this.formFieldsSelector.subject().type(subject)
        this.formFieldsSelector.message().type(message)
        this.formFieldsSelector.submitBtn().click()
    }
}
module.exports = ContactUs