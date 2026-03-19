# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  id: "<value>",
  createdAt: new Date("2024-06-20T18:41:01.992Z"),
  modifiedAt: new Date("2024-01-29T12:17:53.381Z"),
  trialInterval: "month",
  trialIntervalCount: 744376,
  name: "<value>",
  description: "awkwardly hopelessly necklace tray crocodile",
  visibility: "draft",
  recurringInterval: "year",
  recurringIntervalCount: 845304,
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {},
  prices: [
    {
      createdAt: new Date("2026-07-19T05:16:33.878Z"),
      modifiedAt: new Date("2025-12-14T03:45:00.109Z"),
      id: "<value>",
      source: "catalog",
      amountType: "seat_based",
      priceCurrency: "<value>",
      isArchived: true,
      productId: "<value>",
      seatTiers: {
        tiers: [
          {
            minSeats: 675666,
            pricePerSeat: 558084,
          },
        ],
        minimumSeats: 922152,
        maximumSeats: 164973,
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2026-09-26T10:37:01.387Z"),
      modifiedAt: new Date("2026-01-09T18:16:10.566Z"),
      type: "downloadables",
      description:
        "extremely relieve readily solder seagull weary smooth bore yet quaintly",
      selectable: true,
      deletable: false,
      organizationId: "<value>",
      metadata: {},
      properties: {
        archived: {
          "key": true,
          "key1": true,
        },
        files: [],
      },
    },
  ],
  medias: [],
  attachedCustomFields: [],
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the object.                                                                                                                                                                                        |
| `createdAt`                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Creation timestamp of the object.                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Last modification timestamp of the object.                                                                                                                                                                   |
| `trialInterval`                                                                                                                                                                                              | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The interval unit for the trial period.                                                                                                                                                                      |
| `trialIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The number of interval units for the trial period.                                                                                                                                                           |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The name of the product.                                                                                                                                                                                     |
| `description`                                                                                                                                                                                                | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The description of the product.                                                                                                                                                                              |
| `visibility`                                                                                                                                                                                                 | [components.ProductVisibility](../../models/components/productvisibility.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `recurringInterval`                                                                                                                                                                                          | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                        |
| `recurringIntervalCount`                                                                                                                                                                                     | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. |
| `isRecurring`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is a subscription.                                                                                                                                                                       |
| `isArchived`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is archived and no longer available.                                                                                                                                                     |
| `organizationId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the organization owning the product.                                                                                                                                                               |
| `metadata`                                                                                                                                                                                                   | Record<string, *components.MetadataOutputType*>                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `prices`                                                                                                                                                                                                     | *components.Prices*[]                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                           | List of prices for this product.                                                                                                                                                                             |
| `benefits`                                                                                                                                                                                                   | *components.Benefit*[]                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                           | List of benefits granted by the product.                                                                                                                                                                     |
| `medias`                                                                                                                                                                                                     | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | List of medias associated to the product.                                                                                                                                                                    |
| `attachedCustomFields`                                                                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                           | List of custom fields attached to the product.                                                                                                                                                               |