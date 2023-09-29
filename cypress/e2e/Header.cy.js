import headerObject from "../Pages/headerObject"

const header = new headerObject

describe("Home", () => {
    beforeEach(() => {
        cy.fixture("Header").then(function (headerFixture) {
            this.headerFixture = headerFixture
        })

        cy.visit('/')
        cy.acceptCookies()
    })
    it("Verify if Header contains all elements", function () {
        let navigationText = this.headerFixture.navigationText

        cy.wrap(navigationText).each(function (el, index) {
            header.verifyHeaderElements(`.navbar-nav > li:eq(${index})`)
                .contains(el)
        })
    })

    it("Verify if ISI Logo Function Works", () => {
        header.verifyHeaderLogo("#isi-logo")
        cy.url().should("eq", "https://dev.innovuze.com/")
    })

    it("Verify if Navigation is Working", function () {
        let navigationLinks = this.headerFixture.navigationLinks

        cy.wrap(navigationLinks).each((el, index) => {
            header.verifyNavigationFunction(`.navbar-nav > li:eq(${index})`)
            cy.url().should("include", el)
        })
        //verify contact us modal
        cy.get(".modal-content").should("be.visible")
    })
})