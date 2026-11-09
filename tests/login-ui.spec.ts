import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test("should display username, password fields and login button", async ({ page }) => {
    await page.goto("/login");

    const usernameField = page.getByLabel(/username|email/i);
    const passwordField = page.getByLabel(/password/i);
    const loginButton = page.getByRole("button", { name: /login/i });

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();
  });

  test("should allow a user to log in with valid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel(/username|email/i).fill("testuser@example.com");
    await page.getByLabel(/password/i).fill("Password123");
    await page.getByRole("button", { name: /login/i }).click();

    // Expect navigation to a post‑login page (e.g., dashboard)
    await expect(page).toHaveURL(/dashboard|home|profile/i);
  });
});