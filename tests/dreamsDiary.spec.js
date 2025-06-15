import { test, expect } from "@playwright/test";
import { DreamsDiaryPage } from "../pages/DreamsDiaryPage"

test('dreams diary table loads and validate data', async ({ page }) => {
  const dreamsDiaryPage = new DreamsDiaryPage(page);
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  // check table visibility
  await expect(dreamsDiaryPage.dreamsTable).toBeVisible();

  // Validate row count
  const rowCount = await dreamsDiaryPage.getRowCount()
  expect(rowCount).toBe(10)

  // Validate that dream types are only “Good” or “Bad”
  const rows = await dreamsDiaryPage.getAllRowData()
  for (const row of rows) {
    // Each row has all three columns with value
    expect(row.dreamName.trim().length).toBeGreaterThan(0);
    expect(row.daysAgo.trim().length).toBeGreaterThan(0);
    expect(row.dreamType.trim().length).toBeGreaterThan(0);

    expect(['Good', 'Bad']).toContain(row.dreamType);
  }

});
