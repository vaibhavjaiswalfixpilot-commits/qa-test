import { test, expect } from "@playwright/test";

test("login page loads successfully", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveURL(/\/login/);
  await expect(page.getByRole("heading", { name: /login/i })).toBeVisible();
});

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel(/email|username/i).fill("testuser@example.com");
  await page.getByLabel(/password/i).fill("Password123");
  await page.getByRole("button", { name: /log in|sign in/i }).click();
  await expect(page).toHaveURL(/\/dashboard/);
});