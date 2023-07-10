import { Careers } from "../Pages/Careers"

describe("Careers Page", () => {
    beforeEach(() => {
        cy.fixture("Careers").then(function (Careers) {
            this.Careers = Careers
        })

        cy.visit('/')
        cy.acceptCookies()
        cy.url().should("eq", "https://dev.innovuze.com/")
        cy.contains("Careers")
            .click()
        cy.url().should("eq", "https://dev.innovuze.com/#careers")
    })

    it("Verify if the About Page contains all elements", () => {
        cy.get("h2").should("contain", "Careers")
        cy.get(".careers-list > a").should("have.length", 4)
            .and("be.visible")
    })

    it("Verify if Clicking the First Four Jobs is Working", function () {
        Careers.Verify_if_Clicking_the_First_Four_Jobs_is_Working(this.Careers.careersLinks)
    })

    it("Verify if View Open Roles Here Button is Working", function () {
        Careers.Verify_if_View_Open_Roles_Here_Button_is_Working(this.Careers.allRoles)
    })

    it("Verify Apply for This Job Button is Working", function () {
        Careers.Verify_if_View_Open_Roles_Here_Button_is_Working(this.Careers.allRoles)
        Careers.Verify_Apply_for_This_Job_Button_is_Working()
    })

    it.only("Verify Facebook Page Button", () => {
        
    })
})