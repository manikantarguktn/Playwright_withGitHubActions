import { test, expect } from '@playwright/test';
test.only('@sanityRun this test only 2', async ({ page }) => {
  await page.goto('https://example.com');
});