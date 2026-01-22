'use client';

import { useState, useEffect, createContext, useContext, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon, type IconName } from '@/components/icons';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const typeStyles: Record<ToastType, { bg: string; icon: IconName; color: string }> = {
  success: {
    bg: 'color-mix(in srgb, var(--color-success) 15%, var(--color-bg-elevated))',
    icon: 'success',
    color: 'var(--color-success)',
  },
  error: {
    bg: 'color-mix(in srgb, var(--color-error) 15%, var(--color-bg-elevated))',
    icon: 'error',
    color: 'var(--color-error)',
  },
  warning: {
    bg: 'color-mix(in srgb, var(--color-warning) 15%, var(--color-bg-elevated))',
    icon: 'warning',
    color: 'var(--color-warning)',
  },
  info: {
    bg: 'color-mix(in srgb, var(--color-info) 15%, var(--color-bg-elevated))',
    icon: 'info',
    color: 'var(--color-info)',
  },
};

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: () => void;
}) {
  const style = typeStyles[toast.type];

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(onDismiss, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, onDismiss]);

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border animate-in slide-in-from-top-2"
      style={{
        backgroundColor: style.bg,
        borderColor: 'var(--color-border)',
      }}
      role="alert"
    >
      <Icon
        name={style.icon}
        size={20}
        color={toast.type}
        className="flex-shrink-0"
      />

      <p
        className="flex-1 text-sm"
        style={{ color: 'var(--color-text)' }}
      >
        {toast.message}
      </p>

      <button
        onClick={onDismiss}
        className="p-1 rounded hover:bg-[var(--color-bg-tertiary)] transition-colors"
        aria-label="Fermer"
      >
        <Icon name="close" size={16} color="muted" />
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = 'info', duration = 5000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
      {mounted &&
        createPortal(
          <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
            {toasts.map((toast) => (
              <ToastItem
                key={toast.id}
                toast={toast}
                onDismiss={() => dismissToast(toast.id)}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
