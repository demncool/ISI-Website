import { About } from "../Pages/About"

describe("About Page", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.acceptCookies()
        cy.contains("About")
            .click()
    })

    it("Verify if the About Page contains all elements", () => {
        cy.url().should("eq", "https://dev.innovuze.com/#about-us")

        About.Verify_if_the_About_Page_contains_all_elements()
    })

    it.only("Verify if Join Our Team Button Works", { scrollBehavior: false }, () => {
        About.Verify_if_Join_Our_Team_Button_Works(".joinTeam-abtus-btn")
        cy.url().should("eq", "https://dev.innovuze.com/careers/")
    })
})