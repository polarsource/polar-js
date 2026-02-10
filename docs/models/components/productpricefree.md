# ProductPriceFree

A free price for a product.

## Example Usage

```typescript
import { ProductPriceFree } from "@polar-sh/sdk/models/components/productpricefree.js";

let value: ProductPriceFree = {
  createdAt: new Date("2024-09-09T01:59:19.952Z"),
  modifiedAt: new Date("2024-06-14T13:47:01.466Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "free",
  priceCurrency: "usd",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the price.                                                                                                    |
| `source`                                                                                                                | [components.ProductPriceSource](../../models/components/productpricesource.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amountType`                                                                                                            | *"free"*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceCurrency`                                                                                                         | [components.PresentmentCurrency](../../models/components/presentmentcurrency.md)                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the price is archived and no longer available.                                                                  |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product owning the price.                                                                                 |
| `type`                                                                                                                  | [components.ProductPriceType](../../models/components/productpricetype.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`recurringInterval`~~                                                                                                 | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |