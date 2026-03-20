// spec: testPlan/test-plan.md
// seed: tests/seed.spec.ts

const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Product Purchase Flow', () => {
  test('Invalid Login Credentials', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter invalid username: "invalid_user"
    await page.locator('[data-test="username"]').fill('invalid_user');

    // 3. Enter invalid password: "wrong_password"
    await page.locator('[data-test="password"]').fill('wrong_password');

    // 4. Click Login button
    await page.locator('[data-test="login-button"]').click();

    // 5. Verify login fails
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

    // 6. Verify error message "Username and password do not match any user in this service" is displayed  
    await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();

    // 7. Verify user remains on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  });
});