class MenuPage{

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            searchButton: '[placeholder="Search"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton:'[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            titlePage: '.orangehrm-main-title',
            topBar: '.oxd-topbar-header-title',

        }

        return selectors
    }


    accessSearch() {
        cy.get(this.selectorsList().searchButton).click()
        cy.get(this.selectorsList().titlePage).eq(0).should('contain', 'Personal Details')
    }
    
    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Admin')
    }

    accessPim() {
        cy.get(this.selectorsList().pimButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'PIM')
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Leave')
    }

    accessTime() {
        cy.get(this.selectorsList().timeButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Time')
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Recruitment')
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.get(this.selectorsList().titlePage).eq(0).should('contain', 'Personal Details')
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Performance')
    }

    accessDashboard() {
        cy.get(this.selectorsList().dashboardButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Dashboard')
    }

    accessDirectory() {
        cy.get(this.selectorsList().directoryButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Directory')
    }

    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
        cy.get('.orangehrm-card-container')
        cy.get('.oxd-button--ghost').click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Claim')
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
        cy.get(this.selectorsList().topBar).should('contain', 'Buzz')
    }

}

export default MenuPage