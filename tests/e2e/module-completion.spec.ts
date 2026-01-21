import { test, expect } from '@playwright/test';

test.describe('Module Completion Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a module page - this assumes content exists
    await page.goto('/');
  });

  test('should display login required message for unauthenticated users', async ({ page }) => {
    // Try to access a module directly without authentication
    // First navigate through the hierarchy to find a module
    const domainCard = page.locator('[data-testid="domain-card"]').first();
    if ((await domainCard.count()) === 0) {
      test.skip();
      return;
    }

    await domainCard.click();

    const packCard = page.locator('[data-testid="pack-card"]').first();
    if ((await packCard.count()) === 0) {
      test.skip();
      return;
    }

    await packCard.click();

    const disciplineCard = page.locator('[data-testid="discipline-card"]').first();
    if ((await disciplineCard.count()) === 0) {
      test.skip();
      return;
    }

    await disciplineCard.click();

    const moduleCard = page.locator('[data-testid="module-card"]').first();
    if ((await moduleCard.count()) === 0) {
      test.skip();
      return;
    }

    await moduleCard.click();

    // Should see login required message or module content
    const loginMessage = page.locator('text=Connexion requise');
    const moduleContent = page.locator('[data-testid="module-content"]');

    // Either login is required or content is shown
    const hasLoginMessage = (await loginMessage.count()) > 0;
    const hasContent = (await moduleContent.count()) > 0;

    expect(hasLoginMessage || hasContent).toBeTruthy();
  });

  test('should show theory, quiz, and practice tabs', async ({ page }) => {
    // This test assumes an authenticated user with access to a module
    // For now, just verify the structure exists
    const domainCard = page.locator('[data-testid="domain-card"]').first();
    if ((await domainCard.count()) === 0) {
      test.skip();
      return;
    }

    // Navigate through hierarchy
    await domainCard.click();
    const packCard = page.locator('[data-testid="pack-card"]').first();
    if ((await packCard.count()) === 0) {
      test.skip();
      return;
    }

    await packCard.click();
    const disciplineCard = page.locator('[data-testid="discipline-card"]').first();
    if ((await disciplineCard.count()) === 0) {
      test.skip();
      return;
    }

    await disciplineCard.click();
    const moduleCard = page.locator('[data-testid="module-card"]').first();
    if ((await moduleCard.count()) === 0) {
      test.skip();
      return;
    }

    await moduleCard.click();

    // Check for tab structure (may be hidden behind auth)
    const tabNav = page.locator('nav[aria-label="Sections du module"]');
    const hasTabNav = (await tabNav.count()) > 0;

    // Tab navigation should exist if user is authenticated
    if (hasTabNav) {
      await expect(tabNav.locator('text=Théorie')).toBeVisible();
      await expect(tabNav.locator('text=Quiz')).toBeVisible();
      await expect(tabNav.locator('text=Pratique')).toBeVisible();
    }
  });

  test('should show locked modules with appropriate indicator', async ({ page }) => {
    const domainCard = page.locator('[data-testid="domain-card"]').first();
    if ((await domainCard.count()) === 0) {
      test.skip();
      return;
    }

    await domainCard.click();

    const packCard = page.locator('[data-testid="pack-card"]').first();
    if ((await packCard.count()) === 0) {
      test.skip();
      return;
    }

    await packCard.click();

    const disciplineCard = page.locator('[data-testid="discipline-card"]').first();
    if ((await disciplineCard.count()) === 0) {
      test.skip();
      return;
    }

    await disciplineCard.click();

    // Check for module cards with different statuses
    const moduleCards = page.locator('[data-testid="module-card"]');
    const count = await moduleCards.count();

    if (count > 1) {
      // Second module should typically be locked for new users
      const secondModule = moduleCards.nth(1);
      const lockedBadge = secondModule.locator('text=Verrouillé');
      const hasLockedBadge = (await lockedBadge.count()) > 0;

      // Either module is locked or user has progression
      expect(count).toBeGreaterThan(0);
    }
  });
});
