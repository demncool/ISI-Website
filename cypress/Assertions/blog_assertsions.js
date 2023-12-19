class BlogAssertsions {
    tenBlogAssertions(value) {
        if (value == "Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s . . .") {
            cy.contains("h2", "Celebrating 10 Years of Innovation: Innovuze Solutions, Inc.'s Unforgettable Team Building Event")
        } else {
            cy.contains("h2", value)
        }
    }
}
module.exports = BlogAssertsions