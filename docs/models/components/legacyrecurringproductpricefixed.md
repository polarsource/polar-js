# LegacyRecurringProductPriceFixed

A recurring price for a product, i.e. a subscription.

**Deprecated**: The recurring interval should be set on the product itself.

## Example Usage

```typescript
import { LegacyRecurringProductPriceFixed } from "@polar-sh/sdk/models/components/legacyrecurringproductpricefixed.js";

let value: LegacyRecurringProductPriceFixed = {
  createdAt: new Date("2026-09-21T09:37:21.640Z"),
  modifiedAt: new Date("2024-07-30T14:55:29.344Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "fixed",
  priceCurrency: "usd",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceAmount: 905396,
  legacy: true,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the price.                                                                                 |
| `source`                                                                                             | [components.ProductPriceSource](../../models/components/productpricesource.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `amountType`                                                                                         | *"fixed"*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceCurrency`                                                                                      | [components.PresentmentCurrency](../../models/components/presentmentcurrency.md)                     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the price is archived and no longer available.                                               |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product owning the price.                                                              |
| `type`                                                                                               | *"recurring"*                                                                                        | :heavy_check_mark:                                                                                   | The type of the price.                                                                               |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceAmount`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The price in cents.                                                                                  |
| `legacy`                                                                                             | *true*                                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |