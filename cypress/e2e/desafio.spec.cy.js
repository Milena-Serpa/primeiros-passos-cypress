import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb',
    dashboardGrid:".orangehrm-dashboard-grid" ,
    wrongCredentialAlert:"[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    selectionBox: "[clear='false']",
    }
    
  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
   // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   // cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
   // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
   // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
   // cy.get(selectorsList.genericField).eq(3).clear().type('012345')
   // cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
   // cy.get(selectorsList.dateField).eq(0).clear().type('2026-06-14')
   // cy.get(selectorsList.dateCloseButton).click()
   // cy.get(selectorsList.saveButton).eq(0).click()
   // cy.get('body').should('contain', 'Successfully Updated')
   cy.get(selectorsList.selectionBox).eq(0).click()
  // cy.contains("Belgian").click()
  cy.get(':nth-child(27)').click()
   cy.get(selectorsList.selectionBox).eq(1).click()
  // cy.contains("Married").click()
  cy.get('.oxd-select-dropdown > :nth-child(3)').click()
  })

  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})