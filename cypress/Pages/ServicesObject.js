class Services {
    Verify_if_the_About_Page_contains_all_elements = function (element, Services) {
        cy.get(".service-title").should("be.visible")
            .and("contain", "What We Do")

        cy.get(element)
            .each((el, index, list) => {
                cy.wrap(el)
                    .should("contain", Services[index])
            })
    }

    Verify_if_Inquire_Now_Button_on_Each_Services_is_Working = () => {
        cy.get(".services-list > div")
            .as("element")
            .each((el, index, list) => {
                cy.get("@element")
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val).click()
                        cy.get(".contact-us-title")
                            .should("contain", "Contact Us")
                            .and("be.visible")
                            .wait(1000)
                        cy.get(".fa-stack-1x").click()
                    })
            })
    }
}

module.exports = Services