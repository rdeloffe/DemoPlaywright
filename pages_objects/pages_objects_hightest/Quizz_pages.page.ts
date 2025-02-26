import { expect, type Page, type BrowserContext } from "@playwright/test";

export class QuizzSelection {
    readonly page: Page;
    readonly context: BrowserContext;
    private newPage?: Page; // Stocke la nouvelle page

    constructor(page: Page) {
        this.page = page;
        this.context = page.context();
    }

    async selectQuizz() {
        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'), // Attend l'ouverture de la nouvelle page
            this.page.getByRole('link', { name: 'Français' }).first().click()
        ]);

        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://hightest.nc/ressources/test-istqb.php');

        this.newPage = newPage; // Stocke la nouvelle page pour l'utiliser plus tard
    }

    //L'utilisation de context permets de prendre en compte la nouvelle page ouverte et donc de faire 
    // en sorte que les actions soient effectuées sur la nouvelle page

    async selectAnswers() {
        if (!this.newPage) {
            throw new Error("La nouvelle page n'a pas été ouverte correctement.");
        }

        await this.newPage.goto('https://hightest.nc/ressources/test-istqb.php');

        await this.newPage.locator('input[name="\\30 "]').first().check();
        await this.newPage.locator('input[name="\\31 "]').nth(1).check();
        await this.newPage.locator('input[name="\\32 "]').nth(0).check();
        await this.newPage.locator('input[name="\\33 "]').nth(1).check();
        await this.newPage.locator('input[name="\\34 "]').nth(1).check();
        await this.newPage.locator('input[name="\\35 "]').nth(2).check();
        await this.newPage.locator('input[name="\\36 "]').nth(1).check();
        await this.newPage.locator('input[name="\\37 "]').nth(3).check();
        await this.newPage.locator('input[name="\\38 "]').nth(0).check();
        await this.newPage.locator('input[name="\\39 "]').nth(2).check();
        await this.newPage.locator('input[name="\\31 0"]').nth(3).check();
        await this.newPage.locator('input[name="\\31 1"]').nth(1).check();
        await this.newPage.locator('input[name="\\31 2"]').nth(2).check();
        await this.newPage.locator('input[name="\\31 3"]').nth(1).check();
        await this.newPage.locator('input[name="\\31 4"]').nth(3).check();
        await this.newPage.locator('input[name="\\31 5"]').nth(2).check();
        await this.newPage.locator('input[name="\\31 6"]').nth(2).check();
        await this.newPage.locator('input[name="\\31 7"]').nth(0).check();
        await this.newPage.locator('input[name="\\31 8"]').nth(1).check();
        await this.newPage.locator('input[name="\\31 9"]').nth(1).check();
        await this.newPage.getByRole('button', { name: 'Terminé !' }).click();
    }
}
