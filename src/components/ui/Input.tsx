'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, id, style, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium mb-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            block w-full rounded-lg border px-4 py-2.5
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:cursor-not-allowed disabled:opacity-50
            min-h-[44px]
            ${className}
          `}
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            borderColor: error ? 'var(--ctp-red)' : 'var(--color-border)',
            color: 'var(--color-text)',
            ...style,
          }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-sm"
            style={{ color: 'var(--ctp-red)' }}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-1 text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
