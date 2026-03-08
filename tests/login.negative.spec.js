import { test, expect } from './fixtures.js';
import { users } from '../test-data/users.js';

test.describe('Login Negative Tests', () => {
  test('wrong password shows error', async ({ loginPage }) => {
    await loginPage.login(
      users.wrongPassword.email,
      users.wrongPassword.password
    );

    await expect(loginPage.errorText).toHaveText('Wrong credentials');
    await expect(loginPage.dashboard).not.toBeVisible();
  });

  test('wrong email with correct password still logs in based on current app logic', async ({ loginPage }) => {
    await loginPage.login('someone@test.com', users.validUser.password);

    await expect(loginPage.dashboard).toBeVisible();
    await expect(loginPage.welcomeText).toHaveText(
      'Welcome, someone@test.com!'
    );
  });
});