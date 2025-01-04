# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2025-12-13T06:53:53.078Z"),
  modifiedAt: new Date("2023-06-07T21:18:57.113Z"),
  id: "<value>",
  name: "<value>",
  description:
    "what likewise whether whereas collectivization despite till crumble besides even",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": 84211,
  },
  prices: [
    {
      createdAt: new Date("2025-07-11T15:07:16.354Z"),
      modifiedAt: new Date("2024-09-13T01:40:13.089Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-11-12T13:59:39.924Z"),
      modifiedAt: new Date("2024-08-02T12:01:00.206Z"),
      id: "<value>",
      description: "gosh inwardly whereas officially annex superficial",
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
      path: "/sys",
      mimeType: "<value>",
      size: 487765,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-01-15T14:16:01.354Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-10-26T11:06:47.453Z"),
      sizeReadable: "<value>",
      publicUrl: "https://suburban-fledgling.com",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2025-03-26T08:32:25.562Z"),
        modifiedAt: new Date("2025-11-25T21:11:55.739Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
      order: 555663,
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