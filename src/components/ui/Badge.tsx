import { type HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

const variantStyles: Record<string, { bg: string; text: string }> = {
  default: { bg: 'var(--color-bg-tertiary)', text: 'var(--color-text-secondary)' },
  success: { bg: 'color-mix(in srgb, var(--ctp-green) 20%, transparent)', text: 'var(--ctp-green)' },
  warning: { bg: 'color-mix(in srgb, var(--ctp-yellow) 20%, transparent)', text: 'var(--ctp-yellow)' },
  error: { bg: 'color-mix(in srgb, var(--ctp-red) 20%, transparent)', text: 'var(--ctp-red)' },
  info: { bg: 'color-mix(in srgb, var(--ctp-blue) 20%, transparent)', text: 'var(--ctp-blue)' },
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', size = 'md', children, style, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full';

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    };

    const colors = variantStyles[variant];

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${className}`}
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          ...style,
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
