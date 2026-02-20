import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('POM: successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('max@test.com', '1234');

  await expect(loginPage.dashboard).toBeVisible();
  await expect(loginPage.welcomeText).toHaveText('Welcome, max@test.com!');
});

test('POM: wrong password shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('max@test.com', 'wrong');

  await expect(loginPage.errorText).toHaveText('Wrong credentials');
});
