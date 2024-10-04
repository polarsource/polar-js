# ProductInput

A product.

## Example Usage

```typescript
import { ProductInput } from "@polar-sh/sdk/models/components";

let value: ProductInput = {
  createdAt: new Date("2023-06-21T17:32:39.701Z"),
  modifiedAt: new Date("2023-03-24T00:48:37.906Z"),
  id: "<value>",
  name: "<value>",
  description: "slight acknowledge indeed misfire drug igloo with",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-09-21T20:52:57.043Z"),
      modifiedAt: new Date("2024-06-08T19:16:48.368Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 588740,
      maximumAmount: 566064,
      presetAmount: 497351,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-02-16T14:02:02.979Z"),
      modifiedAt: new Date("2022-01-19T15:45:14.248Z"),
      id: "<value>",
      description: "drat when lovingly that or responsible pish round",
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
      path: "/opt",
      mimeType: "<value>",
      size: 205656,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-09-07T01:11:59.142Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-11-30T09:15:45.832Z"),
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