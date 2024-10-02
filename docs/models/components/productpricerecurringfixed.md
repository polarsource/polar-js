# ProductPriceRecurringFixed

A recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFixed } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringFixed = {
  createdAt: new Date("2022-08-20T21:26:11.367Z"),
  modifiedAt: new Date("2023-07-03T21:21:03.279Z"),
  id: "<value>",
  isArchived: false,
  priceCurrency: "<value>",
  priceAmount: 526096,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Creation timestamp of the object.                                                                      |
| `modifiedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Last modification timestamp of the object.                                                             |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the price.                                                                                   |
| `amountType`                                                                                           | [components.AmountType](../../models/components/amounttype.md)                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isArchived`                                                                                           | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the price is archived and no longer available.                                                 |
| `priceCurrency`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | The currency.                                                                                          |
| `priceAmount`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | The price in cents.                                                                                    |
| `type`                                                                                                 | [components.ProductPriceRecurringFixedType](../../models/components/productpricerecurringfixedtype.md) | :heavy_check_mark:                                                                                     | The type of the price.                                                                                 |
| `recurringInterval`                                                                                    | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)   | :heavy_check_mark:                                                                                     | The recurring interval of the price.                                                                   |