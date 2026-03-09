# Playwright Login Automation Project

## Description

This project demonstrates end-to-end (E2E) test automation using **Playwright**.
It includes a simple login web application and automated tests written in **JavaScript**, following **Page Object Model (POM)** and **Playwright Fixtures** best practices.

The goal of this project is to showcase practical automation skills suitable for a **Junior QA Automation Engineer** role.

---

# Tech Stack

* JavaScript
* Playwright
* HTML / Vanilla JS
* Node.js
* GitHub Actions
* Jenkins (pipeline example)

---

# Features Covered

This project demonstrates several important automation concepts:

* End-to-End UI testing
* Page Object Model (POM)
* Playwright Fixtures
* Test Data Management
* Smoke Tests
* Negative Tests
* Validation Tests
* Session Tests (Login / Logout)
* HTML & JUnit Test Reports
* Local Web Server for test environment
* CI pipeline example (GitHub Actions)

---

# Project Structure

```
playwright-login-project/
│
├─ app
│   ├─ login.html
│   └─ login.js
│
├─ pages
│   └─ login.page.js
│
├─ tests
│   ├─ fixtures.js
│   ├─ login.smoke.spec.js
│   ├─ login.negative.spec.js
│   ├─ login.validation.spec.js
│   └─ login.session.spec.js
│
├─ test-data
│   └─ users.js
│
├─ .github/workflows
│   └─ playwright.yml
│
├─ playwright.config.js
├─ Jenkinsfile
├─ package.json
└─ README.md
```

---

# Test Scenarios

### Smoke Tests

* Login page loads successfully
* Required UI elements are visible
* Successful login

### Negative Tests

* Login with wrong password
* Login with unexpected email

### Validation Tests

* Empty email
* Invalid email format
* Empty password
* Both fields empty
* Email trimming with spaces

### Session Tests

* Login and logout flow

---

# How to Run the Project

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

Run tests:

```
npx playwright test
```

Open the HTML report:

```
npx playwright show-report
```

---

# Automation Design Highlights

### Page Object Model

All UI interactions are handled in:

```
pages/login.page.js
```

This keeps test logic clean and maintainable.

---

### Fixtures

A custom Playwright fixture is used to provide a ready-to-use `loginPage` object for each test.

```
tests/fixtures.js
```

---

### Test Data

Test data is separated from test logic.

```
test-data/users.js
```

This allows easier maintenance and scalability.

---

# CI Integration

The project includes a GitHub Actions workflow that automatically runs Playwright tests on push.

```
.github/workflows/playwright.yml
```

---

# Example Report

Playwright generates a rich HTML report for test execution results.

Run:

```
npx playwright show-report
```

---

# Author

Automation project created to demonstrate **Playwright automation framework design and best practices**.
