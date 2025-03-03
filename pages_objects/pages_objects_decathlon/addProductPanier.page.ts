import {Page , expect} from '@playwright/test';

export class AddProductPanier {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
async addProductPanier() {
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //expect url 
    await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t520b-confort-13-km-h-43x121cm/_/R-p-160872?mc=8529877');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await this.page.getByRole('button', { name: 'Non merci, ne pas assurer mon article' }).click();
    await expect(this.page.locator('header').filter({ hasText: 'Ajouté au panier !' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: '' })).toHaveText('1');
    await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
    }
}