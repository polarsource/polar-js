# CurrencyAmount

## Example Usage

```typescript
import { CurrencyAmount } from "@polar-sh/sdk/models/components";

let value: CurrencyAmount = {
  currency: "Boliviano boliviano",
  amount: 835232,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `currency`                                                        | *string*                                                          | :heavy_check_mark:                                                | Three letter currency code (eg: USD)                              |
| `amount`                                                          | *number*                                                          | :heavy_check_mark:                                                | Amount in the currencies smallest unit (cents if currency is USD) |