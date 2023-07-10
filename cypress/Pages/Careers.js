export const Careers = {
    Verify_if_Clicking_the_First_Four_Jobs_is_Working: (careersLinks) => {
        cy.get(".careers-list > a")
            .as("element")
            .each((el, index, list) => {
                cy.get("@element")
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val)
                            .invoke("removeAttr", "target")
                            .click({ force: true })
                            .url()
                            .should("eq", careersLinks[index])
                        cy.get(".apply-btn-wrapper")
                            .should("be.visible")
                            .go("back")
                    })
            })
    },

    Verify_if_View_Open_Roles_Here_Button_is_Working: (allRoles) => {
        cy.get(".career-btn-more-wrapper > a")
            .should("be.visible")
            .click({ force: true })

        //assert URL
        cy.url().should("eq", "https://dev.innovuze.com/careers/")

        cy.get(".accordion > div")
            .each((el, index) => {
                cy.wrap(el)
                    .should("contain", allRoles[index])
            })
    },

    Verify_Apply_for_This_Job_Button_is_Working: () => {

        //store elemetn count
        cy.get(".accordion > div")
            .then((val) => {
                length = val.length

                //select random element based on element count
                cy.clickRandomElement(".accordion > div", length)
                    .click()

                //select Apply Button
                cy.get(".apply-btn-wrapper")
                    .contains("Apply for This Job")
                    .invoke("removeAttr", "target")
                    .click({ force: true })
            })


    }
}