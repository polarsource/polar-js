# ProductPriceRecurringFreeCreate

Schema to create a free recurring product price, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFreeCreate } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringFreeCreate = {
  recurringInterval: "year",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.ProductPriceRecurringFreeCreateType](../../models/components/productpricerecurringfreecreatetype.md)             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `amountType`                                                                                                                 | [components.ProductPriceRecurringFreeCreateAmountType](../../models/components/productpricerecurringfreecreateamounttype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recurringInterval`                                                                                                          | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                         | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |