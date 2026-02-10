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
      priceCurrency: "usd",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      seatTiers: {
        tiers: [
          {
            minSeats: 834838,
            pricePerSeat: 337669,
          },
        ],
        minimumSeats: 958690,
        maximumSeats: 665075,
      },
    },
  ],
  benefits: [],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/Applications",
      mimeType: "<value>",
      size: 764885,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-04-23T23:01:02.489Z"),
      version: "<value>",
      service: "product_media",
      isUploaded: true,
      createdAt: new Date("2025-12-09T18:31:15.290Z"),
      sizeReadable: "<value>",
      publicUrl: "https://winding-godfather.name/",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-09-17T23:34:10.111Z"),
        modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
        id: "<value>",
        metadata: {},
        type: "select",
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
      order: 797456,
      required: false,
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