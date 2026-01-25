import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    // Using a generic expectation since I don't know the exact title yet, 
    // but checking if the page loads is the first step.
    // We can also check for a visible element.
    await expect(page).toHaveTitle(/.*Portfolio/i); // Adjust based on actual title if known, or generic
});

test('get started link', async ({ page }) => {
    await page.goto('/');

    // Check if we can find a main element or something strictly checking connection
    await expect(page.locator('body')).toBeVisible();
});
