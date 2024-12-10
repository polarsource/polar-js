# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2023-06-26T08:44:09.618Z"),
  modifiedAt: new Date("2024-10-15T20:41:28.761Z"),
  id: "<value>",
  name: "<value>",
  description:
    "kiddingly wrongly criminal blink mortally so continually rebuke",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": "<value>",
  },
  prices: [
    {
      createdAt: new Date("2023-01-08T18:00:36.094Z"),
      modifiedAt: new Date("2022-03-17T04:22:16.108Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 228907,
      maximumAmount: 357984,
      presetAmount: 435142,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-03-02T17:47:11.428Z"),
      modifiedAt: new Date("2022-12-15T02:59:19.660Z"),
      id: "<value>",
      description: "sans annual before hotfoot pulp",
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
      path: "/usr/X11R6",
      mimeType: "<value>",
      size: 417333,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-02-24T20:10:39.079Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-03-07T20:41:31.236Z"),
      sizeReadable: "<value>",
      publicUrl: "https://unconscious-travel.com",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2022-05-03T23:56:54.252Z"),
        modifiedAt: new Date("2022-07-31T21:28:27.806Z"),
        id: "<value>",
        metadata: {
          "key": 506532,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 629461,
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