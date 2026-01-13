import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../support/world";

Given('I open the Playwright homepage', async function () {
  //await page.goto('https://www.mercadolibre.com.co/');
  //await expect(page).toHaveTitle("Mercado Libre Colombia - Envíos Gratis en el día");
});

When('The user type phone in search bar', async function () {
  //await page.locator('//input[@id = \'cb1-edit\']').fill("iphone");
  //await page.keyboard.press('Enter');
});

Then('the title should contain {string}', async function (string) {
  //await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  //const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li').allInnerTexts();
  //console.log(titles.length)
});
