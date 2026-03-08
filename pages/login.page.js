export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('[data-testid="email-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.loginButton = page.locator('[data-testid="login-btn"]');
    this.errorText = page.locator('[data-testid="error-text"]');
    this.dashboard = page.locator('[data-testid="dashboard"]');
    this.welcomeText = page.locator('[data-testid="welcome-text"]');
    this.logoutButton = page.locator('[data-testid="logout-btn"]');
  }

  async goto() {
    await this.page.goto('/app/login.html');
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async logout() {
    await this.logoutButton.click();
  }
}