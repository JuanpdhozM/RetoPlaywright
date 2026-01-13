import { Given } from "@cucumber/cucumber";
import { CustomWorld } from '../support/hook';

Given('Preparo el contexto de la api usando {string}', async function (this: CustomWorld, baseUrl: string) {
  await this.initApiContext(baseUrl);
});