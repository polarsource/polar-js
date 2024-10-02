# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2023-07-24T11:07:08.116Z"),
  modifiedAt: new Date("2024-11-01T00:31:03.453Z"),
  id: "<value>",
  name: "<value>",
  description: "failing fashion swear frightfully tousle failing",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-09-10T16:04:08.718Z"),
      modifiedAt: new Date("2023-04-28T15:06:03.138Z"),
      id: "<value>",
      isArchived: false,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-02-23T01:55:52.356Z"),
      modifiedAt: new Date("2024-10-13T01:07:10.723Z"),
      id: "<value>",
      description: "hm vice slowly into along ew",
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
      path: "/root",
      mimeType: "<value>",
      size: 880769,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-06-15T14:48:41.077Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-10-12T14:35:51.548Z"),
      sizeReadable: "<value>",
      publicUrl: "https://whopping-jury.com/",
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