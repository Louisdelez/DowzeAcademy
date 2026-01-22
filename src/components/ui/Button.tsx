'use client';

import { forwardRef, type ButtonHTMLAttributes, type CSSProperties } from 'react';
import { Icon } from '@/components/icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, disabled, children, style, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm min-h-[36px]',
      md: 'px-4 py-2 text-base min-h-[44px]',
      lg: 'px-6 py-3 text-lg min-h-[52px]',
    };

    // Use CSS variables for theme-aware colors
    const getVariantStyles = (): CSSProperties => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--ctp-base)',
          };
        case 'secondary':
          return {
            backgroundColor: 'var(--color-bg-tertiary)',
            color: 'var(--color-text)',
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderWidth: '2px',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-secondary)',
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-text-secondary)',
          };
        case 'danger':
          return {
            backgroundColor: 'var(--color-error)',
            color: 'var(--ctp-base)',
          };
        default:
          return {};
      }
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${className}`}
        disabled={disabled || isLoading}
        style={{ ...getVariantStyles(), ...style }}
        {...props}
      >
        {isLoading ? (
          <>
            <Icon name="refresh" size={16} color="current" className="animate-spin -ml-1 mr-2" />
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
