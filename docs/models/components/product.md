# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components";

let value: Product = {
  createdAt: new Date("2022-07-12T08:26:30.494Z"),
  modifiedAt: new Date("2023-10-25T07:42:42.569Z"),
  id: "<value>",
  name: "<value>",
  description: "victorious plus wilderness all the hence instead overburden",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-03-09T01:30:44.677Z"),
      modifiedAt: new Date("2023-12-14T12:08:21.329Z"),
      id: "<value>",
      isArchived: false,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-10-21T15:06:03.630Z"),
      modifiedAt: new Date("2024-05-19T11:50:21.965Z"),
      id: "<value>",
      description:
        "shoulder whereas around generously from intensely underneath what yippee forenenst",
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
      size: 60627,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-09-09T04:28:09.469Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-07-02T23:56:35.113Z"),
      sizeReadable: "<value>",
      publicUrl: "https://livid-freezing.net",
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