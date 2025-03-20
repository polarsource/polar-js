# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2025-04-13T23:28:29.053Z"),
  modifiedAt: new Date("2024-12-21T04:51:51.441Z"),
  id: "<value>",
  name: "<value>",
  description: "woot alliance follower scaly too bathhouse",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-10-20T16:09:17.088Z"),
      modifiedAt: new Date("2023-10-10T20:03:13.602Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 917590,
      maximumAmount: 677492,
      presetAmount: 319975,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-04-19T01:05:03.927Z"),
      modifiedAt: new Date("2024-04-30T03:38:37.774Z"),
      id: "<value>",
      type: "github_repository",
      description: "apricot ack trivial card hmph how uselessly portray",
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
      path: "/usr/include",
      mimeType: "<value>",
      size: 912141,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-10-01T21:44:40.357Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-09-15T23:39:45.179Z"),
      sizeReadable: "<value>",
      publicUrl: "https://needy-disadvantage.name",
    },
  ],
  organization: {
    createdAt: new Date("2025-03-10T04:38:12.092Z"),
    modifiedAt: new Date("2024-12-11T12:14:26.116Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://determined-descent.biz/",
    email: "Marcelina.Cummerata@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "facebook",
        url: "https://obvious-brook.name",
      },
    ],
    detailsSubmittedAt: new Date("2023-12-07T08:29:54.913Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Connelly Group",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 551475,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 284483,
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