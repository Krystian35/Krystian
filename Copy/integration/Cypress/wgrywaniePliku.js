/// <reference types="cypress"/>

describe("E2e - Wgrywanie pliku", ()=> {
    it("Wgrywanie pliku", () => {
        cy.visit("/index.php?controller=contact")
        cy.get('#fileUpload').attachFile("../fixtures/Desert.jpg")
        cy.get("span.filename").should("contain", "Desert.jpg")
       

    })


})