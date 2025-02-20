import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage

describe('Orange HRM Tests', () => {

  const selectorsList = {            
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    selectionBox: "[clear='false']",
    saveButton: "[type='submit']",
  }
    
  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessMyInfo()
    menuPage.accessPerformance()
    menuPage.accessDashboard()
    menuPage.accessDirectory()
    menuPage.accessMaintenance()
    menuPage.accessClaim()
    menuPage.accessBuzz()
   // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
   // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
   // cy.get(selectorsList.genericField).eq(3).clear().type('012345')
   // cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
   // cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
   // cy.get(selectorsList.dateField).eq(0).clear().type('2026-06-14')
   // cy.get(selectorsList.dateCloseButton).click({force: true})
   // cy.get(selectorsList.selectionBox).eq(0).click()
   // cy.contains("Belgian").click()
   // cy.get(selectorsList.selectionBox).eq(1).click()
   // cy.contains("Married").click()
   // cy.get(selectorsList.saveButton).eq(0).click()
   // cy.get('body').should('contain', 'Successfully Updated')
  })

  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})