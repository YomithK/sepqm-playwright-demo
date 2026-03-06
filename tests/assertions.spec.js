import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page).toHaveTitle(/Todo/);
});