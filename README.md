# Playwright Testing Demo Project

This repository contains a demonstration project developed using **Playwright**, a modern end-to-end testing framework used for automating web application testing across multiple browsers.

The purpose of this project is to demonstrate key capabilities of Playwright as part of the **Software Engineering Process & Quality Management** module.

The demo showcases how automated testing contributes to **Quality Engineering practices** by validating application behavior, maintaining test environments, simulating backend responses, and generating test reports.

---

## Project Overview

This project demonstrates the following core Playwright testing features:

1. **Assertions**
2. **Fixtures (Setup / Reusable Test Environment)**
3. **Network Mocking / Stubbing**
4. **HTML Test Reporting**

These features help improve software quality by enabling reliable, automated testing throughout the software development lifecycle.

---

## Technology Stack

- **Node.js** – JavaScript runtime environment
- **Playwright** – End-to-end testing framework
- **JavaScript** – Programming language used for writing test scripts

---

## Project Structure

playwright-demo/
│
├── tests/
│ ├── 1-assertions.spec.js
│ ├── 2-fixtures.spec.js
│ ├── 3-mocking.spec.js
│ └── 4-reporting.spec.js
│
├── playwright.config.js
├── package.json
└── README.md

### Description

| File                   | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `1-assertions.spec.js` | Demonstrates Playwright assertions used to validate application behavior |
| `2-fixtures.spec.js`   | Demonstrates fixtures and reusable test setup using `beforeEach`         |
| `3-mocking.spec.js`    | Demonstrates network request interception and API mocking                |
| `4-reporting.spec.js`  | Demonstrates Playwright test execution and reporting capabilities        |

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd playwright-demo
2. Install dependencies
npm install
3. Install Playwright browsers
npx playwright install
Running Tests

To execute all test cases:

npx playwright test

Playwright will automatically run tests across supported browsers and display the results in the terminal.

Viewing Test Reports

Playwright automatically generates an HTML test report after execution.

To open the report:

npx playwright show-report

The report includes:

Test execution results

Pass/fail status

Execution time

Error logs

Screenshots (for failed tests)

Demonstrated Playwright Features
Assertions

Assertions are used to verify that the application behaves as expected.

Example:

await expect(page).toHaveTitle(/Todo/);
Fixtures

Fixtures allow reusable test setup before executing test cases.

Example:

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});
Network Mocking

Playwright can intercept and mock API responses, allowing frontend testing without relying on backend services.

Example:

await page.route('**/api/tasks', route =>
  route.fulfill({
    status: 200,
    body: JSON.stringify([{ title: "Mock Task" }])
  })
);
HTML Reporting

Playwright generates built-in HTML reports that help developers analyze test results and identify failures quickly.

Demo Application

Tests in this project use the following public demo application:

https://demo.playwright.dev/todomvc

This application provides a stable environment for demonstrating UI automation testing.

Educational Purpose

This project was developed as part of the SE3010 – Software Engineering Process & Quality Management coursework to demonstrate how automated testing tools like Playwright contribute to:

Continuous quality validation

Reliable automated testing

Integration with CI/CD pipelines

Early defect detection

This project is developed for academic purposes as part of coursework at Sri Lanka Institute of Information Technology (SLIIT).
```
