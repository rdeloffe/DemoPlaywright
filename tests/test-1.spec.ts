import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...

  await page.getByLabel('', { exact: true }).selectOption('0');
  await page.goto('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?Ns=our-selection');
  await page.getByLabel('', { exact: true }).selectOption('1');
  await page.getByLabel('', { exact: true }).selectOption('0');
  await page.goto('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?Ns=our-selection');
  await page.getByLabel('', { exact: true }).selectOption('1');
  await page.goto('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?Ns=sku.modelLowestPrice%7C0%7C%7Csku.activePrice%7C0%7C%7Csku.availability%7C1');
  await page.goto('https://www.decathlon.fr/tous-les-sports/fitness-cardio-training/tapis-de-course?Ns=sku.modelLowestPrice%7C0%7C%7Csku.activePrice%7C0%7C%7Csku.availability%7C1');
});