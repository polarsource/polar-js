# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-10-31T04:26:04.861Z"),
      modifiedAt: null,
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://stark-premier.com/",
      prorationBehavior: "invoice",
      allowCustomerUpdates: true,
      email: "Gudrun10@hotmail.com",
      website: "<value>",
      socials: [],
      status: "created",
      detailsSubmittedAt: new Date("2026-06-05T05:24:43.996Z"),
      defaultPresentmentCurrency: "<value>",
      defaultTaxBehavior: "location",
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        prorationBehavior: "invoice",
        benefitRevocationGracePeriod: 288227,
        preventTrialAbuse: false,
        allowCustomerUpdates: true,
      },
      notificationSettings: {
        newOrder: false,
        newSubscription: true,
      },
      customerEmailSettings: {
        orderConfirmation: true,
        subscriptionCancellation: false,
        subscriptionConfirmation: false,
        subscriptionCycled: false,
        subscriptionCycledAfterTrial: false,
        subscriptionPastDue: false,
        subscriptionRenewalReminder: true,
        subscriptionRevoked: false,
        subscriptionTrialConversionReminder: false,
        subscriptionUncanceled: true,
        subscriptionUpdated: false,
      },
      customerPortalSettings: {
        usage: {
          show: false,
        },
        subscription: {
          updateSeats: true,
          updatePlan: true,
        },
      },
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |