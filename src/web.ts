import { WebPlugin } from '@capacitor/core';

import type { CapacitorPrintWebviewPlugin } from './definitions';

export class CapacitorPrintWebviewWeb
  extends WebPlugin
  implements CapacitorPrintWebviewPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
