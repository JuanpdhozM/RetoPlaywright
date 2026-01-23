import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await expect(page).toHaveTitle("Mercado Libre Colombia - Envíos Gratis en el día");

  await page.locator('//input[@id = \'cb1-edit\']').fill("iphone");
  await page.keyboard.press('Enter');
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li').allInnerTexts();
  console.log(titles.length)
  //await page.pause();
});

test('api test', async ({request}) => {
  const response = await request.get('https://petstore.swagger.io/v2/pet/2');
  expect(response.ok()).toBeTruthy();
  const resources = await response.json();
  console.log(resources);

  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual(expect.objectContaining(
    {
      "id": 2,
      "category": {
        "id": 0,
        "name": "dog"
      },
      "name": "Tom",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }
  ));
});
