# Dream Diary Automation Testing Framework

## Overview

This repository contains a Playwright-based automation framework for testing a Dreams Diary web application. It includes:

- **UI functional tests** validating the Dreams Diary pages
- **AI-powered dream classification tests** using Gemini API to verify dream types
- Clean architecture with **Page Object Model (POM)**
- Structured reporting and logs with Playwright HTML reports
- Usage of AI APIs for enhanced validation

---

## Technologies & Tools Used

- **Playwright (JavaScript)** for browser automation
- **Page Object Model (POM)** design pattern for maintainability
- **AI Integration**: Gemini API to classify dream types via AI
- **Assertions** with Playwright `expect`
- **Reporting**: Playwright HTML report
- **GitHub** for version control

---

## Folder Structure
```
assignment/
├── node_modules/
├── pages/
│ ├── DreamsDiaryPage.js
│ ├── DreamsTotalPage.js
│ └── IndexPage.js
├── playwright-report/
│ └── index.html
├── test-results/
│ └── .last-run.json
├── tests/
│ ├── ai_validation.spec.js
│ ├── dreamsDiary.spec.js
│ ├── dreamsTotal.spec.js
│ └── index.spec.js
├── utils/
│ └── classificationWithAI.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md
```

## How to Run Tests

```bash
# Install Dependencies
npm install

# Run All Tests
npx playwright test

# View HTML Report
npx playwright show-report
```

## Bonus Implementations

- Included screenshots on test failures (configured in Playwright).
- Clear, structured logs with console outputs.
- AI logic integration for dream type classification.
- Well-organized and documented codebase for easy maintenance.
