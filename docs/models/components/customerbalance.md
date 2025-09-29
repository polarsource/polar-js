# CustomerBalance

Customer balance information.

## Example Usage

```typescript
import { CustomerBalance } from "@polar-sh/sdk/models/components/customerbalance.js";

let value: CustomerBalance = {
  balance: 465186,
  currency: "USD",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `balance`                                                                                                                                    | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Customer balance in cents. Positive values represent credit (customer is owed money), negative values represent debit (customer owes money). |                                                                                                                                              |
| `currency`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The currency code (ISO 4217) for the balance amount.                                                                                         | USD                                                                                                                                          |