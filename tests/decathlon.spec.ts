import { test } from '@playwright/test';
import { LandingPages } from '../pages_objects/pages_objects_decathlon/landing_pages.page';
import { AddProductPanier } from '../pages_objects/pages_objects_decathlon/addProductPanier.page';

// test('Aller sur la page tapis de course', async ({ page }) => {
//     const landingPages = new LandingPages(page);
//     await landingPages.onpenSearchAndClick();    
// });


// test ('Add_panier' , async ({ page }) => {
//     const landing_pages = new LandingPages(page);
//     await landing_pages.onpenSearchAndClick();
//     const addProductPanier = new AddProductPanier(page);
//     await addProductPanier.addProductPanier();
    
// });


// All tests are for decathlon.fr
 
// Test case 1 : Verify navigation to decathlon.fr
// Step 1: Open the browser and navigate to the decathlon.fr
// Expected Result: Verify that the current URL is  decathlon.fr

test('Verify navigation to decathlon.fr', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.openDecathlon();
    await landingPages.acceptCookies();
});

 
// Test case 2 : Verify cookie acceptance
// Step 1: Open the browser and navigate to the decathlon.fr
// Step 2: Accept cookies
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)

test('Verify cookie acceptance', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.acceptCookies();
});

 
// Test case 3 : Verify product search
// Step 1: Open the browser and navigate to the decathlon.fr and Close the pop-up
// Step 2: Search for "sneakers"
// Expected Result: Verify that the search results are displayed

test('Verify product search', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.searchProduct();
});
 
// Test case 4 : Verify selection of the first product
// Step 1: Navigate to decathlon.fr, perform the search
// Step 2: Select the first product
// Expected Result: Verify that the product page is displayed (e.g., check the product title element)

test('Verify selection of the first product', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.selectFirstProduct();
});
 
// Test case 5 : Verify adding product to cart
// Step 1: Navigate to decathlon.fr, perform the search and select the product
// Step 2: Add to cart
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)

test('Verify adding product to cart', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.addProductToCart();
});
 
// Test case 6 : Verify accessing the cart
// Step 1: Navigate to decathlon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
// Expected Result: Verify that the product is present in the cart

test('Verify accessing the cart', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.accessCart();
});
 
// Test case 7 : Verify the checkout process
// Step 1: Navigate to decathlon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)

test('Verify the checkout process', async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.checkoutProcess();
});

//Trier les résultats du moins cher au plus cher et vérifier l’ordre des prix.

test("Trier les résultats du moins cher au plus cher ", async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.sortResults();
});

test("Changemment plage de prix ", async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.changePriceRange();
});

test("Vider le panier ", async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.emptyCart();
});