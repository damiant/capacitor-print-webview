import { WebPlugin } from '@capacitor/core';

import type { CapacitorPrintWebviewPlugin } from './definitions';

export class CapacitorPrintWebviewWeb
  extends WebPlugin
  implements CapacitorPrintWebviewPlugin
{
  async print(): Promise<void> {
    console.log('PRINT');
    try {
      document.execCommand('print', false);
    } catch (e) {
      window.print();
    }
    return;
  }
}
