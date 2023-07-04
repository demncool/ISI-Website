import { Home } from "../Pages/Home"

describe("Home", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  })
  it("Verify if homepage contains all elements", () => {
    cy.get(".navbar-nav > li").contains("Home")
      .should("be.visible")
      .click()
    cy.url().should("include", "innovuze.com")

    Home.Verify_if_All_Element_Exist()
  })

  it("Verify if Lets Talk Button is Working", { scrollBehavior: false }, () => {
    cy.get(".letsTalk-btn").click()
    Home.Verify_if_Lets_Talk_Button_is_Working()
  })

  it("Verify if Join Our team is Working", { scrollBehavior: false }, () => {
    cy.get(".joinTeam-btn").click()
    Home.Verify_if_Join_Our_team_is_Working()
  }),

    it("Verify if Hover Action on the ISI Logo is Working", { scrollBehavior: false }, () => {
      cy.get(".innovuze-logo-banner").rightclick()
      
    //verify if icons appear
    cy.get(".innovuze-logo-banner-wrapper").should("be.visible")
    })
})