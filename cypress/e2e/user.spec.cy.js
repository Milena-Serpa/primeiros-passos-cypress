import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfopage = new MyInfoPage()

describe('Orange HRM Tests', () => {  
    
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfopage.fillPersonalDetails('Milena', 'Lima', 'Belgian', 'Married')
    myinfopage.fillEmployeeDetails('01234', '54321', '445678', '2025-02-21')
    myinfopage.saveForm()
  })

  it('login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)   
    loginPage.checkAccessInvalid() 
  })

  it(`menu - teste`, () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    menuPage.accessAdmin
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
  })
})