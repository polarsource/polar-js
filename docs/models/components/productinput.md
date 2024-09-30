# ProductInput

A product.

## Example Usage

```typescript
import { ProductInput } from "@polar-sh/sdk/models/components";

let value: ProductInput = {
  createdAt: new Date("2023-09-20T10:21:04.413Z"),
  modifiedAt: new Date("2022-05-20T04:35:09.735Z"),
  id: "<value>",
  name: "<value>",
  description:
    "repeat squirm regarding shirk aside courageous rarely and watery",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-06-02T10:01:08.885Z"),
      modifiedAt: new Date("2023-09-18T15:00:06.389Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 260562,
      maximumAmount: 274048,
      presetAmount: 433878,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-11-08T14:14:27.402Z"),
      modifiedAt: new Date("2022-12-02T16:16:28.830Z"),
      id: "<value>",
      description: "juicy oval reschedule",
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
      path: "/etc/mail",
      mimeType: "<value>",
      size: 797917,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-10-12T11:36:46.504Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-10-05T16:51:57.858Z"),
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
| `prices`                                                                                       | *components.ProductPriceInput*[]                                                               | :heavy_check_mark:                                                                             | List of available prices for this product.                                                     |
| `benefits`                                                                                     | *components.ProductInputBenefits*[]                                                            | :heavy_check_mark:                                                                             | The benefits granted by the product.                                                           |
| `medias`                                                                                       | [components.ProductMediaFileReadInput](../../models/components/productmediafilereadinput.md)[] | :heavy_check_mark:                                                                             | The medias associated to the product.                                                          |