/// <reference types="cypress"/>

describe("E2e - asercja", () => {
	it("asercje expect and should", () => {
		cy.visit("/")

		//weryfikacja tekstu
		cy.get('a[title="Contact Us"]').should("contain", "Contact us")
		cy.get('a[title="Contact Us"]').then((zakladka) => {
			expect(zakladka).to.contain("Contact us")
		})

		//Weryfikacja czy zakka nie zawiera
		cy.get('a[title="Contact Us"]').should("not.contain", "asdasd")
		cy.get('a[title="Contact Us"]').then((zakladka2) => {
			expect(zakladka2).to.not.contain("asdasd")
		})
		// Weryfikacja znacznika
		cy.get("#search_query_top").should("have.class", "form-control")
		cy.get("#search_query_top").then((search) => {
			expect(search).to.have.class("form-control")
		})
		// Czy element jest widoczny
		cy.get("#search_query_top").should("be.visible")
		//cy.get('#search_query_top').should("not.be.visible")
		cy.get("#search_query_top").then((search2) => {
			expect(search2).to.be.visible
		})
		//Weryfikacja pobranych elementw
		cy.get("ul.sf-menu").find("li").should("have.length", 14)
		cy.get("ul.sf-menu")
			.find("li")
			.then((find) => {
				expect(find).to.have.length(14)
			})

		//Weryfikacja wartości css
		cy.get("#search_query_top").should("have.css", "line-height", "45px")
		cy.get("#search_query_top").then((findcss) => {
			expect(findcss).to.have.css("line-height", "45px")
		})
	})
})

