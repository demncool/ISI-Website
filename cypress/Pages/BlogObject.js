import BlogAssertsions from "../Assertions/blog_assertsions"

const assertion = new BlogAssertsions
class BlogObjects {
    //global

    getUrl = (selector) => {
        let url = []

        cy.get(selector)
            .each((el) => {
                url.push(el.text().trim().replace("Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s . . .", "Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s Unforgettable Team Building Event").toLowerCase().replace(/[&]/g, "").replaceAll(" ", "-"))
            })
        return url
    }

    getText = (selector) => {
        let text = []

        cy.get(selector).each((el) => {
            text.push(el.text().trim())
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

    Verify_If_First_10_Blogs_Links_are_Working = (selector, firstTenBlogsLinks) => {
        cy.get(selector).each((el, index) => {
            cy.get(selector)
                .eq(index)
                .click("left")
                .invoke("text").then((val) => {
                    assertion.tenBlogAssertions(val)
                    cy.go("back")
                })
        })
    }

    Verify_if_Archive_Selection_is_working = (selector, index) => {
        cy.get(selector)
            .eq(index)
            .click()
    }

    verify_Read_More_Btn = (selector) => {
        let url = []
        cy.get(selector)
            .click()
            .url().then((val) => {
                url.push(val)
            })
        return url
    }
}
module.exports = BlogObjects