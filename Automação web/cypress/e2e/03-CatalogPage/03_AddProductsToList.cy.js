/// <reference types="cypress" />
import LoginPage from "../../support/Pages/LoginPage"
import CatalogPage from "../../support/Pages/CatalogPage"

describe('Log the user in the system then add products to list', () => {

 it('Add products to list', () => {
    LoginPage.Login("contatoraphaelmathias@gmail.com","raphael.123");
    LoginPage.CheckLoggedIn();
    CatalogPage.GoToItemPage();
    CatalogPage.AddProcuctToList();
    CatalogPage.CheckListPage();
    });

 
   

});
