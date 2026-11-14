import { test, expect } from "@playwright/test";

test("login fails with incorrect username or password", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel(/email|username/i).fill("invalid@example.com");
  await page.getByLabel(/password/i).fill("WrongPassword");
  await page.getByRole("button", { name: /log in|sign in|login/i }).click();
  await expect(page.getByText(/invalid credentials|incorrect username|incorrect password/i)).toBeVisible();
});