import { Header } from "../Pages/Header"

describe("Home", () => {
    beforeEach(() => {
        cy.fixture("Header").then(function (header) {
            this.header = header
        })

        cy.visit('/')
        cy.acceptCookies()
    })
    it("Verify if Header contains all elements", () => {
        const navigationText = [
            "Home",
            "About",
            "Services",
            "Projects",
            "Careers",
            "Blog",
            "Contact Us"
        ]

        cy.get("#isi-logo").should("be.visible")
        Header.Verify_if_Header_contains_all_elements(navigationText)
    })

    it("Verify if ISI Logo Function Works", () => {
        cy.get("#isi-logo").click()
        cy.url().should("eq", "https://dev.innovuze.com/")
    })

    it("Verify if Navigation is Working", function () {
        Header.Verify_if_Navigation_is_Working(this.header.navigationLinks)
        //commit
    })
})