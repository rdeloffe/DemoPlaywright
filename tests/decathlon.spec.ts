import { test } from '@playwright/test';
import { LandingPages } from '../pages_objects/pages_objects_decathlon/landing_pages.page';
import { AddProductPanier } from '../pages_objects/pages_objects_decathlon/addProductPanier.page';

test('Aller sur la page velo', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.onpenSearchAndClick();    
});


test ('Add_3rd_velo_panier' , async ({ page }) => {
    const landing_pages = new LandingPages(page);
    await landing_pages.onpenSearchAndClick();
    const addProductPanier = new AddProductPanier(page);
    await addProductPanier.addProductPanier();
    
});

