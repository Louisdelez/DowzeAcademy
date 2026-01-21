'use client';

import { useState, useCallback } from 'react';
import { useNetworkStatus } from './useNetworkStatus';

interface UseAdminMutationOptions<TData, TVariables> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

interface UseAdminMutationResult<TData, TVariables> {
  mutate: (variables: TVariables) => Promise<TData | null>;
  isLoading: boolean;
  error: string | null;
  isOffline: boolean;
}

export function useAdminMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
}: UseAdminMutationOptions<TData, TVariables>): UseAdminMutationResult<TData, TVariables> {
  const { isOnline } = useNetworkStatus();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (variables: TVariables): Promise<TData | null> => {
      setError(null);

      if (!isOnline) {
        const offlineError = 'Vous devez être connecté à Internet pour effectuer cette action.';
        setError(offlineError);
        onError?.(new Error(offlineError));
        return null;
      }

      setIsLoading(true);

      try {
        const data = await mutationFn(variables);
        onSuccess?.(data);
        return data;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
        setError(errorMessage);
        onError?.(err instanceof Error ? err : new Error(errorMessage));
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [isOnline, mutationFn, onSuccess, onError]
  );

  return {
    mutate,
    isLoading,
    error,
    isOffline: !isOnline,
  };
}
