import { test, expect } from '@playwright/test';

test('simple reporting test', async ({ page }) => {

    await page.goto('https://courseweb.sliit.lk/');

    await expect(page).toHaveTitle(/CourseWeb/);

});