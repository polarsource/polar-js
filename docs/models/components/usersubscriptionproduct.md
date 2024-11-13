# UserSubscriptionProduct

## Example Usage

```typescript
import { UserSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: UserSubscriptionProduct = {
  createdAt: new Date("2022-02-03T10:22:11.476Z"),
  modifiedAt: new Date("2024-03-30T18:05:35.215Z"),
  id: "<value>",
  name: "<value>",
  description: "wherever even instead ew roger wash whereas drag pull bookend",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-07-03T09:10:24.025Z"),
      modifiedAt: new Date("2024-10-23T19:40:14.521Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 880428,
      maximumAmount: 713934,
      presetAmount: 577541,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2022-01-09T22:42:48.365Z"),
      modifiedAt: new Date("2022-05-12T02:52:19.946Z"),
      id: "<value>",
      type: "ads",
      description: "meager dish provided gee",
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
      path: "/net",
      mimeType: "<value>",
      size: 25705,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-11-29T01:49:49.888Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2022-02-05T11:00:40.920Z"),
      sizeReadable: "<value>",
      publicUrl: "https://cumbersome-charm.net/",
    },
  ],
  organization: {
    createdAt: new Date("2022-04-13T09:59:21.377Z"),
    modifiedAt: new Date("2022-06-12T21:52:06.305Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://cooperative-reporter.info/",
    bio: "<value>",
    company: "Batz, Steuber and Cremin",
    blog: "<value>",
    location: "<value>",
    email: "Erica21@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 661787,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 283619,
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
| `benefits`                                                                                    | *components.UserSubscriptionProductBenefits*[]                                                | :heavy_check_mark:                                                                            | List of benefits granted by the product.                                                      |
| `medias`                                                                                      | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]          | :heavy_check_mark:                                                                            | List of medias associated to the product.                                                     |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |