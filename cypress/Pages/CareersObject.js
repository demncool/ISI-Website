class Careers {
    Verify_if_Clicking_the_First_Four_Jobs_is_Working = (element) => {
        cy.get(element)
            .each((el, index, list) => {
                cy.get(element)
                    .eq(index)
                    .invoke("removeAttr", "target")
                    .click({ force: true })
                    .invoke("text")
                    .then((val) => {
                        if (val == "Data Quality Specialist (Short Term, 6 Months Project) ") {
                            let text = val.trim().replace("(Short Term, 6 Months Project)", "")
                            cy.url().should("include", text.trim().toLowerCase().replaceAll(" ", "-"))
                        } else {
                            cy.wrap(val)
                                .url()
                                .should("include", val.trim().toLowerCase().replace(" / ", "-").replace(" ", "-"))
                        }
                    })

                //verify Apply For This Job Button is Visible
                cy.get(".apply-btn-wrapper")
                    .should("be.visible")
                    .go("back")
            })
    }

    Verify_if_View_Open_Roles_Here_Button_is_Working = (allRoles) => {
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
    }

    Verify_Apply_for_This_Job_Button_is_Working = () => {

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

    Verify_Facebook_Page_Button = () => {
        const url = "https://www.facebook.com/innovuzesolutions"

        cy.get(".career-btn-more").click({ force: true })

        cy.get(".job-posting-text")
            .should("contain", "To be updated on the latest job postings, like and follow us on our Facebook page.")
            .and("be.visible")
            .invoke("removeAttr", "target")
            .click()
            .url()
            .should("eq", url)
    }

}
module.exports = Careers