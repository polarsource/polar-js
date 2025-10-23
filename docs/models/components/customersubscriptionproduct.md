# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  id: "<value>",
  createdAt: new Date("2025-10-21T05:59:03.909Z"),
  modifiedAt: new Date("2024-01-24T22:30:20.583Z"),
  trialInterval: "day",
  trialIntervalCount: 608370,
  name: "<value>",
  description: "collaboration engage swelter lest",
  recurringInterval: null,
  recurringIntervalCount: 862436,
  isRecurring: false,
  isArchived: true,
  organizationId: "<value>",
  prices: [],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-01-24T18:47:57.919Z"),
      modifiedAt: new Date("2025-10-21T11:30:14.929Z"),
      type: "github_repository",
      description:
        "mockingly despite aw guidance defensive once at understated admonish",
      selectable: false,
      deletable: true,
      organizationId: "<value>",
    },
  ],
  medias: [],
  organization: {
    createdAt: new Date("2024-03-27T03:55:24.068Z"),
    modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://huge-lid.net/",
    email: "Dalton_Anderson49@hotmail.com",
    website: "<value>",
    socials: [],
    status: "under_review",
    detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: true,
      allowCustomerUpdates: true,
      prorationBehavior: "invoice",
    },
    notificationSettings: {
      newOrder: false,
      newSubscription: true,
    },
    customerEmailSettings: {
      orderConfirmation: true,
      subscriptionCancellation: true,
      subscriptionConfirmation: true,
      subscriptionCycled: false,
      subscriptionPastDue: true,
      subscriptionRevoked: false,
      subscriptionUncanceled: false,
      subscriptionUpdated: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The ID of the object.                                                                                                                                                                                      |
| `createdAt`                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                                                          |
| `modifiedAt`                                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                                                 |
| `trialInterval`                                                                                                                                                                                            | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | The interval unit for the trial period.                                                                                                                                                                    |
| `trialIntervalCount`                                                                                                                                                                                       | *number*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The number of interval units for the trial period.                                                                                                                                                         |
| `name`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The name of the product.                                                                                                                                                                                   |
| `description`                                                                                                                                                                                              | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The description of the product.                                                                                                                                                                            |
| `recurringInterval`                                                                                                                                                                                        | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                      |
| `recurringIntervalCount`                                                                                                                                                                                   | *number*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | Number of interval units of the subscription.If this is set to 1 the charge will happen every interval (e.g. every month),if set to 2 it will be every other month, and so on. None for one-time products. |
| `isRecurring`                                                                                                                                                                                              | *boolean*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                         | Whether the product is a subscription.                                                                                                                                                                     |
| `isArchived`                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                         | Whether the product is archived and no longer available.                                                                                                                                                   |
| `organizationId`                                                                                                                                                                                           | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The ID of the organization owning the product.                                                                                                                                                             |
| `prices`                                                                                                                                                                                                   | *components.CustomerSubscriptionProductPrices*[]                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                         | List of prices for this product.                                                                                                                                                                           |
| `benefits`                                                                                                                                                                                                 | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                         | List of benefits granted by the product.                                                                                                                                                                   |
| `medias`                                                                                                                                                                                                   | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | List of medias associated to the product.                                                                                                                                                                  |
| `organization`                                                                                                                                                                                             | [components.Organization](../../models/components/organization.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |