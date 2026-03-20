// spec: testPlan/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SauceDemo Product Purchase Flow', () => {
  test('Successful Product Purchase Flow', async ({ page }) => {
    // Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    
    // Enter username: "standard_user"
    await page.locator('[data-test="username"]').fill('standard_user');
    
    // Enter password: "secret_sauce"
    await page.locator('[data-test="password"]').fill('secret_sauce');
    
    // Click Login button
    await page.locator('[data-test="login-button"]').click();
    
    // Verify product listing page displays "Products"
    await expect(page.getByText('Products')).toBeVisible();
    
    // Add first product (Sauce Labs Backpack) to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Navigate to cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    // Verify "Sauce Labs Backpack" is in cart
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    
    // Click Checkout
    await page.locator('[data-test="checkout"]').click();
    
    // Enter First Name: "John", Last Name: "Doe", Zip Code: "12345"
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    
    // Click Continue
    await page.locator('[data-test="continue"]').click();
    
    // Verify order summary page shows "Checkout: Overview"
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    
    // Click Finish
    await page.locator('[data-test="finish"]').click();
    
    // Verify confirmation message "Thank you for your order!" is displayed
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });
});