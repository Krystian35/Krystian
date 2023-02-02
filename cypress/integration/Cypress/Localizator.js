/// <reference types="cypress"/>

describe("E2e - Lesson", () => {
	it("Localizator", () => {
		cy.visit("/")

		//Pobieranie po znaczniku
		cy.get("a")

		//Pobieranie po Id
		cy.get("#search_query_top")

		//Pobieranie po Class
		cy.get(".form-control")

		//Pobieranie po atrybutach
		cy.get('[name="submit_search"]')
		cy.get('[placeholder="Search"]')

		//Pobieranie dokłdanego atrybutu wraz z znacznikiem
		cy.get('input[placeholder="Search"]')

		//Pobieranie elementów po kilku atrybutach
		cy.get(
			'[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]'
		)

		//Pobieranie zalecane przez Cypress
		cy.get('[data-cy="wyszukiwarka"]')
	})

	it.only("Lokalizatory2", () => {
		cy.visit("/")
		//Pobieranie po tekscie
		cy.contains("Shop now !")
		//PObieranie teks+ atrybut
		cy.contains("Cart")
		cy.contains('[title="Log in to your customer account"]', "Sign in")

		//Pobieranie po rodzicu/ użycie indeksów
		cy.get("li").parents("#home-page-tabs").find("li").eq(1)
		cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
	})
})
