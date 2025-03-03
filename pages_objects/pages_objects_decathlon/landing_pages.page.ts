import { expect, type Page } from "@playwright/test";

export class LandingPages {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
// async onpenSearchAndClick() {
//     await this.page.goto('https://www.decathlon.fr/');  
//     await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
//     await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('Tapis de course');
//     await this.page.keyboard.press('Enter');
//     await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course');
//     }

async openDecathlon() {
    await this.page.goto('https://www.decathlon.fr/');
    await expect(this.page).toHaveURL('https://www.decathlon.fr/');
    }
async acceptCookies() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    //await expect(this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' })).not.toBeVisible();
    }
async searchProduct() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/sneakers');
    }
async selectFirstProduct() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t520b-confort-13-km-h-43x121cm/_/R-p-160872?mc=8529877');
    }
    
async addProductToCart() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t520b-confort-13-km-h-43x121cm/_/R-p-160872?mc=8529877');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await this.page.getByRole('button', { name: 'Non merci, ne pas assurer mon article' }).click();
    //await expect(this.page.locator('header').filter({ hasText: 'Ajouté au panier !' })).toBeVisible();
    //await expect(this.page.getByRole('link', { name: '' })).toHaveText('1');
}
async accessCart() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t520b-confort-13-km-h-43x121cm/_/R-p-160872?mc=8529877');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await this.page.getByRole('button', { name: 'Non merci, ne pas assurer mon article' }).click();
    //await expect(this.page.locator('header').filter({ hasText: 'Ajouté au panier !' })).toBeVisible();  
    await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
}
async checkoutProcess() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t520b-confort-13-km-h-43x121cm/_/R-p-160872?mc=8529877');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await this.page.getByRole('button', { name: 'Non merci, ne pas assurer mon article' }).click();
    //await expect(this.page.locator('header').filter({ hasText: 'Ajouté au panier !' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
    await this.page.getByRole('button', { name: 'Poursuivre la commande' }).click();
    //await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/onepage/');
}
}