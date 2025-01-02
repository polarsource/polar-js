# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2023-12-27T12:47:58.923Z"),
  modifiedAt: new Date("2023-01-22T13:58:08.292Z"),
  id: "<value>",
  name: "<value>",
  description: "self-reliant yowza nor",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  prices: [
    {
      createdAt: new Date("2025-10-04T09:52:26.411Z"),
      modifiedAt: new Date("2024-03-27T03:25:20.607Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 305267,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-12-21T18:06:07.641Z"),
      modifiedAt: new Date("2023-08-06T23:39:39.226Z"),
      id: "<value>",
      description:
        "despite energetically quixotic efface kissingly tensely gah supposing",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 428810,
          timeframe: "month",
        },
        activations: {
          limit: 416934,
          enableCustomerAdmin: false,
        },
        limitUsage: 400470,
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
      size: 92851,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-07-02T12:43:21.651Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-07-21T21:55:28.560Z"),
      sizeReadable: "<value>",
      publicUrl: "https://fluffy-gift.org",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-11-04T07:45:54.269Z"),
        modifiedAt: new Date("2023-08-31T18:04:39.587Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 431258,
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