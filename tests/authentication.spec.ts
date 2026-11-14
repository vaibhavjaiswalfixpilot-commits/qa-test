import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email/i).fill("valid.user@example.com");
  await page.getByLabel(/password/i).fill("ValidPass123");

  await page.getByRole("button", { name: /login/i }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test("login shows error message for invalid credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email/i).fill("invalid.user@example.com");
  await page.getByLabel(/password/i).fill("WrongPass");

  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.getByText(/invalid username or password/i)).toBeVisible();
});