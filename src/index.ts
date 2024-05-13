import { registerPlugin } from '@capacitor/core';

import type { PrintWebviewPlugin } from './definitions';

const PrintWebview = registerPlugin<PrintWebviewPlugin>('PrintWebview', {
  web: () => import('./web').then(m => new m.CapacitorPrintWebviewWeb()),
});

export * from './definitions';
export { PrintWebview };
