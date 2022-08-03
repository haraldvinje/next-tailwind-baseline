/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should display "Welcome" on the front page', () => {
    cy.get('[data-cy="Welcome"]').should('have.text', 'Welcome')
  })
})
