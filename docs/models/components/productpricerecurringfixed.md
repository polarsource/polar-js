# ProductPriceRecurringFixed

A recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringFixed } from "@polar-sh/sdk/models/components";

let value: ProductPriceRecurringFixed = {
  createdAt: new Date("2022-09-18T19:19:03.998Z"),
  modifiedAt: new Date("2024-09-15T03:51:48.041Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  priceAmount: 508510,
  recurringInterval: "year",
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
| `productId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the product owning the price.                                                                |
| `priceCurrency`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | The currency.                                                                                          |
| `priceAmount`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | The price in cents.                                                                                    |
| `type`                                                                                                 | [components.ProductPriceRecurringFixedType](../../models/components/productpricerecurringfixedtype.md) | :heavy_check_mark:                                                                                     | The type of the price.                                                                                 |
| `recurringInterval`                                                                                    | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |