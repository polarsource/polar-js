# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2024-02-15T12:52:52.298Z"),
  modifiedAt: new Date("2024-05-20T01:39:36.546Z"),
  id: "<value>",
  name: "<value>",
  description: "between ew flickering shanghai",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-04-15T18:02:33.861Z"),
      modifiedAt: new Date("2024-08-18T15:47:38.887Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 760155,
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-01-06T15:36:55.941Z"),
      modifiedAt: new Date("2025-05-30T12:07:26.736Z"),
      id: "<value>",
      type: "downloadables",
      description: "hastily unabashedly cute as innocently oof",
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
      path: "/tmp",
      mimeType: "<value>",
      size: 942114,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-05-30T06:09:38.320Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-12-05T07:06:31.528Z"),
      sizeReadable: "<value>",
      publicUrl: "https://clueless-lace.org",
    },
  ],
  organization: {
    createdAt: new Date("2024-07-28T23:36:52.386Z"),
    modifiedAt: new Date("2025-11-03T14:18:38.128Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://monstrous-metal.org/",
    bio: "<value>",
    company: "Mertz, Bergstrom and Fadel",
    blog: "<value>",
    location: "<value>",
    email: "Johnpaul4@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 381831,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 27651,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
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