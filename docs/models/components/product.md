# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  createdAt: new Date("2023-06-21T18:41:01.992Z"),
  modifiedAt: new Date("2025-01-24T01:11:05.530Z"),
  id: "<value>",
  name: "<value>",
  description: "toward keenly owlishly",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": 941105,
  },
  prices: [
    {
      createdAt: new Date("2024-10-15T16:33:45.672Z"),
      modifiedAt: new Date("2024-03-09T15:15:05.513Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 17273,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-09-09T23:12:26.225Z"),
      modifiedAt: new Date("2025-10-16T19:42:00.745Z"),
      description: "dwell direct entire whitewash extremely",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      metadata: {
        "key": 8565.88,
      },
      properties: {
        archived: {
          "key": false,
        },
        files: [
          "<value>",
        ],
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/bin",
      mimeType: "<value>",
      size: 931698,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-08-31T06:53:38.655Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-11-05T07:46:18.597Z"),
      sizeReadable: "<value>",
      publicUrl: "https://aching-perp.net",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2025-02-17T09:28:43.135Z"),
        modifiedAt: new Date("2024-05-23T23:35:39.028Z"),
        id: "<value>",
        metadata: {
          "key": 7288.63,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 544136,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product.                                                                               |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the product.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the product.                                                                      |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the product. If `None`, the product is a one-time purchase.                |
| `isRecurring`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is a subscription.                                                               |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is archived and no longer available.                                             |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the product.                                                       |
| `metadata`                                                                                           | Record<string, *components.ProductMetadata*>                                                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prices`                                                                                             | *components.Prices*[]                                                                                | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | *components.Benefit*[]                                                                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `attachedCustomFields`                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                   | :heavy_check_mark:                                                                                   | List of custom fields attached to the product.                                                       |