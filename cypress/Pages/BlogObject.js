class BlogObjects {
    //global

    getText = (selector) => {
        const text = []

        cy.get(selector)
            .each((el) => {
                text.push(el.text().replace("Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s . . .", "Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s Unforgettable Team Building Event").toLowerCase().replace(/[&]/g, "").replaceAll(" ", "-"))
            })
        return text
    }

    verify_shown_blogs_are_working = (selector1, selector2) => {
        cy.get(selector1)
            .scrollIntoView()
            .click(0, 40)

    }

    Verify_Pagination_is_Working = (element, index) => {
        cy.get(element)
            .eq(index)
            .click()
    }

    Verify_If_First_10_Blogs_Links_are_Working = (element, firstTenBlogsLinks) => {
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
    }

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
module.exports = BlogObjects