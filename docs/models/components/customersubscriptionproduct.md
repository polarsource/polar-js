# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2023-04-13T07:18:48.482Z"),
  modifiedAt: new Date("2022-03-22T07:53:37.413Z"),
  id: "<value>",
  name: "<value>",
  description: "quizzically along about patroller what aw",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-04-20T19:40:49.785Z"),
      modifiedAt: new Date("2023-05-20T04:29:31.559Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 401780,
      maximumAmount: 87393,
      presetAmount: 159143,
      recurringInterval: "month",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-02-28T15:59:22.619Z"),
      modifiedAt: new Date("2024-12-28T09:14:27.366Z"),
      id: "<value>",
      type: "downloadables",
      description: "since likewise lumpy while musty usually mortar",
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
      path: "/usr/ports",
      mimeType: "<value>",
      size: 331335,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2022-01-10T19:30:49.833Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-12-21T06:53:31.334Z"),
      sizeReadable: "<value>",
      publicUrl: "https://cheap-recommendation.biz/",
    },
  ],
  organization: {
    createdAt: new Date("2022-07-04T15:05:09.060Z"),
    modifiedAt: new Date("2022-05-10T20:46:28.355Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://yellowish-grandpa.net",
    bio: "<value>",
    company: "Jones Group",
    blog: "<value>",
    location: "<value>",
    email: "Alessia_Jast-Mayert57@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 951614,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 187940,
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