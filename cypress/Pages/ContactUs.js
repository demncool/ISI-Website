import ContactUsAssertions from "../Assertions/contact_us_assertions"

const contactUsAssertions = new ContactUsAssertions

class ContactUs {
    fieldElements = {
        name: () => cy.get('#name'),
        email: () => cy.get('#email'),
        subject: () => cy.get('#subject'),
        message: () => cy.get('#message')
    }
    
    verifyFormFieldIfEmpty(selector) {
        cy.get(selector)
            .click()
        contactUsAssertions.assertEmptyFieldFunction()
    }

    verifyInvalidEmailFunction(selector, input) {
        cy.get(selector)
            .type(input)
        cy.get("#getintouch-submit")
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
}
module.exports = ContactUs