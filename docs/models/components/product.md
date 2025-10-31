# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  id: "<value>",
  createdAt: new Date("2023-06-21T18:41:01.992Z"),
  modifiedAt: new Date("2023-01-29T12:17:53.381Z"),
  trialInterval: "month",
  trialIntervalCount: 744376,
  name: "<value>",
  description: "awkwardly hopelessly necklace tray crocodile",
  recurringInterval: "year",
  recurringIntervalCount: 411386,
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": "<value>",
  },
  prices: [
    {
      createdAt: new Date("2025-07-19T05:16:33.878Z"),
      modifiedAt: new Date("2024-12-14T03:45:00.109Z"),
      id: "<value>",
      amountType: "seat_based",
      isArchived: true,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "week",
      priceCurrency: "<value>",
      seatTiers: {
        tiers: [
          {
            minSeats: 922152,
            pricePerSeat: 415895,
          },
        ],
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2025-01-09T18:16:10.566Z"),
      modifiedAt: new Date("2025-01-13T18:10:25.062Z"),
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
        createdAt: new Date("2023-10-09T02:00:40.564Z"),
        modifiedAt: new Date("2025-12-28T07:21:00.728Z"),
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
      order: 922916,
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
| `recurringInterval`                                                                                                                                                                                          | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                        |
| `recurringIntervalCount`                                                                                                                                                                                     | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. |
| `isRecurring`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is a subscription.                                                                                                                                                                       |
| `isArchived`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is archived and no longer available.                                                                                                                                                     |
| `organizationId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the organization owning the product.                                                                                                                                                               |
| `metadata`                                                                                                                                                                                                   | Record<string, *components.ProductMetadata*>                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `prices`                                                                                                                                                                                                     | *components.Prices*[]                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                           | List of prices for this product.                                                                                                                                                                             |
| `benefits`                                                                                                                                                                                                   | *components.Benefit*[]                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                           | List of benefits granted by the product.                                                                                                                                                                     |
| `medias`                                                                                                                                                                                                     | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | List of medias associated to the product.                                                                                                                                                                    |
| `attachedCustomFields`                                                                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                           | List of custom fields attached to the product.                                                                                                                                                               |