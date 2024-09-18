# ProductPriceRecurringCustom

A pay-what-you-want recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringCustom } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringCustom = {
  createdAt: new Date("2023-02-15T02:10:01.616Z"),
  modifiedAt: new Date("2023-12-10T07:20:22.916Z"),
  id: "<value>",
  priceCurrency: "<value>",
  isArchived: false,
  minimumAmount: 463575,
  maximumAmount: 214880,
  presetAmount: 277628,
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
| `priceCurrency`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The currency.                                                                                                        |
| `isArchived`                                                                                                         | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the price is archived and no longer available.                                                               |
| `minimumAmount`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The minimum amount the customer can pay.                                                                             |
| `maximumAmount`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The maximum amount the customer can pay.                                                                             |
| `presetAmount`                                                                                                       | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The initial amount shown to the customer.                                                                            |
| `type`                                                                                                               | [components.ProductPriceRecurringCustomType](../../models/components/productpricerecurringcustomtype.md)             | :heavy_check_mark:                                                                                                   | The type of the price.                                                                                               |
| `recurringInterval`                                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                 | :heavy_check_mark:                                                                                                   | The recurring interval of the price.                                                                                 |