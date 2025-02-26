import {Page , expect} from '@playwright/test';

export class AddProductPanier {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
async addProductPanier() {
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[5]').click();
    //expect url 
    // await expect(this.page).toHaveURL('https://www.decathlon.fr/p/tapis-de-course-t900d-connecte-et-performant-18-km-h-50x143cm/_/R-p-161031?mc=8754269&c=noir_incolore');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await this.page.getByRole('button', { name: 'Non merci, ne pas assurer mon article' }).click();
    // await expect(this.page.getByText('Ajouté au panier !')).toBeVisible();
    // await expect(this.page.locator('xpath=//*[@id="popin-cross-sell"]/div/div/div/section[1]/div[1]/span/span/a/span[2]')).toHaveText('1');
    await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
    // await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
    }
}