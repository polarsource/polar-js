# ProductPriceRecurringFree

A free recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFree } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringFree = {
  createdAt: new Date("2023-11-20T15:27:37.231Z"),
  modifiedAt: new Date("2023-03-31T08:14:03.192Z"),
  id: "<value>",
  isArchived: false,
  recurringInterval: "year",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the price.                                                                                             |
| `amountType`                                                                                                     | [components.ProductPriceRecurringFreeAmountType](../../models/components/productpricerecurringfreeamounttype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isArchived`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the price is archived and no longer available.                                                           |
| `type`                                                                                                           | [components.ProductPriceRecurringFreeType](../../models/components/productpricerecurringfreetype.md)             | :heavy_check_mark:                                                                                               | The type of the price.                                                                                           |
| `recurringInterval`                                                                                              | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)             | :heavy_check_mark:                                                                                               | The recurring interval of the price.                                                                             |