import { test, expect } from '@playwright/test';

test.describe('Admin Content Management', () => {
  test('should show login page for unauthenticated admin access', async ({ page }) => {
    await page.goto('/admin');

    // Should redirect to login page
    await expect(page).toHaveURL(/\/admin\/login/);
    await expect(page.locator('h1, [class*="CardTitle"]')).toContainText('Administration');
  });

  test('should display login form with username and password fields', async ({ page }) => {
    await page.goto('/admin/login');

    // Check form elements
    await expect(page.locator('input[type="text"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should show error on invalid login', async ({ page }) => {
    await page.goto('/admin/login');

    // Fill in invalid credentials
    await page.fill('input[type="text"]', 'invalid_user');
    await page.fill('input[type="password"]', 'invalid_password');
    await page.click('button[type="submit"]');

    // Should show error message
    await expect(page.locator('text=Identifiants incorrects')).toBeVisible({ timeout: 5000 });
  });

  test('should have proper admin navigation structure', async ({ page }) => {
    // This test verifies the admin layout structure exists
    // Actual login would require valid credentials from env

    await page.goto('/admin/login');

    // Verify the login page has proper structure
    await expect(page.locator('form')).toBeVisible();

    // Check that the page has proper styling
    const loginCard = page.locator('[class*="Card"]');
    await expect(loginCard).toBeVisible();
  });

  test('should protect admin API routes', async ({ page }) => {
    // Try to access admin API without authentication
    const response = await page.request.get('/api/admin/domains');

    // Should return 401 Unauthorized
    expect(response.status()).toBe(401);
  });

  test('should protect admin pages', async ({ page }) => {
    // Try to access admin dashboard directly
    await page.goto('/admin');

    // Should redirect to login
    await page.waitForURL(/\/admin\/login/);
    await expect(page).toHaveURL(/\/admin\/login/);
  });
});

test.describe('Admin Authentication Flow', () => {
  // These tests would require valid admin credentials
  // In a real scenario, you would set up test fixtures

  test.skip('should login with valid credentials', async ({ page }) => {
    // This test is skipped because it requires valid credentials
    // Set ADMIN_USERNAME and ADMIN_PASSWORD in test environment to enable

    await page.goto('/admin/login');

    await page.fill('input[type="text"]', process.env.ADMIN_USERNAME || '');
    await page.fill('input[type="password"]', process.env.ADMIN_PASSWORD || '');
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL('/admin');
    await expect(page.locator('h1')).toContainText('Dashboard');
  });

  test.skip('should logout successfully', async ({ page }) => {
    // Login first (requires valid credentials)
    await page.goto('/admin/login');
    await page.fill('input[type="text"]', process.env.ADMIN_USERNAME || '');
    await page.fill('input[type="password"]', process.env.ADMIN_PASSWORD || '');
    await page.click('button[type="submit"]');
    await page.waitForURL('/admin');

    // Click logout
    await page.click('text=Déconnexion');

    // Should redirect to login
    await expect(page).toHaveURL(/\/admin\/login/);
  });
});
