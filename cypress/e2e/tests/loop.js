import Home from "../pages/home";
const fixturedata = require("../../fixtures/fixturedata.json")

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit(fixturedata.url)
    })
  
    it('displays two todo items by default', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('.todo-list li').should('have.length', 2)
  
      // We can go even further and check that the default todos each contain
      // the correct text. We use the `first` and `last` functions
      // to get just the first and last matched elements individually,
      // and then perform an assertion with `should`.
      cy.get(Home.mainMenuItems).array.forEach(element => {
        cy.wrap(element).click();
        cy.get(Home.submenuItems).array.forEach(subelement => {
            cy.wrap(subelement).click();
            // cy.get(Home.heading).should('have.text', subelement.get)
        })
      })
      cy.get('.todo-list li',{timeout: 5000} ).last().should('have.text', 'Walk the dog')

    })
})
