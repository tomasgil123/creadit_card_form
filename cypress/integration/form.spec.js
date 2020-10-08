describe('Form - checking feedback errors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').click().wait(2000)
    cy.get('button').click().wait(2000)
  })

  it('correct feedback is shown when no credit card number is inputed', () => {
    cy.get('button').click().wait(2000)
    cy.get('[data-cy=ErrorMessage]').contains('Please, complete with your credit card number')
  })

  it('correct feedback is shown when credit card number is incomplete', () => {
    cy.get('input').type('1234')
    cy.get('button').click().wait(2000)
    cy.get('[data-cy=ErrorMessage]').contains(
      'It seems some numbers are missing. Please, be sure to complete with the 16 numbers on the front of your card'
    )
  })
})

describe('Form - checking form completition with success', () => {
  it.only('correct information is display last page form', () => {
    cy.visit('http://localhost:3000')
    cy.get('button').click().wait(2000)
    cy.get('button').click().wait(2000)
    cy.get('input').type('3234123412341234')
    cy.get('button').click().wait(2000)
    cy.get('input').type('1234')
    cy.get('button').click().wait(2000)
    cy.get('input').type('Tomas Gil')
    cy.get('button').click().wait(2000)
    cy.get('input').type('223')
    cy.get('button').click().wait(3000)
    cy.get('[data-cy=Input-cardNumber]').contains('3234 1234 1234 1234')
    cy.get('[data-cy=Input-goodThru]').contains('12/34')
    cy.get('[data-cy=Input-cardOwnerName]').contains('Tomas Gil')
    cy.get('[data-cy=Input-cvv]').contains('223')
  })
})
