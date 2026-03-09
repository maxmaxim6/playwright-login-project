# Playwright Login Automation Project

## Description
This project demonstrates advanced end-to-end (E2E) test automation using **Playwright**.
It includes a login web application and automated tests written in **JavaScript**, following industry best practices such as the **Page Object Model (POM)**, **Custom Fixtures**, and **Containerization**.

The goal of this project is to showcase professional automation engineering skills, including CI/CD integration and environment isolation.

---

# Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** Playwright
* **DevOps & CI/CD:** Docker, GitHub Actions, Jenkins
* **Reporting:** HTML & JUnit Reports
* **Frontend:** HTML / Vanilla JS (Local Test App)

---

# Features Covered
* **End-to-End UI Testing:** Full user flow validation.
* **Page Object Model (POM):** Decoupling test logic from UI locators for high maintainability.
* **Playwright Fixtures:** Optimized setup/teardown using custom fixtures.
* **Data-Driven Testing:** Separation of test data from execution logic.
* **Test Suite Variety:** Smoke, Negative, Validation, and Session tests.
* **Containerization:** Fully Dockerized environment for consistent execution.
* **CI/CD Pipelines:** Automated test execution on every push via GitHub Actions and Jenkins.

---

# Project Structure
playwright-login-project/
│
├─ app/                  # Web application under test
├─ pages/                # Page Object Model classes
├─ tests/                # Test specifications & custom fixtures
├─ test-data/            # Externalized test data
├─ .github/workflows/    # GitHub Actions CI configuration
├─ Dockerfile            # Docker environment configuration
├─ .dockerignore         # Docker build optimization
├─ playwright.config.js  # Playwright global settings
├─ Jenkinsfile           # Jenkins CI/CD pipeline
├─ package.json          # Dependencies and scripts
└─ README.md             # Project documentation


---

# How to Run the Project

### Option 1: Using Docker (Recommended)
This is the most reliable way to run the tests in a containerized environment:

1. **Build the Image:**
   ```bash
   docker build -t playwright-tests .
Run the Tests:

Bash
docker run --rm playwright-tests
Option 2: Local Execution
Install Dependencies:

Bash
npm install
Install Browsers:

Bash
npx playwright install
Run Tests:

Bash
npx playwright test
View Report:

Bash
npx playwright show-report
CI/CD Integration
GitHub Actions
The project is integrated with GitHub Actions. Every push or pull_request to the main branch triggers the automated test suite inside a Docker container. You can view the latest runs in the Actions tab.

Jenkins
A Jenkinsfile is included to support Jenkins pipelines, ensuring the project is ready for enterprise-level automation servers.

Automation Design Highlights
Maintainability: Using POM ensures that UI changes only require updates in one place.

Stability: Running tests in Docker eliminates the "it works on my machine" problem.

Scalability: The architecture allows for easy addition of new pages, tests, and environments.

Author
Software Engineer & Automation Specialist
Focused on building robust, scalable, and optimized automation frameworks.
