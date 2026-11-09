import { test, expect } from "@playwright/test";

test("login is rejected with invalid credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email|username/i).fill("invalid.user@example.com");
  await page.getByLabel(/password/i).fill("WrongPassword!");

  await page.getByRole("button", { name: /log in|sign in/i }).click();

  await expect(page).toHaveURL(/login/i);
  await expect(page.getByText(/invalid credentials|incorrect/i)).toBeVisible();
});