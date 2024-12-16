# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2024-02-19T00:00:07.712Z"),
  modifiedAt: new Date("2022-04-13T01:27:21.623Z"),
  id: "<value>",
  name: "<value>",
  description: "nor quizzically along about patroller",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-02-11T01:04:09.916Z"),
      modifiedAt: new Date("2023-04-08T10:03:51.865Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-09-27T02:40:17.105Z"),
      modifiedAt: new Date("2023-08-09T23:08:17.211Z"),
      id: "<value>",
      type: "downloadables",
      description: "ah meh plain",
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
      path: "/sbin",
      mimeType: "<value>",
      size: 515900,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-04-20T00:33:39.135Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-05-08T03:46:45.933Z"),
      sizeReadable: "<value>",
      publicUrl: "https://dependable-permafrost.biz/",
    },
  ],
  organization: {
    createdAt: new Date("2023-05-14T10:30:39.040Z"),
    modifiedAt: new Date("2022-02-18T15:18:04.325Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://waterlogged-poetry.net/",
    bio: "<value>",
    company: "McDermott and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Patsy.Brakus@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 889387,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 592626,
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
| `benefits`                                                                                    | [components.BenefitBase](../../models/components/benefitbase.md)[]                            | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |