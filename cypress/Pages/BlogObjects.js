export const BlogObjects = {
    Verify_If_Clicking_the_Shown_Blogs_is_Working: (element, recentBlogsLinks) => {
        cy.get(element)
            .each((el, index, list) => {
                cy.get(element)
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val)
                            .click()
                            .url()
                            .should("eq", recentBlogsLinks[index])
                            .go("back")
                    })
            })
    },

    Verify_Pagination_is_Working: (element, index) => {
        cy.get(element)
            .eq(index)
            .click()
    },

    Verify_If_First_10_Blogs_Links_are_Working: (element, firstTenBlogsLinks) => {
        cy.get(element)
            .each((el, index, list) => {
                cy.get(element)
                    .eq(index)
                    .then((val) => {
                        cy.wrap(val)
                            .click()
                            .url()
                            .should("eq", firstTenBlogsLinks[index])
                            .go("back")
                    })
            })
    },

    Verify_if_Archive_Selection_is_working(element) {

        let data
        //get element length
        cy.get(".archive  > div")
            .then((val) => {
                length = val.length
                //select random element
                cy.clickRandomElement(".archive  > div", length)
                    .scrollIntoView()
                    .click({ scrollBehavior: 'center' })
                    //verify if selected month and year is shown 
                    .then((text) => {
                        cy.wrap(text)
                            .invoke("text")
                            .as("finalText")
                        cy.get("@finalText")
                            .then((finalText) => {
                                data = cy.wrap(finalText.trim())
                            })
                    })
            })

        return data
    }
}