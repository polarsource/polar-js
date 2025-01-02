# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components";

let value: CustomerOrderProduct = {
  createdAt: new Date("2025-09-01T19:47:14.357Z"),
  modifiedAt: new Date("2025-05-19T07:19:58.851Z"),
  id: "<value>",
  name: "<value>",
  description: "than indeed hassle",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-03-25T22:52:07.722Z"),
      modifiedAt: new Date("2024-03-31T06:40:04.841Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 151092,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-11-29T23:56:50.889Z"),
      modifiedAt: new Date("2024-06-04T01:21:54.034Z"),
      id: "<value>",
      type: "discord",
      description: "collectivization geez discrete gym aha",
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
      path: "/Library",
      mimeType: "<value>",
      size: 132707,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-09-17T16:51:01.606Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-10-06T18:59:00.388Z"),
      sizeReadable: "<value>",
      publicUrl: "https://radiant-strait.net",
    },
  ],
  organization: {
    createdAt: new Date("2024-02-17T00:44:13.481Z"),
    modifiedAt: new Date("2025-05-30T10:39:49.151Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://trusting-language.name/",
    bio: "<value>",
    company: "Parker, Blick and Fritsch",
    blog: "<value>",
    location: "<value>",
    email: "Augusta_Gislason@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 426373,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 73292,
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