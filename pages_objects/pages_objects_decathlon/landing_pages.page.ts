import { expect, type Page } from "@playwright/test";
import exp from "constants";

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
    await expect(this.page.getByRole('link', { name: 'Retour à la page d\'accueil de' })).toBeVisible();
    await expect(this.page.getByRole('searchbox', { name: 'Rechercher un produit, un sport ou une référence' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Sports' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Femme' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Homme' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Enfant & bébé' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Equipements & loisirs' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Nutrition & Santé' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Seconde Vie' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Bons plans' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Services & voyages' })).toBeVisible();
}
async acceptCookies() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await expect(this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' })).not.toBeVisible();
    }
async searchProduct() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course');
    await expect(this.page.getByRole('heading', { name: 'Tapis de course et tapis de' })).toBeVisible();
    }
async selectFirstProduct() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[2]').click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/p/mp/citysports/tapis-de-course-pliable-1400w-citysports-wp9-app-bluetooth-vitesse-1-12km-h/_/R-p-db56b0a1-8c19-45b8-823c-6d6d630484dd?mc=db56b0a1-8c19-45b8-823c-6d6d630484dd_c1&c=noir');
    await expect(this.page.getByRole('button', { name: 'Ajouter au panier' })).toBeVisible(); 
    await expect(this.page.getByLabel('Prix', { exact: true })).toHaveText('249€');
    await expect(this.page.locator('div').filter({ hasText: /^369€ -120€$/ }).first()).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Payez 3x ou 4x sans frais par' })).toBeVisible();
    await expect(this.page.getByText('Livraison à domicile')).toBeVisible();
}
    
async addProductToCart() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[2]').click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/p/mp/citysports/tapis-de-course-pliable-1400w-citysports-wp9-app-bluetooth-vitesse-1-12km-h/_/R-p-db56b0a1-8c19-45b8-823c-6d6d630484dd?mc=db56b0a1-8c19-45b8-823c-6d6d630484dd_c1&c=noir');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await expect(this.page.getByRole('alert')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Mon panier' })).toHaveText('1 Mon panier');
}
async accessCart() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[2]').click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/p/mp/citysports/tapis-de-course-pliable-1400w-citysports-wp9-app-bluetooth-vitesse-1-12km-h/_/R-p-db56b0a1-8c19-45b8-823c-6d6d630484dd?mc=db56b0a1-8c19-45b8-823c-6d6d630484dd_c1&c=noir');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await expect(this.page.getByRole('alert')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Mon panier' })).toHaveText('1 Mon panier');
    await this.page.getByRole('button', { name: 'Fermer l\'alerte' }).click();  
    await this.page.getByRole('link', { name: 'Mon panier' }).click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
}
async checkoutProcess() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await this.page.locator('xpath=//*[@id="app"]/main/div[2]/section[2]/div[1]/div[2]').click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/p/mp/citysports/tapis-de-course-pliable-1400w-citysports-wp9-app-bluetooth-vitesse-1-12km-h/_/R-p-db56b0a1-8c19-45b8-823c-6d6d630484dd?mc=db56b0a1-8c19-45b8-823c-6d6d630484dd_c1&c=noir');
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await expect(this.page.getByRole('alert')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Mon panier' })).toHaveText('1 Mon panier');
    await this.page.getByRole('button', { name: 'Fermer l\'alerte' }).click();  
    await this.page.getByRole('link', { name: 'Mon panier' }).click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
    await this.page.getByRole('button', { name: 'Poursuivre la commande' }).click();
    await expect(this.page).toHaveURL('https://login.decathlon.net/?client_id=02bdd21e-3f98-4970-a346-3f91b2cc9485&ui_locales=fr_FR&dkt_ecom_xp=revamp#/sign-in');
    await expect(this.page.getByRole('heading', { name: 'Se connecter' })).toBeVisible();
    await expect(this.page.getByText('Email')).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'Email' })).toHaveAttribute('placeholder', 'exemple@mail.com');
    await expect(this.page.getByRole('button', { name: 'Suivant' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Créer un compte DECATHLON' })).toBeVisible();

}

async sortResults() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course');
    await expect(this.page.getByRole('heading', { name: 'Tapis de course et tapis de' })).toBeVisible();
    await this.page.getByLabel('', { exact: true }).selectOption('1');
    await this.page.goto('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?Ns=sku.modelLowestPrice%7C0%7C%7Csku.activePrice%7C0%7C%7Csku.availability%7C1');
    await expect(this.page.getByText('Kit lubrifiant pour tapis de course - CARE - 150ml 9,90€ 100% Kit lubrifiant').first()).toBeVisible();
    }

async changePriceRange() {
    await this.page.goto('https://www.decathlon.fr/');
    await this.page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
    await this.page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('tapis de course');
    await this.page.keyboard.press('Enter');
    await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course');
    await expect(this.page.getByRole('heading', { name: 'Tapis de course et tapis de' })).toBeVisible();

    await this.page.getByRole('spinbutton', { name: 'Min. (€)' }).click();
    await this.page.getByRole('spinbutton', { name: 'Min. (€)' }).fill('20');

    await this.page.getByRole('spinbutton', { name: 'Max. (€)' }).dblclick();
    await this.page.getByRole('spinbutton', { name: 'Max. (€)' }).fill('80');

    await this.page.getByRole('button', { name: 'Appliquer' }).click();
    await expect(this.page).toHaveURL('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?price=from_20_to_80');
    await expect(this.page.getByRole('spinbutton', { name: 'Min. (€)' })).toHaveValue('20');
    await expect(this.page.getByRole('spinbutton', { name: 'Max. (€)' })).toHaveValue('80');
    await expect(this.page.getByText('W500 BARRES DE MAINTIEN 49,99').first()).toBeVisible();

    }

    async emptyCart() {
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
        await this.page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
        //await expect(this.page).toHaveURL('https://www.decathlon.fr/checkout/cart');
        await this.page.getByRole('button', { name: 'supprimer' }).first().click();   
    }
}