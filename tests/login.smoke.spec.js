import { test, expect } from './fixtures.js';
import { users } from '../test-data/users.js';

test.describe('Login Smoke Tests', () => {
  test('login page loads with required elements', async ({ loginPage }) => {
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('successful login', async ({ loginPage }) => {
    await loginPage.login(users.validUser.email, users.validUser.password);

    await expect(loginPage.dashboard).toBeVisible();
    await expect(loginPage.welcomeText).toHaveText(
      `Welcome, ${users.validUser.email}!`
    );
  });
});