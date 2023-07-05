export const About = {
    Verify_if_the_About_Page_contains_all_elements: () => {
        cy.get(".about-us-banner").should("be.visible")
        cy.get(".about-title")
            .should("be.visible")
            .and("contain", "Who")
            .and("contain", "We Are")
        cy.get(".joinTeam-abtus-btn")
            .should("be.visible")
    },

    Verify_if_Join_Our_Team_Button_Works: (joinBtn) => {
        cy.get(joinBtn)
            .scrollIntoView()
            .click()
        cy.get(".career-page-wrapper #accordCareer > div")
            .should("be.visible")
            .and("have.length", 6)
    }
}