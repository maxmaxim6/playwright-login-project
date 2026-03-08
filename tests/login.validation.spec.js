import { test, expect } from './fixtures.js';
import { users } from '../test-data/users.js';

test.describe('Login Validation Tests', () => {
  test('empty email shows required message', async ({ loginPage }) => {
    await loginPage.fillEmail(users.emptyEmail.email);
    await loginPage.fillPassword(users.emptyEmail.password);
    await loginPage.clickLogin();

    await expect(loginPage.errorText).toHaveText('Email is required');
  });

  test('invalid email format shows error', async ({ loginPage }) => {
    await loginPage.fillEmail(users.invalidEmail.email);
    await loginPage.fillPassword(users.invalidEmail.password);
    await loginPage.clickLogin();

    await expect(loginPage.errorText).toHaveText('Email is invalid');
  });

  test('empty password shows required message', async ({ loginPage }) => {
    await loginPage.fillEmail(users.emptyPassword.email);
    await loginPage.fillPassword(users.emptyPassword.password);
    await loginPage.clickLogin();

    await expect(loginPage.errorText).toHaveText('Password is required');
  });

  test('both fields empty shows email required first', async ({ loginPage }) => {
    await loginPage.fillEmail('');
    await loginPage.fillPassword('');
    await loginPage.clickLogin();

    await expect(loginPage.errorText).toHaveText('Email is required');
  });

  test('email with spaces is trimmed and login succeeds', async ({ loginPage }) => {
    await loginPage.login('  max@test.com  ', users.validUser.password);

    await expect(loginPage.dashboard).toBeVisible();
    await expect(loginPage.welcomeText).toHaveText('Welcome, max@test.com!');
  });
});