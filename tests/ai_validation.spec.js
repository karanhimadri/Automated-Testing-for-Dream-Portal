import { test, expect } from "@playwright/test";
import { classifyDream } from "../utils/classificationWithAI";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test('AI-Based Validation of dream types', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  const rows = await page.locator('#dreamsDiary tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const dreamName = await rows.nth(i).locator('td').nth(0).textContent();
    const expectedType = await rows.nth(i).locator('td').nth(2).textContent();

    const aiType = await classifyDream(dreamName);

    console.log(`Dream: ${dreamName} → AI: ${aiType} | Expected: ${expectedType}`);

    expect(aiType.toLowerCase()).toContain(expectedType.trim().toLowerCase());

    // 5 seconds delay to prevent hitting API rate limits
    await delay(5000);
  }
}, { timeout: 300_000 }); // Timeout set to 5 minutes (300,000 ms)
