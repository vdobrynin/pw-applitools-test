// import { test, expect } from '@playwright/test';             // #75.1 at first test
import { test } from '@applitools/eyes-playwright/fixture';     //#75.1 later

test('Applitools VisualTesting', async ({ page, eyes }) => {      //#75.1 later
// test('Applitools VisualTesting', async ({ page }) => {            // #75.1 at first test
  await page.goto('/');

  await eyes.check('Home Page')

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

  await eyes.check('Form Layouts Page')
});
