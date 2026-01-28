'use client';

import { useAdminModeContext } from '@/lib/contexts/AdminModeContext';

/**
 * Hook to access admin game mode state and controls
 *
 * @returns {Object} Admin mode state and toggle function
 * - isAdmin: Whether the current user is an authenticated admin
 * - isGameModeEnabled: Whether game mode is currently active
 * - isLoading: Whether the initial admin check is still loading
 * - toggleGameMode: Function to toggle game mode on/off
 */
export function useAdminMode() {
  return useAdminModeContext();
}
