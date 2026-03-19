# LegacyRecurringProductPriceCustom

A pay-what-you-want recurring price for a product, i.e. a subscription.

**Deprecated**: The recurring interval should be set on the product itself.

## Example Usage

```typescript
import { LegacyRecurringProductPriceCustom } from "@polar-sh/sdk/models/components/legacyrecurringproductpricecustom.js";

let value: LegacyRecurringProductPriceCustom = {
  createdAt: new Date("2025-12-07T03:04:39.121Z"),
  modifiedAt: new Date("2024-07-08T04:58:27.438Z"),
  id: "<value>",
  source: "catalog",
  amountType: "custom",
  priceCurrency: "<value>",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "day",
  minimumAmount: 96295,
  maximumAmount: 385918,
  presetAmount: 774449,
  legacy: true,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the price.                                                                                           |
| `source`                                                                                                       | [components.ProductPriceSource](../../models/components/productpricesource.md)                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `amountType`                                                                                                   | *"custom"*                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceCurrency`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The currency in which the customer will be charged.                                                            |
| `isArchived`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the price is archived and no longer available.                                                         |
| `productId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the product owning the price.                                                                        |
| `type`                                                                                                         | *"recurring"*                                                                                                  | :heavy_check_mark:                                                                                             | The type of the price.                                                                                         |
| `recurringInterval`                                                                                            | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `minimumAmount`                                                                                                | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The minimum amount the customer can pay. If 0, the price is 'free or pay what you want'. Defaults to 50 cents. |
| `maximumAmount`                                                                                                | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The maximum amount the customer can pay.                                                                       |
| `presetAmount`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The initial amount shown to the customer.                                                                      |
| `legacy`                                                                                                       | *true*                                                                                                         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |