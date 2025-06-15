import { test, expect } from "@playwright/test";
import { IndexPage } from "../pages/IndexPage"

test('loading animation disappears and main content loads', async ({ page }) => {
  const indexPage = new IndexPage(page);
  await page.goto('https://arjitnigam.github.io/myDreams/index.html');

  await indexPage.waitForLoadingToDisappear();

  await expect(indexPage.mainContent).toBeVisible();
  await expect(indexPage.myDreamsButton).toBeVisible();

  await indexPage.clickMyDreams();
});
