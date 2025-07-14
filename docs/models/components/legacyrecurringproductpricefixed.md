# LegacyRecurringProductPriceFixed

A recurring price for a product, i.e. a subscription.

**Deprecated**: The recurring interval should be set on the product itself.

## Example Usage

```typescript
import { LegacyRecurringProductPriceFixed } from "@polar-sh/sdk/models/components/legacyrecurringproductpricefixed.js";

let value: LegacyRecurringProductPriceFixed = {
  createdAt: new Date("2025-09-21T09:37:21.640Z"),
  modifiedAt: new Date("2023-07-31T14:55:29.344Z"),
  id: "<value>",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 555601,
  legacy: true,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the price.                                                                                 |
| `amountType`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the price is archived and no longer available.                                               |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product owning the price.                                                              |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The type of the price.                                                                               |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceCurrency`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The currency.                                                                                        |
| `priceAmount`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | The price in cents.                                                                                  |
| `legacy`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |