# Funding

## Example Usage

```typescript
import { Funding } from "@polar-sh/sdk/models/components";

let value: Funding = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `fundingGoal`                                                                                                       | [components.CurrencyAmount](../../models/components/currencyamount.md)                                              | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `pledgesSum`                                                                                                        | [components.CurrencyAmount](../../models/components/currencyamount.md)                                              | :heavy_minus_sign:                                                                                                  | Sum of pledges to this isuse (including currently open pledges and pledges that have been paid out). Always in USD. |