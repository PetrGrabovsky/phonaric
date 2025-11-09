/* eslint-disable react/jsx-no-literals */
import { clsx } from 'clsx';

import { Container } from '../ui';

export const SiteHeader = () => (
  <header
    className={clsx(
      'bg-noise shadow-subtle fixed inset-x-0 top-0 flex h-14 items-center border-b',
      'justify-center border-gray-200 bg-white',
    )}
  >
    <Container className="justify-between">
      <div>Phonaric</div>
      <div>Menu</div>
    </Container>
  </header>
);
