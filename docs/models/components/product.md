# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  createdAt: new Date("2023-06-21T18:41:01.992Z"),
  modifiedAt: new Date("2023-01-29T12:17:53.381Z"),
  id: "<value>",
  name: "<value>",
  description:
    "drat because meanwhile including deprave where reapply unnaturally",
  recurringInterval: "year",
  isRecurring: true,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": 682.71,
  },
  prices: [
    {
      createdAt: new Date("2024-05-23T23:35:39.028Z"),
      modifiedAt: new Date("2025-03-09T19:59:45.065Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
    },
  ],
  benefits: [],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/private",
      mimeType: "<value>",
      size: 782007,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: null,
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-07-08T02:43:14.288Z"),
      sizeReadable: "<value>",
      publicUrl: "https://aged-fellow.net",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-07-01T08:41:58.254Z"),
        modifiedAt: new Date("2024-04-28T16:06:37.710Z"),
        id: "<value>",
        metadata: {
          "key": 120959,
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
      order: 943565,
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