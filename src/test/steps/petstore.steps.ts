import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from '../support/hook';

When('realizo una petición GET a {string}', async function (this: CustomWorld, endpoint: string) {
  if (!this.apiContext) throw new Error("API Context no inicializado. ¿Olvidaste el paso de Background?");
  this.response = await this.apiContext?.get(endpoint);
});

Then('la respuesta retorna status code {int}', async function (this: CustomWorld, statusCode: number) {
  expect(this.response.ok()).toBeTruthy();
  expect(this.response.status()).toBe(statusCode);
  expect(await this.response.json()).toEqual(expect.objectContaining(
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
  const body = await this.response.json();
  console.log(body);
});

Given('realizo una petición POST a {string}', async function (this: CustomWorld, endpoint: string) {
  if (!this.apiContext) throw new Error("API Context no inicializado. ¿Olvidaste el paso de Background?");
  this.response = await (await this.apiContext?.post(endpoint, {
    data: {
      id: 9,
      petId: 2,
      quantity: 1,
      shipDate: "2026-01-09T16:32:04.709Z",
      status: "Vendido",
      complete: true
    }
  })).json()
});

Then('la orden existe y retorna status code {int}', async function (this: CustomWorld, statusCode: number) {
  expect(this.response.ok()).toBeTruthy();
  expect(this.response.status()).toBe(statusCode);
  expect(await this.response.json()).toEqual(expect.objectContaining(
    {
      "id": 9,
      "petId": 2,
      "quantity": 1,
      "shipDate": "2026-01-09T16:32:04.709+0000",
      "status": "Vendido",
      "complete": true
    }
  ));
  const body = await this.response.json();
  console.log(body);
});

When('realizo una petición DELETE a {string}', async function (this: CustomWorld, endpoint: string) {
  if (!this.apiContext) throw new Error("API Context no inicializado. ¿Olvidaste el paso de Background?");
  this.response = await this.apiContext?.delete(endpoint);
});

Then('verifico que el borrado retorna status code {int}', async function (this: CustomWorld, statusCode: number) {
  expect(this.response.ok()).toBeTruthy();
  expect(this.response.status()).toBe(statusCode);
  expect(await this.response.json()).toEqual(expect.objectContaining(
    {
      "code": 200,
      "type": "unknown",
      "message": "9"
    }
  ));
  const body = await this.response.json();
  console.log(body);
});

Then('verifica que la disponivilidad no este vacia', async function () {
  expect(this.response.ok()).toBeTruthy();
  expect(this.response.status()).toBe(200);
  const body = await this.response.json();
  console.log(body);
  expect(body.available).toBeGreaterThan(0);
});
