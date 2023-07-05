export const Header = {
    Verify_if_Header_contains_all_elements: (navigationText) => {
        cy.get(".navbar-nav > li")
            .as("element")
            .each((el, index, list) => {
                cy.wrap(el).should("contain", navigationText[index])
            })
    },

    Verify_if_Navigation_is_Working: function (navigationLinks) {
        cy.get(".navbar-nav > li")
            .as("element")
            .each((el, index, list) => {
                if(index == 6){
                    return false
                }
                cy.get("@element")
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val)
                            .click()
                            .url()
                            .should("include", navigationLinks[index])
                    })
            })
    }
}