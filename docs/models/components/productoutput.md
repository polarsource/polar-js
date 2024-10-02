# ProductOutput

A product.

## Example Usage

```typescript
import { ProductOutput } from "@polar-sh/sdk/models/components";

let value: ProductOutput = {
  createdAt: new Date("2023-10-25T07:42:42.569Z"),
  modifiedAt: new Date("2024-03-17T20:19:28.004Z"),
  id: "<value>",
  name: "<value>",
  description:
    "forsaken beloved inspection famously conservative scramble officially sticky versus",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-11-12T07:08:39.069Z"),
      modifiedAt: new Date("2024-08-06T06:22:45.544Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 299655,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-06-02T08:46:36.465Z"),
      modifiedAt: new Date("2024-12-06T01:57:30.247Z"),
      id: "<value>",
      type: "custom",
      description:
        "whenever pneumonia decriminalize wasteful who fat iridescence yahoo",
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
      path: "/var/log",
      mimeType: "<value>",
      size: 459294,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-07-16T09:31:31.845Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-06-02T05:09:47.593Z"),
      sizeReadable: "<value>",
      publicUrl: "https://basic-deer.info/",
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