import { expect, type Page } from "@playwright/test";

export class LandingPages {
    readonly page: Page;
constructor(page: Page) {
    this.page = page;
    }
async Navigate() {
    await this.page.goto('https://hightest.nc/');
    // await expect(this.page).toHaveURL('https://hightest.nc/');
    }
async clickOnToolbox() {
    await this.page.getByRole('link', { name: 'Toolbox' }).click();
    // await expect(this.page).toHaveURL('https://hightest.nc/toolbox/');
    }
}