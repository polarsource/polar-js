# ProductPriceRecurringFixedCreate

Schema to create a recurring product price, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFixedCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringFixedCreate = {
  priceAmount: 375101,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.ProductPriceRecurringFixedCreateType](../../models/components/productpricerecurringfixedcreatetype.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `amountType`                                                                                                                   | [components.ProductPriceRecurringFixedCreateAmountType](../../models/components/productpricerecurringfixedcreateamounttype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `priceAmount`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The price in cents.                                                                                                            |
| `priceCurrency`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The currency. Currently, only `usd` is supported.                                                                              |
| `recurringInterval`                                                                                                            | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |