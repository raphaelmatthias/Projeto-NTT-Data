/// <reference types="cypress" />
import LoginPage from "../../support/Pages/LoginPage"
import CatalogPage from "../../support/Pages/CatalogPage"

describe('Validate error messages', () => {

 it('AddProductsToList', () => {
    LoginPage.Login("contatoraphaelmathias@gmail.com","raphael.123");
    LoginPage.CheckLoggedIn();
    CatalogPage.GoToItemPage();
    CatalogPage.AddProcuctToList();
    CatalogPage.CheckListPage();
    });

 
   

});
