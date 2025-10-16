# CustomerOrderProduct

## Example Usage

```typescript
import { CustomerOrderProduct } from "@polar-sh/sdk/models/components/customerorderproduct.js";

let value: CustomerOrderProduct = {
  id: "<value>",
  createdAt: new Date("2024-01-01T00:23:40.160Z"),
  modifiedAt: new Date("2024-09-25T02:43:11.144Z"),
  trialInterval: "day",
  trialIntervalCount: 972360,
  name: "<value>",
  description: "merry queasily knitting sparkling whereas urgently",
  recurringInterval: "month",
  isRecurring: true,
  isArchived: true,
  organizationId: "<value>",
  prices: [],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-09-04T12:35:29.724Z"),
      modifiedAt: new Date("2024-05-27T08:53:02.662Z"),
      type: "downloadables",
      description: "cautiously pike true considering superior about",
      selectable: true,
      deletable: false,
      organizationId: "<value>",
    },
  ],
  medias: [],
  organization: {
    createdAt: new Date("2025-02-03T21:10:18.351Z"),
    modifiedAt: new Date("2024-01-24T22:47:46.870Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://super-ocelot.org",
    email: "Adolph.Kuhn40@gmail.com",
    website: "<value>",
    socials: [],
    status: "onboarding_started",
    detailsSubmittedAt: new Date("2023-06-02T11:26:30.723Z"),
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                              | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the object.                                                                                                                                             |
| `createdAt`                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Creation timestamp of the object.                                                                                                                                 |
| `modifiedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Last modification timestamp of the object.                                                                                                                        |
| `trialInterval`                                                                                                                                                   | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                              | :heavy_check_mark:                                                                                                                                                | The interval unit for the trial period.                                                                                                                           |
| `trialIntervalCount`                                                                                                                                              | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The number of interval units for the trial period.                                                                                                                |
| `name`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The name of the product.                                                                                                                                          |
| `description`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The description of the product.                                                                                                                                   |
| `recurringInterval`                                                                                                                                               | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                              | :heavy_check_mark:                                                                                                                                                | The recurring interval of the product. If `None`, the product is a one-time purchase.Note that the `day` and `week` values are for internal Polar staff use only. |
| `isRecurring`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is a subscription.                                                                                                                            |
| `isArchived`                                                                                                                                                      | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is archived and no longer available.                                                                                                          |
| `organizationId`                                                                                                                                                  | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the organization owning the product.                                                                                                                    |
| `prices`                                                                                                                                                          | *components.CustomerOrderProductPrices*[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                | List of prices for this product.                                                                                                                                  |
| `benefits`                                                                                                                                                        | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                            | :heavy_check_mark:                                                                                                                                                | List of benefits granted by the product.                                                                                                                          |
| `medias`                                                                                                                                                          | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                              | :heavy_check_mark:                                                                                                                                                | List of medias associated to the product.                                                                                                                         |
| `organization`                                                                                                                                                    | [components.Organization](../../models/components/organization.md)                                                                                                | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |