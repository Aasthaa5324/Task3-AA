"use strict";
import { test, expect } from '@playwright/test';

test('Click Open Document Automation from Home', async ({ page }) => {
  await page.goto('https://community.cloud.automationanywhere.digital/#/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('asthaaaadwi@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Dwivedi5324@');

  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(
    page.getByRole('button', { name: /open document automation/i })
  ).toBeVisible({ timeout: 20000 });

  await page.getByRole('button', { name: /open document automation/i }).click();

  await expect(
    page.getByRole("button", { name: /Create Learning Instance/i })
  ).toBeVisible({ timeout: 20000 });

  await page.getByRole("button", { name: /Create Learning Instance/i }).click();

  await expect(
    page.getByRole("textbox", { name: /Name/i })
  ).toBeVisible({ timeout: 20000 });

  await page.getByRole("textbox", { name: /Name/i }).fill("abc");

  await expect(
    page.getByRole("button", { name: /Next/i })
  ).toBeVisible({ timeout: 20000 });

  await page.getByRole("button", { name: /Next/i }).click();

  await expect(
    page.getByRole("button", { name: /^Create$/i })
  ).toBeVisible({ timeout: 20000 });

  await page.getByRole("button", { name: /^Create$/i }).click();

  await page.waitForTimeout(3000);
});
