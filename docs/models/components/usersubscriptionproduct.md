# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2023-03-07T17:42:52.129Z"),
  modifiedAt: new Date("2022-06-12T02:39:17.198Z"),
  id: "<value>",
  name: "<value>",
  description: "monstrous plait indeed aggravating",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-07-01T02:49:59.827Z"),
      modifiedAt: new Date("2022-11-30T12:43:32.164Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 57871,
      maximumAmount: 378735,
      presetAmount: 241254,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-03-14T05:18:13.214Z"),
      modifiedAt: new Date("2023-01-21T03:47:17.857Z"),
      id: "<value>",
      type: "downloadables",
      description: "notwithstanding cycle intelligent",
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
      path: "/var",
      mimeType: "<value>",
      size: 109167,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-07-25T04:11:45.005Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-01-20T08:30:25.562Z"),
      sizeReadable: "<value>",
      publicUrl: "https://dark-synergy.com/",
    },
  ],
  organization: {
    createdAt: new Date("2024-12-22T15:39:21.636Z"),
    modifiedAt: new Date("2024-08-03T09:32:57.287Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://practical-declaration.net",
    bio: "<value>",
    company: "McCullough - Kessler",
    blog: "<value>",
    location: "<value>",
    email: "Alberta41@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 468634,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 251776,
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