# ProductPriceCustom

A pay-what-you-want price for a product.

## Example Usage

```typescript
import { ProductPriceCustom } from "@polar-sh/sdk/models/components/productpricecustom.js";

let value: ProductPriceCustom = {
  createdAt: new Date("2024-06-11T19:38:31.503Z"),
  modifiedAt: new Date("2026-07-14T10:09:27.768Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "custom",
  priceCurrency: "usd",
  isArchived: true,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "day",
  minimumAmount: 508827,
  maximumAmount: 793062,
  presetAmount: 879510,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the price.                                                                                                    |
| `source`                                                                                                                | [components.ProductPriceSource](../../models/components/productpricesource.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amountType`                                                                                                            | *"custom"*                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceCurrency`                                                                                                         | [components.PresentmentCurrency](../../models/components/presentmentcurrency.md)                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the price is archived and no longer available.                                                                  |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product owning the price.                                                                                 |
| `type`                                                                                                                  | [components.ProductPriceType](../../models/components/productpricetype.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`recurringInterval`~~                                                                                                 | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `minimumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'. Defaults to 50 cents.          |
| `maximumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The maximum amount the customer can pay.                                                                                |
| `presetAmount`                                                                                                          | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The initial amount shown to the customer.                                                                               |