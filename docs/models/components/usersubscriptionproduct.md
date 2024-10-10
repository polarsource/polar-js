# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2023-09-19T09:47:10.778Z"),
  modifiedAt: new Date("2022-12-29T18:51:15.843Z"),
  id: "<value>",
  name: "<value>",
  description: "chiffonier mould atop drat",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-01-08T18:45:06.828Z"),
      modifiedAt: new Date("2022-03-12T08:18:21.576Z"),
      id: "<value>",
      isArchived: false,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-10-05T14:29:25.570Z"),
      modifiedAt: new Date("2022-06-18T11:45:58.503Z"),
      id: "<value>",
      type: "github_repository",
      description: "phew since woot drat",
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
      path: "/usr/sbin",
      mimeType: "<value>",
      size: 269391,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-11-07T01:27:54.679Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-07-15T23:08:55.418Z"),
      sizeReadable: "<value>",
      publicUrl: "https://every-atrium.biz",
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