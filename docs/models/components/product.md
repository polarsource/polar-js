# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  createdAt: new Date("2024-03-30T10:47:58.920Z"),
  modifiedAt: new Date("2024-04-06T17:10:31.500Z"),
  id: "<value>",
  name: "<value>",
  description:
    "gee outfit outrun lighthearted quizzically pleasing foolishly why beside commonly",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  prices: [
    {
      createdAt: new Date("2023-01-07T00:32:08.475Z"),
      modifiedAt: new Date("2023-10-30T18:25:07.122Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 967006,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-01-22T14:41:40.360Z"),
      modifiedAt: new Date("2025-12-26T09:53:59.176Z"),
      id: "<value>",
      description: "unless save unlawful vague override shakily rewarding woot",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        guildToken: "<value>",
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/var",
      mimeType: "<value>",
      size: 503528,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-11-11T10:36:59.251Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-07-01T22:55:43.947Z"),
      sizeReadable: "<value>",
      publicUrl: "https://broken-wear.biz",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-07-07T14:30:14.002Z"),
        modifiedAt: new Date("2024-06-08T17:38:07.580Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
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
      order: 722151,
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
| `prices`                                                                                             | *components.ProductPrices*[]                                                                         | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | *components.Benefit*[]                                                                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `attachedCustomFields`                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                   | :heavy_check_mark:                                                                                   | List of custom fields attached to the product.                                                       |