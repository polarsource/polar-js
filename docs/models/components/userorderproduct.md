# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2024-05-30T02:30:37.371Z"),
  modifiedAt: new Date("2023-09-25T17:12:45.710Z"),
  id: "<value>",
  name: "<value>",
  description: "profuse for pfft",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2022-06-08T18:49:15.844Z"),
      modifiedAt: new Date("2024-03-12T17:24:42.086Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 342655,
      maximumAmount: 122365,
      presetAmount: 593600,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-06-28T23:14:11.413Z"),
      modifiedAt: new Date("2023-04-06T07:32:36.730Z"),
      id: "<value>",
      type: "github_repository",
      description: "aboard supposing great wrongly pillow duffel that ack",
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
      size: 911049,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-02-14T00:14:15.718Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-04-04T19:41:00.104Z"),
      sizeReadable: "<value>",
      publicUrl: "https://tangible-innovation.com/",
    },
  ],
  organization: {
    createdAt: new Date("2022-09-06T07:03:13.253Z"),
    modifiedAt: new Date("2024-12-25T20:02:08.349Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://cute-shark.com/",
    bio: "<value>",
    company: "Gulgowski - Beahan",
    blog: "<value>",
    location: "<value>",
    email: "Mason_Schneider17@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 867695,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 336961,
    profileSettings: {},
    featureSettings: {},
  },
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
| `prices`                                                                                      | *components.ProductPrice*[]                                                                   | :heavy_check_mark:                                                                            | List of prices for this product.                                                              |
| `benefits`                                                                                    | *components.Benefits*[]                                                                       | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |