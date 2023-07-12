import { ProjectsObjects } from "../Pages/ProjectsObjects"

describe("Projects", () => {
    beforeEach(() => {
        cy.fixture("Projects").then(function (projects) {
            this.projects = projects
        })

        cy.visit('/')
        cy.acceptCookies()

        cy.contains("Projects").click().wait(1000)
    })

    it("Verify if the About Page contains all elements", () => {
        cy.get(".projects-title")
            .should("contain", "Our Work")
            .and("be.visible")

        cy.get("#recipeCarousel")
            .should("be.visible")
    })

    it("Verify if Carousel Links are Working", function () {
        //PLEASE MODIFY
        ProjectsObjects.Verify_if_Carousel_Links_are_Working(this.projects.projectLinks)
    })
})