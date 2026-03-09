# Playwright Login Automation Project

## 📝 Description
This project demonstrates advanced end-to-end (E2E) test automation using **Playwright**. 
It includes a built-in login web application and a suite of automated tests written in **JavaScript**, following industry best practices like the **Page Object Model (POM)**, **Custom Fixtures**, and **Containerization**.

The goal is to showcase a production-ready automation framework with full CI/CD integration.

---

## 🛠 Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** Playwright
* **DevOps & CI/CD:** Docker, GitHub Actions, Jenkins
* **Reporting:** HTML & JUnit Reports
* **Frontend:** HTML / Vanilla JS (Local Test App)

---

## 📂 Project Structure & File Map
Below is the detailed structure of the project, including all key automation files:

```text
playwright-login-project/
│
├── app/                        # Web application under test
│   ├── login.html              # Login page frontend
│   └── login.js                # Login logic
│
├── pages/                      # Page Object Model (POM)
│   └── login.page.js           # Locators and actions for Login page
│
├── tests/                      # Test Suite
│   ├── fixtures.js             # Custom Playwright fixtures
│   ├── login.smoke.spec.js     # Critical path tests
│   ├── login.negative.spec.js  # Error handling tests
│   ├── login.validation.spec.js # Field validation tests
│   └── login.session.spec.js   # Login/Logout flow tests
│
├── test-data/                  # Data-Driven Testing
│   └── users.js                # Test user credentials
│
├── .github/workflows/          # CI/CD Configuration
│   └── playwright.yml          # GitHub Actions Dockerized pipeline
│
├── Dockerfile                  # Environment isolation config
├── .dockerignore               # Docker build optimization
├── playwright.config.js        # Playwright global settings
├── Jenkinsfile                 # Jenkins automation pipeline
├── package.json                # Project dependencies
└── README.md                   # Documentation
🚀 How to Run the Project
Option 1: Using Docker (Recommended)
Ensures the environment is identical to the CI pipeline:

Build the Image:

Bash
docker build -t playwright-tests .
Run the Tests:

Bash
docker run --rm playwright-tests
Option 2: Local Execution
Install Dependencies: npm install

Install Browsers: npx playwright install

Run Tests: npx playwright test

View Report: npx playwright show-report

🔄 CI/CD Integration
GitHub Actions
Fully integrated with GitHub Actions. Every push or pull_request triggers a Dockerized test run.
Status: Check the "Actions" tab for live execution logs.

Jenkins
Includes a pre-configured Jenkinsfile for enterprise-level automation servers, supporting pipeline-as-code.

💎 Automation Highlights
1. Maintainability (POM)
Using the Page Object Model ensures that UI changes (like a button ID update) only need to be fixed in one file (pages/), keeping the tests clean and robust.

2. Stability (Docker)
Running tests inside Docker eliminates "It works on my machine" issues by providing a consistent Linux environment with all dependencies pre-installed.

3. Scalability (Fixtures & Data)
Fixtures: Custom setup/teardown logic reduces code duplication.

External Data: Test data is separated from logic, allowing for easy expansion.

👤 Author
Software Engineer & Automation Specialist
Specializing in building robust, scalable, and optimized automation frameworks.
