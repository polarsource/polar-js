# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2024-10-06T08:46:10.626Z"),
  modifiedAt: new Date("2022-08-21T10:30:21.944Z"),
  id: "<value>",
  name: "<value>",
  description: "perky if defiantly reassemble information adrenalin",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": 665687,
  },
  prices: [
    {
      createdAt: new Date("2022-10-10T19:36:32.221Z"),
      modifiedAt: new Date("2024-07-22T16:47:45.821Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-10-15T02:28:08.072Z"),
      modifiedAt: new Date("2022-08-13T13:39:26.566Z"),
      id: "<value>",
      description:
        "phew scholarship what shabby bloom blah along eek override absent",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/usr/local/bin",
      mimeType: "<value>",
      size: 673057,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-04-27T08:46:07.096Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-07-08T03:14:38.624Z"),
      sizeReadable: "<value>",
      publicUrl: "https://ultimate-confusion.org",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2022-04-27T07:19:35.512Z"),
        modifiedAt: new Date("2022-12-08T09:16:03.862Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 893434,
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