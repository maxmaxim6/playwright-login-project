import { test, expect } from './fixtures.js';
import { users } from '../test-data/users.js';

test('user can logout after login', async ({ loginPage }) => {
  await loginPage.login(users.validUser.email, users.validUser.password);

  await expect(loginPage.dashboard).toBeVisible();

  await loginPage.logout();

  await expect(loginPage.dashboard).not.toBeVisible();
});