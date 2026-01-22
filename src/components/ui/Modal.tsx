'use client';

import { useEffect, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@/components/icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        className={`relative w-full ${sizeClasses[size]} rounded-xl shadow-lg transform transition-all`}
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Header */}
        {title && (
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: 'var(--color-border-light)' }}
          >
            <h2
              id="modal-title"
              className="text-lg font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg transition-colors hover:bg-[var(--color-bg-tertiary)]"
              aria-label="Fermer"
            >
              <Icon name="close" size={20} color="muted" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );

  // Only render portal on client side
  if (typeof document === 'undefined') return null;

  return createPortal(modalContent, document.body);
}

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export function ModalFooter({ children, className = '' }: ModalFooterProps) {
  return (
    <div
      className={`flex items-center justify-end gap-3 px-6 py-4 border-t ${className}`}
      style={{ borderColor: 'var(--color-border-light)' }}
    >
      {children}
    </div>
  );
}
