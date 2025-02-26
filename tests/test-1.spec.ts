import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://hightest.nc/');
  await page.getByRole('link', { name: 'Toolbox' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.d-flex > a').first().click();
  const page1 = await page1Promise;
  await page1.locator('input[name="\\30 "]').first().check();
  await page1.locator('input[name="\\31 "]').nth(1).check();
  await page1.locator('input[name="\\32 "]').first().check();
  await page1.locator('input[name="\\33 "]').nth(1).check();
  await page1.locator('input[name="\\34 "]').nth(1).check();
  await page1.locator('input[name="\\35 "]').nth(2).check();
  await page1.locator('input[name="\\36 "]').nth(1).check();
  await page1.locator('input[name="\\37 "]').nth(3).check();
  await page1.locator('input[name="\\38 "]').first().check();
  await page1.locator('input[name="\\39 "]').nth(2).check();
  await page1.locator('input[name="\\31 0"]').nth(3).check();
  await page1.locator('input[name="\\31 1"]').nth(1).check();
  await page1.locator('input[name="\\31 2"]').nth(2).check();
  await page1.locator('input[name="\\31 3"]').nth(1).check();
  await page1.locator('input[name="\\31 4"]').nth(3).check();
  await page1.locator('input[name="\\31 5"]').nth(2).check();
  await page1.locator('input[name="\\31 6"]').nth(2).check();
  await page1.locator('input[name="\\31 7"]').first().check();
  await page1.locator('input[name="\\31 8"]').nth(1).check();
  await page1.locator('input[name="\\31 9"]').nth(1).check();
  await page1.getByRole('button', { name: 'Terminé !' }).click();
});