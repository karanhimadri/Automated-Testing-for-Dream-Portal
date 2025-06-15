import { test, expect } from "@playwright/test";
import { DreamsTotalPage } from "../pages/DreamsTotalPage ";

test('verify dream data on summary page', async ({ page }) => {
  const dreamsTotalPage = new DreamsTotalPage(page);
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');

  await expect(dreamsTotalPage.table).toBeVisible();

  expect(await dreamsTotalPage.getStatByLabel('Good Dreams')).toBe(6);
  expect(await dreamsTotalPage.getStatByLabel('Bad Dreams')).toBe(4);
  expect(await dreamsTotalPage.getStatByLabel('Total Dreams')).toBe(10);
  expect(await dreamsTotalPage.getStatByLabel('Recurring Dreams')).toBe(2);
});
