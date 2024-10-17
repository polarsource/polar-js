# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2023-10-30T06:49:47.105Z"),
  modifiedAt: new Date("2024-04-24T16:23:33.210Z"),
  id: "<value>",
  name: "<value>",
  description: "why rarely splurge electrify fooey now punctually",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-02-12T12:36:40.948Z"),
      modifiedAt: new Date("2024-08-08T09:47:23.975Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 77657,
      maximumAmount: 287746,
      presetAmount: 293369,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-07-22T15:57:17.539Z"),
      modifiedAt: new Date("2024-04-30T07:02:01.520Z"),
      id: "<value>",
      type: "downloadables",
      description:
        "across substitution measly intrepid beside foolishly bidet baa",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/opt/lib",
      mimeType: "<value>",
      size: 29848,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-11-22T18:03:41.709Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-04-15T08:28:57.630Z"),
      sizeReadable: "<value>",
      publicUrl: "https://essential-guidance.biz/",
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
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of available prices for this product.                                                    |
| `benefits`                                                                                    | *components.ProductBenefits*[]                                                                | :heavy_check_mark:                                                                            | The benefits granted by the product.                                                          |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | The medias associated to the product.                                                         |