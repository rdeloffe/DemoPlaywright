import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.decathlon.fr/');
  await page.getByRole('button', { name: 'Accepter & Fermer: Accepter' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).click();
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('V');
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Rechercher un produit, un' }).fill('Velo');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Vélo VTT électrique tout suspendu 29" - E-EXPL 700 S Cuivre', exact: true }).click();
  await page.getByRole('combobox', { name: 'Sélectionnez une taille' }).click();
  await page.getByRole('option', { name: 'Taille L - 175-184cm, En stock' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('button', { name: 'Non merci, ne pas assurer mon' }).click();
  await page.getByRole('link', { name: 'Visualiser mon panier ' }).click();
});