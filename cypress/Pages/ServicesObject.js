import ServicesAssertions from "../Assertions/services_asserstions"

const servicesAssertions = new ServicesAssertions
class Services {
    Verify_if_the_About_Page_contains_all_elements = function (selector, servicesList) {
        servicesAssertions.assertTitle(".service-title")
        servicesAssertions.VerifyiftheAboutPageContainsAllElementsAssertions(selector, servicesList)
    }

    Verify_if_Inquire_Now_Button_on_Each_Services_is_Working = () => {
        cy.get(".services-list > div")
            .as("element")
            .each((el, index, list) => {
                cy.get("@element")
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val).click()
                        servicesAssertions.Verify_if_Inquire_Now_Button_on_Each_Services_is_WorkingAssertion()
                        cy.get(".fa-stack-1x").click()
                    })
            })
    }
}

module.exports = Services