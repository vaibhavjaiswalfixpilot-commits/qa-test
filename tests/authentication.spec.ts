import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email/i).fill("testuser@example.com");
  await page.getByLabel(/password/i).fill("Password123");

  await page.getByRole("button", { name: /login/i }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test("invalid credentials show error message", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email/i).fill("invalid@example.com");
  await page.getByLabel(/password/i).fill("WrongPassword");

  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});