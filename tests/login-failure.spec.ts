import { test, expect } from "@playwright/test";

test("login is rejected with invalid credentials", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel(/email/i).fill("invalid_user@example.com");
  await page.getByLabel(/password/i).fill("WrongPassword");
  await page.getByRole("button", { name: /log in|sign in|login/i }).click();
  await expect(page.getByText(/invalid credentials|incorrect email or password/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /logout/i })).toBeHidden();
});