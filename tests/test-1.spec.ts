import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8888/');
  await page.locator('input[name="user_name"]').click();
  await page.locator('input[name="user_name"]').fill('admin');
  await page.locator('input[name="user_password"]').click();
  await page.locator('input[name="user_password"]').fill('3151');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Organizations' }).first().click();
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.getByRole('link', { name: 'Create Contact...' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('img', { name: 'Select' }).first().click();
  const page1 = await page1Promise;
  await page1.locator('#search_txt').click();
  await page1.locator('#search_txt').fill('rahul');
  await page1.getByRole('combobox').selectOption('phone');
  await page1.getByRole('button', { name: 'Search Now' }).click();
});