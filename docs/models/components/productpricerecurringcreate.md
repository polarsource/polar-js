# ProductPriceRecurringCreate

Schema to create a recurring product price, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringCreate = {
  priceAmount: 680349,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.ProductPriceRecurringCreateType](../../models/components/productpricerecurringcreatetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `priceCurrency`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The currency. Currently, only `usd` is supported.                                                        |
| `priceAmount`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The price in cents.                                                                                      |
| `recurringInterval`                                                                                      | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)     | :heavy_check_mark:                                                                                       | The recurring interval of the price.                                                                     |