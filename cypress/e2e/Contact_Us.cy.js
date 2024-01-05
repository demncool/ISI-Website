import ContactUs from "../Pages/ContactUs";
import ContactUsAssertions from "../Assertions/contact_us_assertions"

const contactUsAssertions = new ContactUsAssertions
const contactUs = new ContactUs

describe("Contact Us Functions Tests", () => {
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

    it("Verify Contact Us Function if Field/s Are Empty is Working", () => {
        contactUs.verifyFormFieldIfEmpty()
    })

    it("Verify  Invalid Email Error is Working", () => {
        contactUs.verifyInvalidEmailFunction("bea.b.m")
        cy.contains(".errors", "Email is invalid.").should("be.visible")
    })

    it("Verify Require Fields is Working", () => {
        contactUs.inputDataOnFields("QA Test", "test@gmail.com", "Test", "Test Message")
        cy.get(".errors").should("be.visible")
    })

    it("Verify Contact Us is Working", () => {
        contactUs.verifyContactUsExpectedFunction("QA Test", "test@gmail.com", "Test", "Test Message")
        cy.contains("Please, prove you’re not a robot")
    })
})