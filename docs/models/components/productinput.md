# ProductInput

A product.

## Example Usage

```typescript
import { ProductInput } from "@polar-sh/sdk/models/components";

let value: ProductInput = {
  createdAt: new Date("2024-09-07T06:13:39.585Z"),
  modifiedAt: new Date("2022-08-29T00:14:02.289Z"),
  id: "<value>",
  name: "<value>",
  description: "psst atop beneficial ugh ravage warped so obediently",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-11-10T12:13:29.060Z"),
      modifiedAt: new Date("2022-02-17T11:30:13.324Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-12-12T18:40:59.500Z"),
      modifiedAt: new Date("2023-03-27T22:57:28.250Z"),
      id: "<value>",
      description:
        "encouragement and realistic fervently questioningly zowie reassuringly",
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
      path: "/home/user/dir",
      mimeType: "<value>",
      size: 826099,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-04-01T22:38:03.818Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-06-13T17:02:40.832Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the product.                                                                         |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | The name of the product.                                                                       |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The description of the product.                                                                |
| `isRecurring`                                                                                  | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether the product is a subscription tier.                                                    |
| `isArchived`                                                                                   | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether the product is archived and no longer available.                                       |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the organization owning the product.                                                 |
| `prices`                                                                                       | *components.ProductPrice*[]                                                                    | :heavy_check_mark:                                                                             | List of available prices for this product.                                                     |
| `benefits`                                                                                     | *components.ProductBenefits*[]                                                                 | :heavy_check_mark:                                                                             | The benefits granted by the product.                                                           |
| `medias`                                                                                       | [components.ProductMediaFileReadInput](../../models/components/productmediafilereadinput.md)[] | :heavy_check_mark:                                                                             | The medias associated to the product.                                                          |