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
  isRecurring: false,
  isArchived: true,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  prices: [],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-01-16T01:29:59.311Z"),
      modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
      type: "license_keys",
      description: "out beneath off phew",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {},
      properties: {
        prefix: null,
        expires: {
          ttl: 56931,
          timeframe: "month",
        },
        activations: {
          limit: 936323,
          enableCustomerAdmin: false,
        },
        limitUsage: 702937,
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/sbin",
      mimeType: "<value>",
      size: 498972,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
      version: "<value>",
      service: "product_media",
      isUploaded: false,
      createdAt: new Date("2024-08-06T00:24:30.544Z"),
      sizeReadable: "<value>",
      publicUrl: "https://enchanting-bell.net/",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2023-01-17T02:26:08.207Z"),
        modifiedAt: new Date("2025-04-09T14:51:17.764Z"),
        id: "<value>",
        metadata: {
          "key": true,
        },
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
      order: 252765,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                              | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the object.                                                                                                                                             |
| `createdAt`                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Creation timestamp of the object.                                                                                                                                 |
| `modifiedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Last modification timestamp of the object.                                                                                                                        |
| `trialInterval`                                                                                                                                                   | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                              | :heavy_check_mark:                                                                                                                                                | The interval unit for the trial period.                                                                                                                           |
| `trialIntervalCount`                                                                                                                                              | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The number of interval units for the trial period.                                                                                                                |
| `name`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The name of the product.                                                                                                                                          |
| `description`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The description of the product.                                                                                                                                   |
| `recurringInterval`                                                                                                                                               | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                              | :heavy_check_mark:                                                                                                                                                | The recurring interval of the product. If `None`, the product is a one-time purchase.Note that the `day` and `week` values are for internal Polar staff use only. |
| `isRecurring`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is a subscription.                                                                                                                            |
| `isArchived`                                                                                                                                                      | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is archived and no longer available.                                                                                                          |
| `organizationId`                                                                                                                                                  | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the organization owning the product.                                                                                                                    |
| `metadata`                                                                                                                                                        | Record<string, *components.ProductMetadata*>                                                                                                                      | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `prices`                                                                                                                                                          | *components.Prices*[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                                | List of prices for this product.                                                                                                                                  |
| `benefits`                                                                                                                                                        | *components.Benefit*[]                                                                                                                                            | :heavy_check_mark:                                                                                                                                                | List of benefits granted by the product.                                                                                                                          |
| `medias`                                                                                                                                                          | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                              | :heavy_check_mark:                                                                                                                                                | List of medias associated to the product.                                                                                                                         |
| `attachedCustomFields`                                                                                                                                            | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                | :heavy_check_mark:                                                                                                                                                | List of custom fields attached to the product.                                                                                                                    |