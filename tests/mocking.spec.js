import { test, expect } from '@playwright/test';

test('mock API response', async ({ page }) => {

    await page.route('**/api/tasks', route =>
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                { title: 'Mocked Task 1' },
                { title: 'Mocked Task 2' }
            ])
        })
    );

    await page.goto('https://demo.playwright.dev/todomvc');

});