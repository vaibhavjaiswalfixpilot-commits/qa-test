import { test, expect } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
  await page.goto("/login");

  await page.getByLabel(/email|username/i).fill("valid.user@example.com");
  await page.getByLabel(/password/i).fill("ValidPassword123");

  await page.getByRole("button", { name: /log in|sign in/i }).click();

  await expect(page).toHaveURL(/dashboard|home/i);
});