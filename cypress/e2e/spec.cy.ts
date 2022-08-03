/// <reference types="cypress" />

describe('E2E tests', () => {
  it('should visit the page', () => {
    cy.visit('/')
    cy.get('[data-cy=welcome]')
  })
})
