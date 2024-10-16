# ProductPriceRecurringCustom

A pay-what-you-want recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringCustom = {
  createdAt: new Date("2022-11-08T12:27:27.718Z"),
  modifiedAt: new Date("2024-11-29T08:28:52.570Z"),
  id: "<value>",
  isArchived: false,
  priceCurrency: "<value>",
  minimumAmount: 717486,
  maximumAmount: 610766,
  presetAmount: 695088,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Creation timestamp of the object.                                                                                    |
| `modifiedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | Last modification timestamp of the object.                                                                           |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the price.                                                                                                 |
| `amountType`                                                                                                         | [components.ProductPriceRecurringCustomAmountType](../../models/components/productpricerecurringcustomamounttype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `isArchived`                                                                                                         | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the price is archived and no longer available.                                                               |
| `priceCurrency`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The currency.                                                                                                        |
| `minimumAmount`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The minimum amount the customer can pay.                                                                             |
| `maximumAmount`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The maximum amount the customer can pay.                                                                             |
| `presetAmount`                                                                                                       | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The initial amount shown to the customer.                                                                            |
| `type`                                                                                                               | [components.ProductPriceRecurringCustomType](../../models/components/productpricerecurringcustomtype.md)             | :heavy_check_mark:                                                                                                   | The type of the price.                                                                                               |
| `recurringInterval`                                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |