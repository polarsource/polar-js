# CustomerSubscriptionProduct

## Example Usage

```typescript
import { CustomerSubscriptionProduct } from "@polar-sh/sdk/models/components/customersubscriptionproduct.js";

let value: CustomerSubscriptionProduct = {
  id: "<value>",
  createdAt: new Date("2026-10-21T05:59:03.909Z"),
  modifiedAt: new Date("2025-01-23T22:30:20.583Z"),
  trialInterval: "day",
  trialIntervalCount: 608370,
  name: "<value>",
  description: "collaboration engage swelter lest",
  visibility: "draft",
  recurringInterval: "year",
  recurringIntervalCount: 387115,
  meterInterval: "month",
  meterIntervalCount: 166490,
  isRecurring: true,
  isArchived: true,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2026-05-16T14:40:05.070Z"),
      modifiedAt: new Date("2024-10-05T08:04:42.259Z"),
      id: "<value>",
      source: "ad_hoc",
      amountType: "metered_unit",
      priceCurrency: "<value>",
      taxBehavior: null,
      isArchived: true,
      productId: "<value>",
      unitAmount: "<value>",
      capAmount: null,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
        unit: "scalar",
        customLabel: "<value>",
        customMultiplier: 471087,
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2024-01-22T00:59:04.968Z"),
      modifiedAt: new Date("2024-05-30T13:40:06.041Z"),
      type: "github_repository",
      description:
        "cautiously however competent distorted gosh incidentally legislature tall across",
      selectable: true,
      deletable: true,
      isDeleted: true,
      organizationId: "<value>",
    },
  ],
  medias: [],
  organization: {
    createdAt: new Date("2024-11-13T04:56:58.190Z"),
    modifiedAt: new Date("2025-02-17T06:08:03.827Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    prorationBehavior: "invoice",
    allowCustomerUpdates: false,
    customerPortalSettings: {
      usage: {
        show: true,
      },
      subscription: {
        updateSeats: true,
        updatePlan: false,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the object.                                                                                                                                                                                        |
| `createdAt`                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Creation timestamp of the object.                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Last modification timestamp of the object.                                                                                                                                                                   |
| `trialInterval`                                                                                                                                                                                              | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The interval unit for the trial period.                                                                                                                                                                      |
| `trialIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The number of interval units for the trial period.                                                                                                                                                           |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The name of the product.                                                                                                                                                                                     |
| `description`                                                                                                                                                                                                | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The description of the product.                                                                                                                                                                              |
| `visibility`                                                                                                                                                                                                 | [components.ProductVisibility](../../models/components/productvisibility.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `recurringInterval`                                                                                                                                                                                          | [components.RecurringInterval](../../models/components/recurringinterval.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                        |
| `recurringIntervalCount`                                                                                                                                                                                     | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. |
| `meterInterval`                                                                                                                                                                                              | [components.RecurringInterval](../../models/components/recurringinterval.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.                                                                                |
| `meterIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of meter interval units. None when no meter cycle is set.                                                                                                                                             |
| `isRecurring`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is a subscription.                                                                                                                                                                       |
| `isArchived`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is archived and no longer available.                                                                                                                                                     |
| `organizationId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the organization owning the product.                                                                                                                                                               |
| `prices`                                                                                                                                                                                                     | *components.CustomerSubscriptionProductPrices*[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                           | List of prices for this product.                                                                                                                                                                             |
| `benefits`                                                                                                                                                                                                   | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                           | List of benefits granted by the product.                                                                                                                                                                     |
| `medias`                                                                                                                                                                                                     | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | List of medias associated to the product.                                                                                                                                                                    |
| `organization`                                                                                                                                                                                               | [components.CustomerOrganization](../../models/components/customerorganization.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |