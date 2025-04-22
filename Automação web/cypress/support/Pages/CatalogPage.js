/// <reference types="cypress" />
import CatalogElements from "../elements/CatalogElements"

       
    
class CatalogPage{

    GoToItemPage(){
        cy.get(CatalogElements.item()).eq(1).click();

    }
    AddProcuctToList(){
         cy.get(CatalogElements.addToListButton()).click();
    }
    CheckListPage(){
                cy.url().should('include', '/minhaListaDeProdutos');
 
    }

}

export default new CatalogPage();
    
    
 
