import { test, expect } from '@playwright/test';
test.only('@sanity Run this test only 5', async ({ page }) => {
  await page.goto('https://example.com');
});
