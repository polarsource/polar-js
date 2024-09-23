# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2024-11-11T22:47:48.049Z"),
  modifiedAt: new Date("2023-01-21T17:19:51.132Z"),
  id: "<value>",
  name: "<value>",
  description: "Total real-time focus group",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-08-16T08:12:55.508Z"),
      modifiedAt: new Date("2022-05-04T05:17:17.347Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 212434,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-03-18T17:11:45.482Z"),
      modifiedAt: new Date("2024-03-27T18:36:28.011Z"),
      id: "<value>",
      type: "discord",
      description: "Multi-tiered 24 hour hardware",
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
      path: "/boot/defaults",
      mimeType: "<value>",
      size: 208253,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-10-18T21:41:24.614Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-08-25T01:50:03.721Z"),
      sizeReadable: "<value>",
      publicUrl: "<value>",
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