# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2022-01-29T05:10:32.874Z"),
  modifiedAt: new Date("2023-03-01T23:51:11.548Z"),
  id: "<value>",
  name: "<value>",
  description: "adrenalin bonfire catch brr than a",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-03-17T01:50:29.399Z"),
      modifiedAt: new Date("2022-08-16T22:10:33.984Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 164765,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-12-13T21:16:19.781Z"),
      modifiedAt: new Date("2023-04-08T14:07:06.599Z"),
      id: "<value>",
      description:
        "governance ice-cream uncover where dependency ha gadzooks burdensome pfft",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryId: "<value>",
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "admin",
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/boot",
      mimeType: "<value>",
      size: 398054,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-08-01T01:47:59.550Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-05-04T15:45:49.822Z"),
      sizeReadable: "<value>",
      publicUrl: "https://lawful-reach.biz/",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-10-28T02:42:30.721Z"),
        modifiedAt: new Date("2022-07-03T20:54:21.016Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 93386,
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
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of prices for this product.                                                              |
| `benefits`                                                                                    | *components.Benefit*[]                                                                        | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `attachedCustomFields`                                                                        | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]            | :heavy_check_mark:                                                                            | List of custom fields attached to the product.                                                |