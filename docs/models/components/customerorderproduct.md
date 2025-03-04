# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2025-07-29T13:16:30.529Z"),
  modifiedAt: new Date("2023-12-22T00:55:04.745Z"),
  id: "<value>",
  name: "<value>",
  description:
    "brr though ugh galvanize potentially wholly elliptical on along lift",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-01-01T00:27:16.216Z"),
      modifiedAt: new Date("2023-11-09T07:17:45.765Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 76182,
      maximumAmount: 226019,
      presetAmount: 515317,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-12-22T19:23:26.375Z"),
      modifiedAt: new Date("2024-03-31T16:13:48.951Z"),
      id: "<value>",
      type: "github_repository",
      description: "arid only duh caring longingly",
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
      path: "/bin",
      mimeType: "<value>",
      size: 496963,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-03-20T07:59:36.852Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-08-26T01:26:53.760Z"),
      sizeReadable: "<value>",
      publicUrl: "https://upright-tinderbox.info",
    },
  ],
  organization: {
    createdAt: new Date("2024-02-28T16:46:24.332Z"),
    modifiedAt: new Date("2025-06-11T09:05:14.093Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://criminal-illusion.info/",
    bio: "<value>",
    company: "Heller - Williamson",
    blog: "<value>",
    location: "<value>",
    email: "Vladimir.Breitenberg18@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 888343,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 204017,
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
| `prices`                                                                                             | *components.CustomerOrderProductPrices*[]                                                            | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `organization`                                                                                       | [components.Organization](../../models/components/organization.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |