import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('add a new todo item', async ({ page }) => {

    await page.getByPlaceholder('What needs to be done?')
        .fill('Learn Playwright');

    await page.keyboard.press('Enter');

    await expect(page.getByText('Learn Playwright')).toBeVisible();
});