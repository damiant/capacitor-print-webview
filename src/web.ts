import { WebPlugin } from '@capacitor/core';

import type { PrintWebviewPlugin } from './definitions';

export class CapacitorPrintWebviewWeb extends WebPlugin implements PrintWebviewPlugin {
  async print(): Promise<void> {
    try {
      document.execCommand('print', false);
    } catch (e) {
      window.print();
    }
    return;
  }
}
