# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  createdAt: new Date("2023-04-16T17:30:39.955Z"),
  modifiedAt: new Date("2023-11-04T13:06:12.786Z"),
  id: "<value>",
  name: "<value>",
  description: "dimly deduct amnesty swath likewise zowie",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-10-31T16:41:22.925Z"),
      modifiedAt: new Date("2023-07-14T23:16:31.297Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 456372,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-06-22T03:34:37.516Z"),
      modifiedAt: new Date("2024-09-21T14:30:07.308Z"),
      id: "<value>",
      type: "downloadables",
      description: "multicolored unless duh jam-packed discourse hm psst off",
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
      path: "/etc/namedb",
      mimeType: "<value>",
      size: 930498,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-04-07T12:40:12.871Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-06-15T02:55:20.921Z"),
      sizeReadable: "<value>",
      publicUrl: "https://variable-vanadyl.biz/",
    },
  ],
  organization: {
    createdAt: new Date("2023-07-08T08:45:37.880Z"),
    modifiedAt: new Date("2025-01-25T19:36:23.667Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://far-fowl.info",
    bio: "<value>",
    company: "Gislason LLC",
    blog: "<value>",
    location: "<value>",
    email: "Gregorio_Weber@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 500943,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 88933,
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