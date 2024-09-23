# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2023-06-06T05:53:46.089Z"),
  modifiedAt: new Date("2024-06-17T17:52:12.552Z"),
  id: "<value>",
  name: "<value>",
  description: "Focused bottom-line extranet",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-09-07T04:32:30.698Z"),
      modifiedAt: new Date("2022-03-17T11:04:55.466Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 705710,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-12-07T16:20:05.131Z"),
      modifiedAt: new Date("2024-02-27T14:44:54.858Z"),
      id: "<value>",
      type: "ads",
      description: "Reactive secondary complexity",
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
      path: "/var/tmp",
      mimeType: "<value>",
      size: 162358,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-11-15T18:16:45.151Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-07-17T01:20:07.188Z"),
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
| `benefits`                                                                                       | *components.UserSubscriptionProductBenefits*[]                                                   | :heavy_check_mark:                                                                               | The benefits granted by the product.                                                             |
| `medias`                                                                                         | [components.ProductMediaFileReadOutput](../../models/components/productmediafilereadoutput.md)[] | :heavy_check_mark:                                                                               | The medias associated to the product.                                                            |