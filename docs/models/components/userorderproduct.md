# UserOrderProduct

## Example Usage

```typescript
import { UserOrderProduct } from "@polar-sh/sdk/models/components";

let value: UserOrderProduct = {
  createdAt: new Date("2023-03-16T23:43:44.923Z"),
  modifiedAt: new Date("2022-08-18T07:04:21.930Z"),
  id: "<value>",
  name: "<value>",
  description: "deduction cop ack creak exaggerate",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-03-10T02:54:55.367Z"),
      modifiedAt: new Date("2024-09-17T22:15:47.415Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-12-22T18:16:42.157Z"),
      modifiedAt: new Date("2024-12-27T07:45:07.954Z"),
      id: "<value>",
      type: "license_keys",
      description: "free humidity beyond perspire",
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
      path: "/home/user",
      mimeType: "<value>",
      size: 861477,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-05-31T13:10:23.082Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-09-27T05:11:28.515Z"),
      sizeReadable: "<value>",
      publicUrl: "https://apt-resolve.info",
    },
  ],
  organization: {
    createdAt: new Date("2024-07-04T15:55:26.085Z"),
    modifiedAt: new Date("2023-05-26T04:08:34.395Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://empty-yarmulke.info/",
    bio: "<value>",
    company: "Schoen - Bayer",
    blog: "<value>",
    location: "<value>",
    email: "Eli51@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 662487,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 173265,
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