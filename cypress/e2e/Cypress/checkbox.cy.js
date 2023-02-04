/// <reference types="cypress"/>

describe("E2e - Akcja kliknięcia checkbox", ()=> {
    it("checkbox",() => {
        cy.visit("/index.php?id_category=3&controller=category#/")
        cy.get("#ul_layered_category_0").find("input").then(checkbox=>{
            cy.get(checkbox).eq(0).check().invoke("prop", "checked").then(zaznaczony =>{
                cy.log(zaznaczony)
            });
            cy.get(checkbox).eq(1).check({force: true}); //force - jeżeli checkbox przysłania inny element 
        })

        cy.get("#ul_layered_id_attribute_group_1").find("input").check()
        

    })


})
