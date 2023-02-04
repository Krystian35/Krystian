/// <reference types="cypress"/>

describe("E2e - Akcja kliknięcia", () => {
	it("Kliknięci", () => {
		cy.visit("/")
		cy.contains('[title="Contact Us"]', "Contact us").click()
		cy.get('[title="Return to Home"]').click()
	})
})
