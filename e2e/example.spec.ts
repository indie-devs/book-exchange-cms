import { expect, test } from '@playwright/test';

test('homepage has book-exchange-cms in title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/book-exchange-cms/);
});
