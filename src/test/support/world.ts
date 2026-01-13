import { chromium, Browser, Page } from "playwright";

let browser: Browser;
export let page: Page;

export async function launchBrowser() {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
}

export async function closeBrowser() {
  await browser.close();
}
