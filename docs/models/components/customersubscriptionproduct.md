# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2025-03-03T05:53:22.940Z"),
  modifiedAt: new Date("2025-06-20T03:32:55.037Z"),
  id: "<value>",
  name: "<value>",
  description: "supposing than which angrily colorfully mostly impact ick",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-08-21T18:01:23.530Z"),
      modifiedAt: new Date("2025-03-03T10:19:31.167Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 769067,
      maximumAmount: 817366,
      presetAmount: 110989,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-01-06T18:04:00.281Z"),
      modifiedAt: new Date("2025-06-11T07:56:22.222Z"),
      id: "<value>",
      type: "downloadables",
      description:
        "evenly save whoa annual appertain overproduce which husband alongside",
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
      path: "/Users",
      mimeType: "<value>",
      size: 790426,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-06-03T07:51:56.631Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-03-13T13:45:54.118Z"),
      sizeReadable: "<value>",
      publicUrl: "https://evil-gloom.biz",
    },
  ],
  organization: {
    createdAt: new Date("2024-12-02T23:06:12.612Z"),
    modifiedAt: new Date("2025-06-16T13:01:42.846Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://some-management.name",
    bio: "<value>",
    company: "Armstrong - Macejkovic",
    blog: "<value>",
    location: "<value>",
    email: "Grace37@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 203551,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 967874,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
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
| `prices`                                                                                             | *components.CustomerSubscriptionProductPrices*[]                                                     | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `organization`                                                                                       | [components.Organization](../../models/components/organization.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |