# LegacyRecurringProductPriceCustom

A pay-what-you-want recurring price for a product, i.e. a subscription.

**Deprecated**: The recurring interval should be set on the product itself.

## Example Usage

```typescript
import { LegacyRecurringProductPriceCustom } from "@polar-sh/sdk/models/components/legacyrecurringproductpricecustom.js";

let value: LegacyRecurringProductPriceCustom = {
  createdAt: new Date("2024-07-11T21:04:54.594Z"),
  modifiedAt: new Date("2025-10-24T15:19:53.478Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 389953,
  maximumAmount: 865786,
  presetAmount: 205048,
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
| `minimumAmount`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | The minimum amount the customer can pay.                                                             |
| `maximumAmount`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | The maximum amount the customer can pay.                                                             |
| `presetAmount`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | The initial amount shown to the customer.                                                            |
| `legacy`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |