import ContactUsAssertions from "../Assertions/contact_us_assertions"

const contactUsAssertions = new ContactUsAssertions

class ContactUs {
    fieldElements = {
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        subject: () => cy.get('#subject'),
        message: () => cy.get('#message')
    }

    verifyFormFieldIfEmpty(selector, submitBtn) {
        cy.get(selector)
            .each((el, index) => {
                cy.get(selector)
                    .eq(index)
                    .click()
                    .type("Test")

                cy.get(submitBtn)
                    .click()
                contactUsAssertions.verifyFormFieldIfEmptyAssertions()
            })
    }

    verifyInvalidEmailFunction(selector, input) {
        cy.get(selector)
            .click()
            .type(input)
    }

    inputDataOnFields(name, email, subject, message) {
        this.fieldElements.name().type(name)
        this.fieldElements.email().type(email)
        this.fieldElements.subject().type(subject)
        this.fieldElements.message().type(message)

        //clear one field
        cy.getSize(".mb-3 > input").then((size) => {
            cy.selectOneElementFromArray(size).clear()
        })

        cy.get("#getintouch-submit").click()
    }

    verifyContactUsExpectedFunction(name, email, subject, message) {
        this.fieldElements.name().type(name)
        this.fieldElements.email().type(email)
        this.fieldElements.subject().type(subject)
        this.fieldElements.message().type(message)

        cy.get("#getintouch-submit").click()
    }
}
module.exports = ContactUs