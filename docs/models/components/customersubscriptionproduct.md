# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2024-04-25T19:37:47.188Z"),
  modifiedAt: new Date("2023-07-28T05:51:28.616Z"),
  id: "<value>",
  name: "<value>",
  description: "meanwhile phew aboard really implode yahoo brr",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-07-07T10:21:37.699Z"),
      modifiedAt: new Date("2024-12-13T23:47:49.873Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-07-07T05:32:26.628Z"),
      modifiedAt: new Date("2024-04-09T09:28:04.302Z"),
      id: "<value>",
      type: "downloadables",
      description: "anenst petty which unlined although righteously airline",
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
      path: "/usr/libdata",
      mimeType: "<value>",
      size: 129523,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-06-08T19:50:25.987Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-03-08T08:03:15.291Z"),
      sizeReadable: "<value>",
      publicUrl: "https://best-knitting.biz",
    },
  ],
  organization: {
    createdAt: new Date("2023-04-21T18:58:19.815Z"),
    modifiedAt: new Date("2024-08-16T02:13:31.093Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://dutiful-icebreaker.info/",
    bio: "<value>",
    company: "Grant, Hand and Vandervort",
    blog: "<value>",
    location: "<value>",
    email: "Linnea_Bergnaum@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 598299,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 837107,
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