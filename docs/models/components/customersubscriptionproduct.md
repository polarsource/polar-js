# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2025-10-21T05:59:03.909Z"),
  modifiedAt: new Date("2024-01-17T23:18:58.404Z"),
  id: "<value>",
  name: "<value>",
  description: "slap phooey contrast cow bookend",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-02-29T06:40:54.155Z"),
      modifiedAt: new Date("2023-09-03T02:43:33.807Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 166490,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-01-24T10:59:07.931Z"),
      modifiedAt: new Date("2023-04-28T04:00:20.719Z"),
      id: "<value>",
      type: "meter_credit",
      description: "downchange that swill and square boohoo assail unlearn a",
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
      size: 858807,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-05-21T10:07:32.776Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-05-29T04:30:51.881Z"),
      sizeReadable: "<value>",
      publicUrl: "https://selfish-markup.org/",
    },
  ],
  organization: {
    createdAt: new Date("2025-03-12T15:31:40.057Z"),
    modifiedAt: new Date("2025-06-27T16:41:21.358Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://insecure-rationale.org",
    email: "Maribel.Reinger28@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "tiktok",
        url: "https://frightened-jump.name/",
      },
    ],
    detailsSubmittedAt: new Date("2024-06-26T18:47:54.734Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Willms, Prohaska and Treutel",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
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