# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2024-10-26T11:27:52.228Z"),
  modifiedAt: new Date("2023-08-15T17:16:57.437Z"),
  id: "<value>",
  name: "<value>",
  description: "yak mmm best-seller instead",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-03-20T12:41:53.835Z"),
      modifiedAt: new Date("2022-05-12T09:57:08.401Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 349639,
      maximumAmount: 434874,
      presetAmount: 830003,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-11-17T17:39:23.315Z"),
      modifiedAt: new Date("2023-09-13T21:41:48.071Z"),
      id: "<value>",
      type: "custom",
      description: "cosset storyboard noted grounded phooey",
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
      path: "/bin",
      mimeType: "<value>",
      size: 738496,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-07-26T07:48:42.795Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-10-20T05:47:37.552Z"),
      sizeReadable: "<value>",
      publicUrl: "https://criminal-sushi.biz/",
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
| `benefits`                                                                                       | *components.Benefits*[]                                                                          | :heavy_check_mark:                                                                               | The benefits granted by the product.                                                             |
| `medias`                                                                                         | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[] | :heavy_check_mark:                                                                               | The medias associated to the product.                                                            |