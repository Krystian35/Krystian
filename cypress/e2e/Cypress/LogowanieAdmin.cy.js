/// <reference types="cypress"/>

describe("E2e - Login and save data for Store ADMIN BB NL PRE", () => {
	it("ADMIN BB NL PRE", () => {
		cy.visit(
			"https://pre-admin.bakkerbart.nl/Content/Secure/Managers/Details.aspx?manager=668621&action=changed_password"
		)
		cy.get("#_loginAuth_UserName").type("krystian@solutions4delivery.com")
		cy.get("#_loginAuth_Password").type("RxuRrc2F{enter}")
		cy.get(":nth-child(10) > .title").click()
		cy.get('[href="/Content/Secure/Stores/Overview.aspx"]').click()
		cy.get(
			'[name="ctl00$_cphContent$_rgdStores$ctl00$ctl02$ctl02$FilterTextBox_City"]'
		).type("Do{enter}")
		cy.contains(
			'[href="Details.aspx?store=310"]',
			"Bakker Bart Doetinchem"
		).click()
		cy.get(
			'#content > :nth-child(1) > .contrast_bg > [href="AddEdit.aspx?store=310&return=details"]'
		).click()
		cy.get("#_cphContent__btnSave").click()

		// TEST FOR QA3

		/*it("QA3", () => {
			cy.visit("https://qa3-admin.solutions4delivery.com")
			cy.get("#_loginAuth_UserName").type("krystian@solutions4delivery.com")
			cy.get("#_loginAuth_Password").type("RxuRrc2F{enter}")
			cy.get(":nth-child(10) > .title").click()
			cy.get('[href="/Content/Secure/Stores/Overview.aspx"]').click()
			cy.contains('[href="Details.aspx?store=201"]', "Amsterdam North").click()
			cy.get(
				'#content > :nth-child(1) > .contrast_bg > [href="AddEdit.aspx?store=201&return=details"]'
			).click()
			cy.get("#_cphContent__btnSave").click() */

		// cy.get("#navigation").then (nagitaion =>{
		//   cy.wrap(nagitaion).find("div").eq(9).click().then(store=>{
		//     cy.wrap(store).find('[href="/Content/Secure/Stores/Overview.aspx"]').click()
		//   })
	})
})
//cy.get('[name="submit_search"]').click()

//})

//it("Czyszczenie wartości z pola", () =>{
//cy.get('#search_query_top').clear()
//})
