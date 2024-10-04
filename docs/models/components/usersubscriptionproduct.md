# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2022-12-28T03:15:47.219Z"),
  modifiedAt: new Date("2022-10-19T12:09:42.537Z"),
  id: "<value>",
  name: "<value>",
  description: "allocation pish towards on battle",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-06-25T15:45:12.084Z"),
      modifiedAt: new Date("2023-01-07T12:17:32.844Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 513307,
      maximumAmount: 138514,
      presetAmount: 196647,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-08-14T07:37:23.995Z"),
      modifiedAt: new Date("2022-05-15T01:02:04.729Z"),
      id: "<value>",
      description: "behind midwife around yowza behind",
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
      path: "/usr/local/bin",
      mimeType: "<value>",
      size: 255108,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-10-30T22:25:41.128Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-03-27T21:45:07.077Z"),
      sizeReadable: "<value>",
      publicUrl: "https://polite-bracelet.net/",
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
| `benefits`                                                                                    | *components.UserSubscriptionProductBenefits*[]                                                | :heavy_check_mark:                                                                            | The benefits granted by the product.                                                          |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | The medias associated to the product.                                                         |