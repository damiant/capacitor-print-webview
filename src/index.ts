import { registerPlugin } from '@capacitor/core';

import type { CapacitorPrintWebviewPlugin } from './definitions';

const CapacitorPrintWebview = registerPlugin<CapacitorPrintWebviewPlugin>(
  'CapacitorPrintWebview',
  {
    web: () => import('./web').then(m => new m.CapacitorPrintWebviewWeb()),
  },
);

export * from './definitions';
export { CapacitorPrintWebview };
