Playwright Login Automation Project
Description

This project demonstrates End-to-End (E2E) test automation using Playwright.

It includes a simple Login web application and automated tests written in JavaScript, following best practices such as:

Page Object Model (POM)

Playwright Fixtures

Test Data Separation

CI Integration

Docker containerization

The goal of this project is to showcase practical automation skills suitable for a Junior QA Automation Engineer role.

Tech Stack
Languages

JavaScript

Frameworks

Playwright

DevOps & CI

Docker

GitHub Actions

Jenkins (Pipeline Example)

Reporting

Playwright HTML Report

JUnit Report

Frontend (Test Application)

HTML

Vanilla JavaScript

Project Structure
playwright-login-project
│
├── app
│   ├── login.html
│   └── login.js
│
├── pages
│   └── login.page.js
│
├── tests
│   ├── fixtures.js
│   ├── login.smoke.spec.js
│   ├── login.negative.spec.js
│   ├── login.validation.spec.js
│   └── login.session.spec.js
│
├── test-data
│   └── users.js
│
├── .github/workflows
│   └── playwright.yml
│
├── Dockerfile
├── .dockerignore
│
├── playwright.config.js
├── Jenkinsfile
├── package.json
├── package-lock.json
└── README.md
Test Scenarios
Smoke Tests

Login page loads successfully

Required UI elements are visible

Successful login

Negative Tests

Login with wrong password

Login with unexpected email

Validation Tests

Empty email

Invalid email format

Empty password

Both fields empty

Email trimming with spaces

Session Tests

Login

Logout

Session validation

Run the Project Locally

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

Run tests:

npx playwright test

Open the test report:

npx playwright show-report
Run Tests Using Docker

The project includes Docker support so the automation tests can run in an isolated environment.

Build the Docker image
docker build -t playwright-tests .
Run the tests inside Docker
docker run playwright-tests

Docker will automatically run the Playwright tests inside the container.

Automation Framework Design
Page Object Model (POM)

All UI actions are centralized in page objects:

pages/login.page.js

This improves maintainability, readability, and code reuse.

Fixtures

A custom Playwright fixture provides a ready-to-use loginPage object for tests.

tests/fixtures.js

This removes duplicated setup logic.

Test Data Management

Test data is separated from test logic.

test-data/users.js

This approach improves maintainability and scalability.

Continuous Integration
GitHub Actions

Tests automatically run on push using:

.github/workflows/playwright.yml

This simulates a real CI environment.

Jenkins Pipeline

The project also includes a Jenkins pipeline example:

Jenkinsfile

This demonstrates CI/CD integration with automation frameworks.

Test Reports

Playwright generates a detailed HTML report after test execution.

Run:

npx playwright show-report

The report includes:

Test results

Execution time

Failed test screenshots

Error logs

Author

Automation project created to demonstrate Playwright automation framework design, CI/CD integration, and Dockerized test execution for QA Automation roles.
