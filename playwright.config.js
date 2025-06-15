// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Disable running tests in parallel within files to avoid API rate limits
  fullyParallel: false,

  // Fail the build on CI if test.only is left in the code
  forbidOnly: !!process.env.CI,

  // Retry failed tests only on CI
  retries: process.env.CI ? 2 : 0,

  // Limit to 1 worker to run tests sequentially to avoid hitting API rate limits
  workers: 1,

  // Set a global timeout of 5 minutes per test
  timeout: 300_000,

  // Reporter configuration
  reporter: 'html',

  // Shared settings for all projects
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Define projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
