import { test } from '@playwright/test';
import { LandingPages } from '../pages_objects/pages_objects_hightest/landing_pages.page';
import { QuizzSelection } from '../pages_objects/pages_objects_hightest/Quizz_pages.page';
test('Navigate' , async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.Navigate();
    await landingPages.clickOnToolbox();
});

test('Quizz' , async ({ page }) => {
    const landingPages = new LandingPages(page);
    await landingPages.Navigate();
    await landingPages.clickOnToolbox();

    const quizzSelection = new QuizzSelection(page);
    await quizzSelection.selectQuizz(); // Ouvre et stocke la nouvelle page
    await quizzSelection.selectAnswers(); // Utilise automatiquement la nouvelle page

});