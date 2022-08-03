import Counter from 'components/Counter'

const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'
const setToInitialSelector = '[aria-label=initial]'
const setToZeroSelector = '[aria-label=zero]'

it('should start at 0', () => {
  // Arrange
  cy.mount(<Counter />)
  // Assert
  cy.get(counterSelector).should('have.text', '0')
})

it('should support an initial value', () => {
  // Arrange
  const value = 42
  cy.mount(<Counter initialCount={value} />)
  // Assert
  cy.get(counterSelector).should('have.text', value.toString())
})

it('should increment the counter when the + button is pressed', () => {
  // Arrange
  const value = 42
  cy.mount(<Counter initialCount={value} />)
  // Act
  cy.get(incrementSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', (value + 1).toString())
})

it('should decrement the counter when the - button is pressed', () => {
  // Arrange
  const value = 42
  cy.mount(<Counter initialCount={value} />)
  // Act
  cy.get(decrementSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', (value - 1).toString())
})

it('should set the counter to the initial value when the "Reset to initial value" button is pressed', () => {
  // Arrange
  const value = 42
  cy.mount(<Counter initialCount={value} />)
  // Act
  cy.get(decrementSelector).click().click()
  cy.get(setToInitialSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', (value).toString())
})

it('should set the counter to 0 when the "Set to 0" button is pressed', () => {
  // Arrange
  const value = 42
  cy.mount(<Counter initialCount={value} />)
  // Act
  cy.get(incrementSelector).click().click()
  cy.get(setToZeroSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', '0')
})