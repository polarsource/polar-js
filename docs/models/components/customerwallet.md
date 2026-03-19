# CustomerWallet

A wallet represents your balance with an organization.

You can top-up your wallet and use the balance to pay for usage.

## Example Usage

```typescript
import { CustomerWallet } from "@polar-sh/sdk/models/components/customerwallet.js";

let value: CustomerWallet = {
  id: "<value>",
  createdAt: new Date("2024-01-02T12:42:41.813Z"),
  modifiedAt: new Date("2025-07-20T12:00:05.019Z"),
  customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  balance: 5000,
  currency: "usd",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer that owns the wallet.                                                  | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                          |
| `balance`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The current balance of the wallet, in cents.                                                  | 5000                                                                                          |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency of the wallet.                                                                   | usd                                                                                           |