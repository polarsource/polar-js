# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  createdAt: new Date("2024-04-01T23:01:50.436Z"),
  modifiedAt: new Date("2024-03-14T21:57:18.934Z"),
  id: "<value>",
  name: "<value>",
  description: "very slope whenever scarcely spew ick fondly aside",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  prices: [
    {
      createdAt: new Date("2023-07-02T17:58:13.883Z"),
      modifiedAt: new Date("2023-07-09T06:36:49.077Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 481553,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-04-12T13:07:34.313Z"),
      modifiedAt: new Date("2023-01-27T21:42:49.165Z"),
      id: "<value>",
      description: "till crumble besides even forenenst lazily",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        note: "<value>",
      },
      isTaxApplicable: false,
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/net",
      mimeType: "<value>",
      size: 74124,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-07-14T12:57:06.598Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-04-25T16:14:24.819Z"),
      sizeReadable: "<value>",
      publicUrl: "https://wordy-bell.net",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-02-08T23:37:33.565Z"),
        modifiedAt: new Date("2023-08-29T07:55:29.814Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 144240,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product.                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the product.                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the product.                                                               |
| `isRecurring`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the product is a subscription tier.                                                   |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the product is archived and no longer available.                                      |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the product.                                                |
| `metadata`                                                                                    | Record<string, *components.ProductMetadata*>                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of prices for this product.                                                              |
| `benefits`                                                                                    | *components.Benefit*[]                                                                        | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `attachedCustomFields`                                                                        | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]            | :heavy_check_mark:                                                                            | List of custom fields attached to the product.                                                |