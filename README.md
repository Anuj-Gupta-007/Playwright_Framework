# Playwright Automation Framework

This is a **Playwright Automation Framework** for testing the Amazon website using **JavaScript**. It follows the **Page Object Model (POM)** and **Data-Driven Testing** to ensure maintainability and scalability.

## Features
- **Playwright for automation**
- **Page Object Model (POM) structure**
- **Data-Driven Testing using JSON**
- **Headless and headed execution support**
- **Retries and timeout configuration**
- **Handling multiple browser contexts and tabs**

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Anuj-Gupta-007/Playwright_Framework.git
cd Playwright_Framework
npm install
```

## Project Structure

```
playwright-automation/
│-- pages/
│   │-- AmazonHomePage.js
│   │-- AmazonProductPage.js
│-- tests/
│   │-- amazonTest.js
│-- data/
│   │-- testData.json
│-- utils/
│   │-- utils.js
│-- config/
│   │-- playwright.config.js
│-- package.json
│-- README.md
```

### 1. **Configuration** (playwright.config.js)

The configuration file sets up Playwright:
```javascript
module.exports = {
  testDir: 'tests',
  timeout: 30000,
  retries: 2,
  use: {
    headless: true,
    browserName: 'chromium',
    baseURL: 'https://www.amazon.com',
  },
};
```

### 2. **Running Tests**

Run Playwright tests using:
```bash
npx playwright test
```
Run tests in headed mode:
```bash
npx playwright test --headed
```

## 3. License
[MIT License](https://choosealicense.com/licenses/mit/)

---
This framework provides a scalable and maintainable approach to Playwright automation for web applications. 🚀
