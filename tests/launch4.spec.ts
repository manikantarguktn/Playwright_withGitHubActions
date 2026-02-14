import { test, expect } from '@playwright/test';
test('@sanity Run this test only 4', async ({ page }) => {
  await page.goto('https://example.com');
});