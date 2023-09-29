import BlogObjects from "../Pages/BlogObjects"

const blog = new BlogObjects


describe("blog", () => {
    beforeEach(() => {
        cy.fixture("Blog").then(function (blog) {
            this.blog = blog
        })
        cy.requestLink()
        cy.visit('/')
        cy.acceptCookies()
        0

        cy.contains("Blog").should("be.visible")
            .click()
            .wait(1000)
        cy.url().should("eq", "https://dev.innovuze.com/#blog")

    })

    it("Verify if the About Page contains all elements", () => {
        cy.get(".header-blog-title")
            .should("contain", "Blog")
            .and("be.visible")

        cy.get(".blog-list > div")
            .should("have.length", 4)
            .and("be.visible")

        cy.get(".latestBlog").should("be.visible")

        cy.get(".btn-more-blog").should("be.visible")
    })

    it("Verify If Clicking the Shown Blogs is Working", function () {
        blog.Verify_If_Clicking_the_Shown_Blogs_is_Working("h2.blog-title", this.blog.recentBlogsLinks)

    })

    it("Verify More Blogs Here button is working", () => {
        cy.get(".btn-more-blog").should("be.visible")
            .click()
        //verify if landed to ALl Blogs Page
        cy.get(".archive-title").should("be.visible")
            .and("contain", "Archive")
    })

    it("Verify Pagination is Working", () => {
        var text = [
            "DSC-USTP",
            "Innovuze Holds First Dota 2 Tournament"
        ]

        cy.get(".btn-more-blog").click()

        blog.Verify_Pagination_is_Working(".pagination > li", 2)
        cy.contains(text[0]).should("be.visible")
        blog.Verify_Pagination_is_Working(".pagination > li", 5)
        cy.contains(text[1]).should("be.visible")
        blog.Verify_Pagination_is_Working(".pagination > li", 0)
        cy.contains(text[0]).should("be.visible")
    })

    it("Verify If First 10 Blogs Links are Working", function () {
        cy.get(".btn-more-blog").click()
        blog.Verify_If_First_10_Blogs_Links_are_Working(".blog-page-list > div > div > div:nth-child(1)", this.blog.firstTenBlogsLinks)
    })

    it("Verify if Archive Selection is working", function () {
        cy.get(".btn-more-blog").click()
        blog.Verify_if_Archive_Selection_is_working()
    })
})
