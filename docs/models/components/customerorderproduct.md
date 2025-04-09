# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2024-01-01T00:23:40.160Z"),
  modifiedAt: new Date("2025-10-22T15:33:21.925Z"),
  id: "<value>",
  name: "<value>",
  description: "unless outrageous surprise tomography different ha furthermore",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-11-22T10:10:48.873Z"),
      modifiedAt: new Date("2024-09-24T06:29:45.141Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 316747,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-08-11T14:38:39.231Z"),
      modifiedAt: new Date("2024-10-25T13:48:48.198Z"),
      id: "<value>",
      type: "license_keys",
      description:
        "gadzooks whoa an reluctantly wherever hence phooey factorize courteous",
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
      path: "/opt/sbin",
      mimeType: "<value>",
      size: 66023,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-09-28T22:40:10.265Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-07-14T02:16:38.326Z"),
      sizeReadable: "<value>",
      publicUrl: "https://vain-publicity.org/",
    },
  ],
  organization: {
    createdAt: new Date("2025-12-28T19:59:01.239Z"),
    modifiedAt: new Date("2025-09-14T01:48:46.016Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://monumental-address.name/",
    email: "Enoch73@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://triangular-tomography.name/",
      },
    ],
    detailsSubmittedAt: new Date("2025-09-14T22:12:04.712Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Crooks and Sons",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 336255,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 755162,
    profileSettings: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product.                                                                               |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the product.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the product.                                                                      |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the product. If `None`, the product is a one-time purchase.                |
| `isRecurring`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is a subscription.                                                               |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is archived and no longer available.                                             |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the product.                                                       |
| `prices`                                                                                             | *components.CustomerOrderProductPrices*[]                                                            | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `organization`                                                                                       | [components.Organization](../../models/components/organization.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |