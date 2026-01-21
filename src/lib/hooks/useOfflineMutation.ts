'use client';

import { useState, useCallback } from 'react';
import { useNetworkStatus } from './useNetworkStatus';

interface UseOfflineMutationOptions<TData, TVariables> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
  offlineMessage?: string;
}

interface UseOfflineMutationResult<TData, TVariables> {
  mutate: (variables: TVariables) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
  isOffline: boolean;
  offlineBlocked: boolean;
}

export function useOfflineMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
  offlineMessage = 'Cette action nécessite une connexion internet.',
}: UseOfflineMutationOptions<TData, TVariables>): UseOfflineMutationResult<TData, TVariables> {
  const { isOnline } = useNetworkStatus();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [offlineBlocked, setOfflineBlocked] = useState(false);

  const mutate = useCallback(
    async (variables: TVariables) => {
      setError(null);
      setOfflineBlocked(false);

      if (!isOnline) {
        setOfflineBlocked(true);
        const offlineError = new Error(offlineMessage);
        setError(offlineError);
        onError?.(offlineError);
        return;
      }

      setIsLoading(true);

      try {
        const data = await mutationFn(variables);
        onSuccess?.(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Une erreur est survenue');
        setError(error);
        onError?.(error);
      } finally {
        setIsLoading(false);
      }
    },
    [isOnline, mutationFn, onSuccess, onError, offlineMessage]
  );

  return {
    mutate,
    isLoading,
    error,
    isOffline: !isOnline,
    offlineBlocked,
  };
}
