# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2024-11-12T07:08:39.069Z"),
  modifiedAt: new Date("2024-08-06T06:22:45.544Z"),
  id: "<value>",
  name: "<value>",
  description: "although flawed reasonable while carefully",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-04-03T15:02:49.751Z"),
      modifiedAt: new Date("2022-09-29T10:51:45.980Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 920225,
      maximumAmount: 837154,
      presetAmount: 744463,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-11-01T22:12:29.478Z"),
      modifiedAt: new Date("2024-08-30T21:19:27.448Z"),
      id: "<value>",
      description: "iridescence yahoo deer weary out",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        paidArticles: false,
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/opt/include",
      mimeType: "<value>",
      size: 49827,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-10-13T05:41:23.194Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-06-12T00:46:24.138Z"),
      sizeReadable: "<value>",
      publicUrl: "https://lavish-alliance.name/",
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