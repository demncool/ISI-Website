import homepageObject from "../Pages/homePageObject"

const homePage = new homepageObject

describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit('/')
    cy.acceptCookies()
  })
  it("Verify if homepage contains all elements", () => {
    homePage.verifyAllElement("ul.navbar-nav > li")
      .should("be.visible")
    homePage.verifyAllElement(".letsTalk-btn")
      .should("be.visible")
      .and("contain", "Let's Talk")
    homePage.verifyAllElement("a.joinTeam-btn")
      .should("be.visible")
      .and("contain", "Join Our Team")
    homePage.verifyAllElement(".banner-item")
      .should("be.visible")
    homePage.verifyAllElement(".innovuze-logo-banner")
      .should("be.visible")
    homePage.verifyAllElement("div.banner-big-text")
      .should("be.visible")
      .and("not.be.empty")
    homePage.verifyAllElement(".banner-small-text")
      .should("be.visible")
      .and("not.be.empty")
  })

  it("Verify if Lets Talk Button is Working", { scrollBehavior: false }, () => {
    homePage.verifyLetsTalkBtn(".letsTalk-btn")
    cy.get(".modal-content").should("be.visible")
  })

  it("Verify if Join Our team is Working", { scrollBehavior: false }, () => {
    homePage.verifyJoinBtn(".joinTeam-btn")
    cy.url().should("include", "careers/")
    cy.get(".container-lg > h1").contains("Careers")
    cy.get("#accordCareer > div").should("be.visible").and("not.be.empty")
  })

  it("Verify if Hover Action on the ISI Logo is Working", { scrollBehavior: false }, () => {
    homePage.verifyLogoHover(".innovuze-logo-banner")
    cy.get(".innovuze-logo-banner-wrapper").should("be.visible")
  })
})