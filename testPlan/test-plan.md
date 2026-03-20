# Test Plan: SauceDemo Product Purchase Flow

## Application Details

**Application URL:** https://www.saucedemo.com/

## Test Credentials

| Field      | Value            |
|------------|------------------|
| Username   | standard_user    |
| Password   | secret_sauce     |

---

## Test Cases

### TC_001 - Positive Test Case: Successful Product Purchase Flow

**Test Case ID:** TC_001

**Steps:**
1. Navigate to the SauceDemo website (https://www.saucedemo.com/)
2. Enter valid username: "standard_user"
3. Enter valid password: "secret_sauce"
4. Click on the "Login" button
5. Verify that the product listing page is displayed
6. Add the first product to the cart by clicking "Add to cart" button
7. Navigate to the cart by clicking the cart icon
8. Verify that the selected product is present in the cart
9. Click on the "Checkout" button
10. Enter valid checkout details:
    - First Name: "John"
    - Last Name: "Doe"
    - Zip Code: "12345"
11. Click the "Continue" button
12. Review the order summary page
13. Click the "Finish" button

**Expected Result:**
- User successfully completes the checkout process
- Order confirmation page is displayed
- Order confirmation message "Thank you for your order!" is visible

**Actual Result:**
✅ **PASSED** - All steps executed successfully. User completed the checkout process. Order confirmation page displayed at https://www.saucedemo.com/checkout-complete.html with the message "Thank you for your order!" visible.

---

### TC_002 - Negative Test Case: Invalid Login Credentials

**Test Case ID:** TC_002

**Steps:**
1. Navigate to the SauceDemo website (https://www.saucedemo.com/)
2. Enter invalid username: "invalid_user"
3. Enter invalid password: "wrong_password"
4. Click on the "Login" button

**Expected Result:**
- Login attempt fails
- Error message is displayed: "Username and password do not match any user in this service"
- User remains on the login page

**Actual Result:**
✅ **PASSED** - Login failed as expected. Error message "Epic sadface: Username and password do not match any user in this service" displayed on login page. User remained on https://www.saucedemo.com/.