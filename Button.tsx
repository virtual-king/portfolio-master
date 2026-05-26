'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Render as a full-width block */
  fullWidth?: boolean;
  /** Show a loading spinner */
  loading?: boolean;
}

/**
 * Reusable button with 4 variants (primary, secondary, outline, ghost)
 * and 3 sizes (sm, md, lg). Fully accessible with focus rings.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant   = 'primary',
      size      = 'md',
      fullWidth = false,
      loading   = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const base = [
      'inline-flex items-center justify-center gap-2',
      'font-semibold rounded-lg transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'select-none',
    ].join(' ');

    const variants: Record<string, string> = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ' +
        'focus-visible:ring-blue-500 shadow-sm hover:shadow-md',
      secondary:
        'bg-[#0a1628] text-white hover:bg-[#0d1f3c] active:bg-[#0a1628] ' +
        'focus-visible:ring-gray-600 shadow-sm',
      outline:
        'border-2 border-blue-600 text-blue-600 bg-transparent ' +
        'hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 ' +
        'focus-visible:ring-blue-500 dark:text-blue-400 dark:border-blue-400',
      ghost:
        'bg-transparent text-gray-700 dark:text-gray-300 ' +
        'hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 ' +
        'focus-visible:ring-gray-400',
    };

    const sizes: Record<string, string> = {
      sm: 'px-3 py-1.5 text-sm min-h-[36px]',
      md: 'px-5 py-2.5 text-sm min-h-[44px]',
      lg: 'px-7 py-3 text-base min-h-[52px]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={[
          base,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
