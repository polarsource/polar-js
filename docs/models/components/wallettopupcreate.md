# WalletTopUpCreate

Request schema to top-up a wallet.

## Example Usage

```typescript
import { WalletTopUpCreate } from "@polar-sh/sdk/models/components/wallettopupcreate.js";

let value: WalletTopUpCreate = {
  amount: 2000,
  currency: "Lempira",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `amount`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | The amount to top-up the wallet by, in cents.                                            | 2000                                                                                     |
| `currency`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The currency. Currently, only `usd` is supported. It should match the wallet's currency. |                                                                                          |