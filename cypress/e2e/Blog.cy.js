import BlogObjects from "../Pages/BlogObject"

const blog = new BlogObjects


describe("blog", () => {
    beforeEach(() => {
        cy.fixture("Blog").then(function (blog) {
            this.blog = blog
        })
        cy.requestLink()
        cy.visit('/')
        cy.acceptCookies()

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
        const blogTitle = blog.getUrl("h2.blog-title")
        cy.log(blogTitle)
        cy.wrap(blogTitle).each((el, index) => {
            blog.verify_shown_blogs_are_working(`h2.blog-title:eq(${index})`)
            el = el.replaceAll("advance-excel--google-sheets-training", "advance-excel-google-sheets-training")
            el = el.replaceAll("celebrating-10-years-of-innovation:-innovuze-solutions,-inc.'s-unforgettable-team-building-event", "celebrating-10-years-of-innovation-innovuze-solutions-inc-s-unforgettable-team-building-event")
            el = el.replaceAll("project-managers-and-digital-marketing-micro-team-building-2022", "pm-and-digital-marketing-micro-team-building-2022")
            cy.url().should("include", el)
            cy.go("back")
        })

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
        let url = blog.Verify_If_First_10_Blogs_Links_are_Working(".blog-page-list > div > div > div:nth-child(1)")
        cy.wrap(url).each((el, index) => {
            cy.wrap(el).should("contain", this.blog.firstTenBlogsLinks[index])
        })
    })

    it("Verify if Archive Selection is working", function () {
        cy.get(".btn-more-blog").click()
        let text = blog.getText(".archive  > div")

        cy.wrap(text).each((el, index) => {
            blog.Verify_if_Archive_Selection_is_working(".archive  > div", index)
            el = el.split(" ")[0]
            cy.get(".col-md-9").contains(el)
        })
    })

    it("Verify if Read More Button is Working", function () {
        let url = blog.verify_Read_More_Btn(".blogLatest-holder > .btn")
        cy.log(url)
        cy.url().should("include", url)
    })
})
