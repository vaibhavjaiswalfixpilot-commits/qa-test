import { test, expect } from "@playwright/test";

test("login fails with invalid credentials and shows error message", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email/i).fill("invalid.user@example.com");
  await page.getByLabel(/password/i).fill("WrongPassword!");

  await page.getByRole("button", { name: /log in|sign in|login/i }).click();

  const errorMessage = page.getByText(/invalid|error|incorrect/i);
  await expect(errorMessage).toBeVisible();
});