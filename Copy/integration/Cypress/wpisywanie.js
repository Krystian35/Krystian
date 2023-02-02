/// <reference types="cypress"/>

describe("E2e - Akcja wpisywania", () => {
	it("Wpisywanie wartości", () => {
		cy.visit("/")
		cy.get("#search_query_top").type("Produkt{backspace}", { delay: 500 })
		//cy.get('[name="submit_search"]').click()
	})

	it("Czyszczenie wartości z pola", () => {
		cy.get("#search_query_top").clear()
	})
})
