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
      taxBehavior: "exclusive",
      isArchived: true,
      productId: "<value>",
      seatTiers: {
        tiers: [
          {
            minSeats: 922152,
            pricePerSeat: 415895,
          },
        ],
        minimumSeats: 164973,
        maximumSeats: 735578,
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2026-01-09T18:16:10.566Z"),
      modifiedAt: new Date("2026-01-13T18:10:25.062Z"),
      type: "discord",
      description: "whether regularly necessary",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        kickMember: false,
        guildToken: "<value>",
      },
    },
  ],
  medias: [],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2026-07-16T19:04:19.230Z"),
        modifiedAt: new Date("2025-02-05T20:03:25.495Z"),
        id: "<value>",
        metadata: {
          "key": 6988.1,
        },
        type: "text",
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 235618,
      required: true,
    },
  ],
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