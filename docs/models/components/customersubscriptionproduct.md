# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2023-07-25T05:59:40.299Z"),
  modifiedAt: new Date("2025-03-22T23:51:41.745Z"),
  id: "<value>",
  name: "<value>",
  description: "powerful how stoop that",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-09-25T07:48:45.694Z"),
      modifiedAt: new Date("2024-11-05T05:19:19.160Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 184043,
      maximumAmount: 306162,
      presetAmount: 351558,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-01-20T02:39:15.832Z"),
      modifiedAt: new Date("2025-11-07T04:52:23.286Z"),
      id: "<value>",
      type: "github_repository",
      description:
        "freely whose hmph bitterly punctually instead baritone pneumonia frantically",
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
      path: "/etc/defaults",
      mimeType: "<value>",
      size: 518508,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-02-03T19:42:51.470Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-04-16T16:44:01.041Z"),
      sizeReadable: "<value>",
      publicUrl: "https://alienated-precedent.org",
    },
  ],
  organization: {
    createdAt: new Date("2024-05-15T14:47:43.808Z"),
    modifiedAt: new Date("2023-03-14T05:11:25.734Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://crazy-knickers.biz/",
    bio: "<value>",
    company: "Johnston, Howell and Bergnaum",
    blog: "<value>",
    location: "<value>",
    email: "Bradley.Gusikowski83@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 483005,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 289062,
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