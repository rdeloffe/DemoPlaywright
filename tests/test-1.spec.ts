import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
  await page.getByLabel('Docs sidebar').getByRole('link', { name: 'Ambassadors' }).click();
});