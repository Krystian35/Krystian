/// <reference types="cypress"/>

describe("E2e - Akcja wyboru dropdown", () => {
	it("dropdown", () => {
		cy.visit("/index.php?id_category=3&controller=category#/")
		// wybieranie po nazwie
		cy.get("#selectProductSort").select("In stock")

		// wybieranie po values
		cy.get("#selectProductSort").select("price:asc")

		//wybieranie po indeksach
		cy.get("#selectProductSort").select(3)
	})
	//wybieranie każdej opcji
	it.only("wybieranie wszystkich z listy", () => {
		cy.visit("/index.php?id_category=3&controller=category#/")

		cy.get("#selectProductSort").then(wybierz => {
			cy.wrap(wybierz)
				.find("option")
				.each(opcja => {
					cy.wrap(wybierz).select(opcja.text())
				})
		})
	})
})
