# ProductPriceCustom

A pay-what-you-want price for a product.

## Example Usage

```typescript
import { ProductPriceCustom } from "@polar-sh/sdk/models/components/productpricecustom.js";

let value: ProductPriceCustom = {
  createdAt: new Date("2024-01-21T16:11:36.139Z"),
  modifiedAt: new Date("2025-03-01T15:52:51.579Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 976226,
  maximumAmount: 889794,
  presetAmount: 764562,
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
| `minimumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The minimum amount the customer can pay.                                                                                |
| `maximumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The maximum amount the customer can pay.                                                                                |
| `presetAmount`                                                                                                          | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The initial amount shown to the customer.                                                                               |