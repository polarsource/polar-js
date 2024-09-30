# ProductOutput

A product.

## Example Usage

```typescript
import { ProductOutput } from "@polar-sh/sdk/models/components";

let value: ProductOutput = {
  createdAt: new Date("2024-12-17T12:16:52.238Z"),
  modifiedAt: new Date("2023-06-12T03:06:20.381Z"),
  id: "<value>",
  name: "<value>",
  description: "er in amazing heighten overcoat",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-10-26T09:04:03.886Z"),
      modifiedAt: new Date("2022-08-05T16:18:42.945Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 169589,
      maximumAmount: 755094,
      presetAmount: 348663,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-04-18T20:26:13.694Z"),
      modifiedAt: new Date("2022-01-28T05:14:01.831Z"),
      id: "<value>",
      type: "articles",
      description: "acidic pfft drat whenever",
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
      path: "/lib",
      mimeType: "<value>",
      size: 246846,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-06-03T00:43:09.210Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-10-31T04:31:16.287Z"),
      sizeReadable: "<value>",
      publicUrl: "https://talkative-suitcase.com",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the product.                                                                           |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the product.                                                                         |
| `description`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The description of the product.                                                                  |
| `isRecurring`                                                                                    | *boolean*                                                                                        | :heavy_check_mark:                                                                               | Whether the product is a subscription tier.                                                      |
| `isArchived`                                                                                     | *boolean*                                                                                        | :heavy_check_mark:                                                                               | Whether the product is archived and no longer available.                                         |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the organization owning the product.                                                   |
| `prices`                                                                                         | *components.ProductPriceOutput*[]                                                                | :heavy_check_mark:                                                                               | List of available prices for this product.                                                       |
| `benefits`                                                                                       | *components.ProductOutputBenefits*[]                                                             | :heavy_check_mark:                                                                               | The benefits granted by the product.                                                             |
| `medias`                                                                                         | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[] | :heavy_check_mark:                                                                               | The medias associated to the product.                                                            |