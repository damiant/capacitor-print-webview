export interface CapacitorPrintWebviewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
