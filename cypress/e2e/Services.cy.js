import { Services } from "../Pages/Services"

describe("Services Page", () => {
    beforeEach(() => {
        cy.fixture("Services").then(function (services) {
            this.services = services
        })

        cy.visit('/')
        cy.acceptCookies()
        cy.contains("Services")
            .click()

        cy.url().should("eq", "https://dev.innovuze.com/#services")
    })

    it("Verify if the About Page contains all elements", function () {
        Services.Verify_if_the_About_Page_contains_all_elements(".services-list > div", this.services.Services)
    })

    it("Verify if Inquire Now Button on Each Services is Working", () => {
        Services.Verify_if_Inquire_Now_Button_on_Each_Services_is_Working()
    })
})  