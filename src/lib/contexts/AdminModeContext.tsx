'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

interface AdminModeState {
  isAdmin: boolean;
  isGameModeEnabled: boolean;
  isLoading: boolean;
}

interface AdminModeContextValue extends AdminModeState {
  toggleGameMode: () => Promise<void>;
}

const AdminModeContext = createContext<AdminModeContextValue | null>(null);

interface AdminModeProviderProps {
  children: ReactNode;
}

export function AdminModeProvider({ children }: AdminModeProviderProps) {
  const [state, setState] = useState<AdminModeState>({
    isAdmin: false,
    isGameModeEnabled: false,
    isLoading: true,
  });

  // Fetch initial admin status on mount
  useEffect(() => {
    async function checkAdminStatus() {
      try {
        const response = await fetch('/api/admin/auth/game-mode');
        if (response.ok) {
          const data = await response.json();
          setState({
            isAdmin: data.isAdmin,
            isGameModeEnabled: data.isGameModeEnabled,
            isLoading: false,
          });
        } else {
          setState({
            isAdmin: false,
            isGameModeEnabled: false,
            isLoading: false,
          });
        }
      } catch {
        setState({
          isAdmin: false,
          isGameModeEnabled: false,
          isLoading: false,
        });
      }
    }

    checkAdminStatus();
  }, []);

  const toggleGameMode = useCallback(async () => {
    if (!state.isAdmin) return;

    try {
      const response = await fetch('/api/admin/auth/game-mode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: !state.isGameModeEnabled }),
      });

      if (response.ok) {
        const data = await response.json();
        setState((prev) => ({
          ...prev,
          isGameModeEnabled: data.isGameModeEnabled,
        }));
      }
    } catch (error) {
      console.error('Failed to toggle game mode:', error);
    }
  }, [state.isAdmin, state.isGameModeEnabled]);

  return (
    <AdminModeContext.Provider
      value={{
        ...state,
        toggleGameMode,
      }}
    >
      {children}
    </AdminModeContext.Provider>
  );
}

export function useAdminModeContext(): AdminModeContextValue {
  const context = useContext(AdminModeContext);
  if (!context) {
    throw new Error('useAdminModeContext must be used within AdminModeProvider');
  }
  return context;
}
