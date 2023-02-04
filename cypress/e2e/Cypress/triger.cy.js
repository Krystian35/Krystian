/// <reference types="cypress"/>

describe("E2e - Scroll", ()=> {
    it("Najechanie na element", () => {
        cy.visit("/")
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click()
        
    })

    it("scroll to special", () =>{
        cy.get('a[title="Specials"]').eq(0).scrollIntoView()



    })


})