# capacitor-print-webview

Capacitor Plugin for a Print Preview of the WebView. Supports Capacitor 7.

## Install

```bash
npm install capacitor-print-webview
npx cap sync
```

## Usage

Calling `print()` will print the webview.

```typescript
import { PrintWebview } from 'capacitor-print-webview';
...
await PrintWebview.print();
```

## API

<docgen-index>

* [`print()`](#print)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### print()

```typescript
print() => Promise<void>
```

--------------------

</docgen-api>
