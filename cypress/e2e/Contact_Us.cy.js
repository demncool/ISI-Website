import ContactUs from "../Pages/ContactUs";
import ContactUsAssertions from "../Assertions/contact_us_assertions"

const contactUsAssertions = new ContactUsAssertions
const contactUs = new ContactUs

describe("Contact Us Tests", () => {
    beforeEach(() => {
        cy.requestLink()
        cy.visit('/')
        cy.acceptCookies()
        cy.get(":nth-child(7) > .nav-link")
            .click()
    })
    it("Verify Contact Us Modal Contains All ELements", () => {
        cy.get(".modal-content").as("modal").within(() => {
            cy.get("@modal").find("#getintouch")
                .should("be.visible")
                .and("not.be.empty")
            cy.get(".second-col").should("be.visible")
            cy.get("#getintouch-submit").should("be.visible")
        })
    })

    it("Verify Contact Us Function if Field/s Are Empty", () => {
        contactUs.verifyFormFieldIfEmpty("#getintouch-submit")
        cy.get(".errors").should("be.visible")
    })

    it("Verify  Invalid Email Error is Working", () => {
        contactUs.verifyInvalidEmailFunction("#email", "bea.b@.com")
        cy.contains(".errors", "Email is invalid.").should("be.visible")
    })

    it.only("Verify Require Fields is Working", () => {
        contactUs.inputDataOnFields("QA Test", "test@gmail.com", "Test", "Test Message")
        cy.get(".errors").should("be.visible")
    })
})