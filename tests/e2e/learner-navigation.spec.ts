import { test, expect } from '@playwright/test';

test.describe('Learner Navigation Flow', () => {
  test('should display home page with domain cards', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page.locator('h1')).toContainText('Bienvenue');

    // Check for domain cards or empty state
    const domainCards = page.locator('[data-testid="domain-card"]');
    const emptyState = page.locator('text=Aucun domaine disponible');

    // Either cards exist or empty state is shown
    const cardsCount = await domainCards.count();
    if (cardsCount === 0) {
      await expect(emptyState).toBeVisible();
    } else {
      await expect(domainCards.first()).toBeVisible();
    }
  });

  test('should navigate through content hierarchy', async ({ page }) => {
    await page.goto('/');

    // Find and click first domain card (if exists)
    const domainCard = page.locator('[data-testid="domain-card"]').first();
    const hasDomains = (await domainCard.count()) > 0;

    if (!hasDomains) {
      // Skip test if no content
      test.skip();
      return;
    }

    // Navigate to domain
    await domainCard.click();
    await expect(page).toHaveURL(/\/domain\//);
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();

    // Find and click first pack (if exists)
    const packCard = page.locator('[data-testid="pack-card"]').first();
    if ((await packCard.count()) > 0) {
      await packCard.click();
      await expect(page).toHaveURL(/\/pack\//);

      // Find and click first discipline (if exists)
      const disciplineCard = page.locator('[data-testid="discipline-card"]').first();
      if ((await disciplineCard.count()) > 0) {
        await disciplineCard.click();
        await expect(page).toHaveURL(/\/discipline\//);

        // Check modules are displayed
        const moduleCard = page.locator('[data-testid="module-card"]').first();
        if ((await moduleCard.count()) > 0) {
          await expect(moduleCard).toBeVisible();
        }
      }
    }
  });

  test('should show breadcrumb navigation on all pages', async ({ page }) => {
    // Navigate to a nested page directly
    await page.goto('/');

    const domainCard = page.locator('[data-testid="domain-card"]').first();
    if ((await domainCard.count()) === 0) {
      test.skip();
      return;
    }

    await domainCard.click();
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();

    // Click breadcrumb to go back home
    const homeLink = page.locator('nav[aria-label="Breadcrumb"] a').first();
    if ((await homeLink.count()) > 0) {
      await homeLink.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Header should be visible
    await expect(page.locator('header')).toBeVisible();

    // Content should be scrollable
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});
