import AboutOject from "../Pages/AboutObject"

const about = new AboutOject

describe("About Page", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.acceptCookies()
        cy.contains("About")
            .click()
        cy.url().should("eq", "https://dev.innovuze.com/#about-us")
    })

    it("Verify if the About Page contains all elements", () => {
        about.verifyAboutPageElements()
    })

    it("Verify if Join Our Team Button Works", { scrollBehavior: false }, () => {
        about.verifyJoinUsBtn(".joinTeam-abtus-btn")
        cy.url().should("eq", "https://dev.innovuze.com/careers/")
        cy.isInViewport(".careers-page").find("h1")
    })
})