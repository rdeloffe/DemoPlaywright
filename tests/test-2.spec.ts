import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://hightest.nc/');
  await page.getByRole('link', { name: 'Toolbox' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.d-flex > a').first().click();
  const page1 = await page1Promise;
  
  await page1.locator('input[name="\\30 "]').first().check();
});