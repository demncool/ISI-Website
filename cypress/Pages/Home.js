export const Home = {
    Verify_if_All_Element_Exist: () => {
        cy.get(".navbar-nav > li")
            .should("have.length", 7)
        cy.get(".innovuze-logo-banner").should("be.visible")
        cy.get(".letsTalk-btn").should("be.visible")
        cy.get(".joinTeam-btn").should("be.visible")
        cy.get("#isi-logo").should("be.visible")
    },

    Verify_if_Lets_Talk_Button_is_Working: () => {
        cy.get(".modal-body")
            .should("be.visible")
        cy.get(".needs-validation")
            .should("be.visible")
        cy.get(".site-infos")
            .should("be.visible")
    },

    Verify_if_Join_Our_team_is_Working: () => {
        cy.url().should("include", "/careers/")
        cy.get(".accordion > div")
            .should("be.visible")
            .and("have.length", 6)
    }
}