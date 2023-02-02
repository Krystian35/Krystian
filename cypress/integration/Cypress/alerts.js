/// <reference types="cypress"/>

describe("E2e - Alerty", () => {
	it("Alerty", () => {
		cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/index.html")
		cy.get("#alert").click()
		cy.on("window:alert", teść => {
			expect(teść).to.equal("Przykładowa treść alertu")
		})
	})
	it("Aletr_confimr", () => {
		cy.get("#alert-confirm").click()
		cy.on("window:confirm", tresc => {
			expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
		})
		cy.on("window:confirm", () => false)
	})
})
