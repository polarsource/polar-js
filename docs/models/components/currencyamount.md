# CurrencyAmount

## Example Usage

```typescript
import { CurrencyAmount } from "@polar-sh/sdk/models/components/currencyamount.js";

let value: CurrencyAmount = {
  currency: "Hong Kong Dollar",
  amount: 234740,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `currency`                                                        | *string*                                                          | :heavy_check_mark:                                                | Three letter currency code (eg: USD)                              |
| `amount`                                                          | *number*                                                          | :heavy_check_mark:                                                | Amount in the currencies smallest unit (cents if currency is USD) |