import { test, expect } from '@playwright/test';
test('@sanity Run this test only 1', async ({ page }) => {
  await page.goto('https://example.com');
});