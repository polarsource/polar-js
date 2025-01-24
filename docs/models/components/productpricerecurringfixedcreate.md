# ProductPriceRecurringFixedCreate

Schema to create a recurring product price, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFixedCreate } from "@polar-sh/sdk/models/components/productpricerecurringfixedcreate.js";

let value: ProductPriceRecurringFixedCreate = {
  priceAmount: 750407,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `amountType`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceAmount`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The price in cents.                                                                                  |
| `priceCurrency`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The currency. Currently, only `usd` is supported.                                                    |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |