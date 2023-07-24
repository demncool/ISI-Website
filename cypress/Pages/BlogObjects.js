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
        //get element length

        cy.get(".archive  > div")
            .then((val) => {
                length = val.length
                //select random element
                return cy.clickRandomElement(".archive  > div", length)
                    .scrollIntoView()
                    .click({ scrollBehavior: 'center' })
                    .invoke("text")
                    .then((val) => {
                       cy.contains(val.trim())
                    })
            })
    }
}