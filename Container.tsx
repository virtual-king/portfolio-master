import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  /** Additional Tailwind classes */
  className?: string;
  /** Reduce horizontal padding for tighter sections */
  tight?: boolean;
}

/**
 * Max-width wrapper that centres page content.
 * Use this instead of repeating max-w-7xl mx-auto px-4 everywhere.
 */
export default function Container({ children, className = '', tight = false }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full
        ${tight ? 'max-w-4xl' : 'max-w-7xl'}
        px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}
