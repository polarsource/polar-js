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
      createdAt: new Date("2023-10-31T03:45:05.104Z"),
      modifiedAt: new Date("2024-09-29T17:58:16.689Z"),
      id: "<value>",
      amountType: "free",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      legacy: true,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-01-08T14:30:25.036Z"),
      modifiedAt: new Date("2025-05-30T08:17:38.670Z"),
      type: "license_keys",
      description:
        "separate once vibration overcharge apud strictly over inside pfft sanity",
      selectable: true,
      deletable: false,
      organizationId: "<value>",
      metadata: {},
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 693280,
          timeframe: "day",
        },
        activations: {
          limit: 533992,
          enableCustomerAdmin: true,
        },
        limitUsage: 221353,
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/usr/X11R6",
      mimeType: "<value>",
      size: 327832,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: null,
      version: "<value>",
      service: "product_media",
      isUploaded: true,
      createdAt: new Date("2023-11-10T03:13:37.813Z"),
      sizeReadable: "<value>",
      publicUrl: "https://warlike-tinderbox.com",
    },
  ],
  attachedCustomFields: [],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Creation timestamp of the object.                                                                                                                                 |
| `modifiedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Last modification timestamp of the object.                                                                                                                        |
| `id`                                                                                                                                                              | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the product.                                                                                                                                            |
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