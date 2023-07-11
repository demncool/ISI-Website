export const ProjectsObjects = {
    Verify_if_Carousel_Links_are_Working: function (projectLinks) {

        cy.get(".insideMonitorUrl")
            .each((el, index, list) => {
                cy.get(".insideMonitorUrl")
                    .wait(2000)
                    .invoke("removeAttr", "target")
                    .click({ force: true })
                    .url()
                    .should("eq", projectLinks[index])
                    .go("back")
            })

    }
}