# Capacitor Print WebView

Capacitor Plugin for a Print Preview of the WebView. Supports Capacitor 7.

## Install

```bash
npm install @webnativellc/capacitor-print-webview
npx cap sync
```

### Swift Package Manager (SPM)

This plugin also supports installation via Swift Package Manager for iOS projects. Add the following to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/damiant/capacitor-print-webview.git", from: "7.1.0")
]
```

## Usage

Calling `print()` will print the webview.

```typescript
import { PrintWebview } from '@webnativellc/capacitor-print-webview';
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
