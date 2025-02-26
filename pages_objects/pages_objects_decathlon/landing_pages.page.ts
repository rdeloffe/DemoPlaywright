import { expect, type Page } from "@playwright/test";

export class LandingPages {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
async onpenSearchAndClick() {
    await this.page.goto('https://www.decathlon.fr/');  
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('Tapis de course');
    await this.page.keyboard.press('Enter');
    await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course');
    }
}