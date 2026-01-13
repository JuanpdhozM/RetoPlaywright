import { Before, After, setWorldConstructor } from "@cucumber/cucumber";
import { launchBrowser, closeBrowser } from "./world";
import { request, APIRequestContext } from '@playwright/test';

export class CustomWorld {
  apiContext?: APIRequestContext;
  response: any;

  async initApiContext(url: string) {
    this.apiContext = await request.newContext({
      baseURL: url,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      }
    });
  }
};

setWorldConstructor(CustomWorld);

Before(async function () {
  //await launchBrowser();
});

After(async function (this: CustomWorld) {
  //await closeBrowser();
  await this.apiContext?.dispose();
});
