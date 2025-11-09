import type { ReactNode } from 'react';

import { clsx } from 'clsx';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => (
  <div
    className={clsx(
      'mx-auto flex w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9',
      className,
    )}
  >
    {children}
  </div>
);
