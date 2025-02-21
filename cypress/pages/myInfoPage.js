class MyInfoPage {
    selectorsList () {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',            
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectionBox: "[clear='false']",
            saveButton: "[type='submit']",
        }

        return selectors

    }

    fillPersonalDetails(firstName, lastName, nationality, maritalStatus) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().selectionBox).eq(0).click()
        cy.contains(nationality).click()
        cy.get(this.selectorsList().selectionBox).eq(1).click()
        cy.contains(maritalStatus).click()
    }
    
    fillEmployeeDetails(employeeId, otherId, driverLicense, driverLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driverLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
    }

    saveForm() {       
        cy.get(this.selectorsList().saveButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyInfoPage