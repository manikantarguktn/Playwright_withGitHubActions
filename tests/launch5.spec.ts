import { test, expect } from '@playwright/test';
test('@sanity @regression Run this test only 5', async ({ page }) => {
  await page.goto('https://www.facebook.com');
});
