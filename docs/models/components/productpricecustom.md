# ProductPriceCustom

A pay-what-you-want price for a product.

## Example Usage

```typescript
import { ProductPriceCustom } from "@polar-sh/sdk/models/components/productpricecustom.js";

let value: ProductPriceCustom = {
  createdAt: new Date("2023-10-20T20:36:49.558Z"),
  modifiedAt: new Date("2025-08-19T15:05:51.902Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 247685,
  maximumAmount: 318233,
  presetAmount: 858778,
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