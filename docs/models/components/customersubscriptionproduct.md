# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2023-08-31T20:30:50.225Z"),
  modifiedAt: new Date("2023-11-27T20:53:52.117Z"),
  id: "<value>",
  name: "<value>",
  description:
    "cheerfully hasty behind developmental meanwhile entwine hubris at aching",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-11-11T07:14:50.067Z"),
      modifiedAt: new Date("2023-12-18T13:55:58.887Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 803796,
      maximumAmount: 167945,
      presetAmount: 773588,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-10-05T13:48:13.909Z"),
      modifiedAt: new Date("2023-11-12T05:07:17.320Z"),
      id: "<value>",
      type: "license_keys",
      description: "after distinct scientific",
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
      path: "/home/user",
      mimeType: "<value>",
      size: 231418,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-06-06T21:54:56.557Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-03-24T00:32:50.154Z"),
      sizeReadable: "<value>",
      publicUrl: "https://inborn-formation.info",
    },
  ],
  organization: {
    createdAt: new Date("2025-10-08T12:39:56.525Z"),
    modifiedAt: new Date("2025-09-25T09:49:00.136Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://neighboring-hospitalization.com/",
    bio: "<value>",
    company: "Runte and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Concepcion.Cummings75@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 435439,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 92611,
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