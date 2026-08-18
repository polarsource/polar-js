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
      onboardingResubmissionRequestedAt: new Date("2024-11-02T20:52:07.745Z"),
      ssoEnforced: false,
      defaultPresentmentCurrency: "<value>",
      defaultTaxBehavior: "location",
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        prorationBehavior: "prorate",
        benefitRevocationGracePeriod: 738108,
        preventTrialAbuse: true,
        allowCustomerUpdates: true,
      },
      customerEmailSettings: {
        orderConfirmation: false,
        paymentMethodExpirationReminder: false,
        subscriptionCancellation: false,
        subscriptionConfirmation: false,
        subscriptionCycled: false,
        subscriptionCycledAfterTrial: true,
        subscriptionPastDue: false,
        subscriptionPaused: false,
        subscriptionResumed: true,
        subscriptionRenewalReminder: false,
        subscriptionRevoked: false,
        subscriptionTrialConversionReminder: true,
        subscriptionUncanceled: true,
        subscriptionUpdated: false,
      },
      customerPortalSettings: {
        usage: {
          show: true,
        },
        subscription: {
          updateSeats: true,
          updatePlan: false,
        },
      },
      disputeSettings: {
        autoAcceptBelowAmount: 923084,
      },
      embedHosts: [
        "<value 1>",
        "<value 2>",
      ],
      embedHostsEnforced: false,
      accountId: "<value>",
      payoutAccountId: "<value>",
      capabilities: {
        checkoutPayments: false,
        subscriptionRenewals: true,
        payouts: false,
        refunds: false,
        apiAccess: false,
        dashboardAccess: true,
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