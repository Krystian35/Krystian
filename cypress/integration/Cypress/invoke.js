/// <reference types="cypress"/>

describe("E2e - Metoda Ivoke", () => {
	it("Invoke", () => {
		cy.visit("/")
		//PObieranie wartości z danego elementu np tekst
		cy.get('[title="Contact Us"]')
			.invoke("text")
			.then(teks => {
				cy.log(teks)
			})
		//Uzyskanie dostępu do wartości atrybutu
		cy.get('[title="Contact Us"]')
			.invoke("attr", "href")
			.then(atrybut => {
				cy.log(atrybut)
			})

		cy.get('[title="Contact Us"]')
			.invoke("attr", "title")
			.then(atrybut1 => {
				cy.log(atrybut1)
			})
		//Pobieranie wartości
		cy.get("#search_query_top")
			.type("Produktyy")
			.invoke("prop", "value")
			.then(value => {
				cy.log(value)
			})
		cy.get("#search_query_top")
			.type("Cos tam")
			.invoke("prop", "checked")
			.then(checked => {
				cy.log(checked)
			})
	})
})
