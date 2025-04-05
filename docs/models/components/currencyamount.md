# CurrencyAmount

## Example Usage

```typescript
import { CurrencyAmount } from "@polar-sh/sdk/models/components/currencyamount.js";

let value: CurrencyAmount = {
  currency: "Nepalese Rupee",
  amount: 403627,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `currency`                                                        | *string*                                                          | :heavy_check_mark:                                                | Three letter currency code (eg: USD)                              |
| `amount`                                                          | *number*                                                          | :heavy_check_mark:                                                | Amount in the currencies smallest unit (cents if currency is USD) |