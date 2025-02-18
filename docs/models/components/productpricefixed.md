# ProductPriceFixed

A fixed price for a product.

## Example Usage

```typescript
import { ProductPriceFixed } from "@polar-sh/sdk/models/components/productpricefixed.js";

let value: ProductPriceFixed = {
  createdAt: new Date("2025-11-25T03:55:18.512Z"),
  modifiedAt: new Date("2024-07-10T08:50:43.565Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 930819,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the price.                                                                                                    |
| `amountType`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the price is archived and no longer available.                                                                  |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product owning the price.                                                                                 |
| `type`                                                                                                                  | [components.ProductPriceType](../../models/components/productpricetype.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`recurringInterval`~~                                                                                                 | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `priceCurrency`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The currency.                                                                                                           |
| `priceAmount`                                                                                                           | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The price in cents.                                                                                                     |