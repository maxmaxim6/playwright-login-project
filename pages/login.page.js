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
    await this.page.goto(
      'file:///C:/Users/maxma/OneDrive/Desktop/JS/app/login.html'
    );
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
