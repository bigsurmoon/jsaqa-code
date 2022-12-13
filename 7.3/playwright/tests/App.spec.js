import { test, expect } from "@playwright/test";
const { email, password } = require("./user.js");

test("Succsessful Authorization", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  debugger;
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  expect(page.locator("text=Мои курсы и профессии").isVisible);
});

test("Unsuccsessful Authorization", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("chtotoNevalidnoe@mail.ru");
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("kakoitoparol");
  await page.locator('[data-testid="login-submit-btn"]').click();
  expect(page.locator('[data-testid="login-error-hint"]').isVisible);
});
