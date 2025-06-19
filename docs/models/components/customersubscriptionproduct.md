# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  createdAt: new Date("2025-10-21T05:59:03.909Z"),
  modifiedAt: new Date("2024-01-24T22:30:20.583Z"),
  id: "<value>",
  name: "<value>",
  description: "sedately intrigue yippee",
  recurringInterval: null,
  isRecurring: false,
  isArchived: true,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-09-24T14:19:49.161Z"),
      modifiedAt: new Date("2023-09-03T02:43:33.807Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 846062,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2025-08-22T09:43:58.793Z"),
      modifiedAt: new Date("2023-02-16T00:22:02.887Z"),
      type: "custom",
      description: "inside any judgementally grown consequently naturally",
      selectable: false,
      deletable: true,
      organizationId: "<value>",
    },
  ],
  medias: [],
  organization: {
    createdAt: new Date("2025-10-05T12:57:48.267Z"),
    modifiedAt: new Date("2025-09-05T05:45:42.406Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://medium-object.org",
    email: "Elena.Barton@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://expert-elevation.org",
      },
    ],
    detailsSubmittedAt: new Date("2024-01-24T22:47:46.870Z"),
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
| `benefits`                                                                                           | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `organization`                                                                                       | [components.Organization](../../models/components/organization.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |