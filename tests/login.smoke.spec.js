import { test, expect } from "@playwright/test";

test("login success shows dashboard", async ({ page }) => {
  await page.goto("file:///C:/Users/maxma/OneDrive/Desktop/playwright-login-project/app/login.html");

  await page.fill('[data-testid="email-input"]', "max@test.com");
  await page.fill('[data-testid="password-input"]', "1234");
  await page.click('[data-testid="login-btn"]');

  await expect(page.locator('[data-testid="dashboard"]')).toBeVisible();
  await expect(page.locator('[data-testid="welcome-text"]')).toHaveText("Welcome, max@test.com!");
});
