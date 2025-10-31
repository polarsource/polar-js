# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-01T11:31:35.018Z"),
        modifiedAt: new Date("2025-12-12T00:45:47.881Z"),
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "day",
        recurringIntervalCount: 955385,
        status: "trialing",
        currentPeriodStart: new Date("2024-06-04T23:43:59.093Z"),
        currentPeriodEnd: new Date("2025-12-12T06:24:34.907Z"),
        trialStart: new Date("2023-07-16T18:10:41.850Z"),
        trialEnd: new Date("2023-05-10T15:41:14.073Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2025-02-07T05:43:32.303Z"),
        startedAt: new Date("2024-02-22T11:50:37.052Z"),
        endsAt: new Date("2024-01-21T21:40:10.018Z"),
        endedAt: null,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        product: {
          id: "<value>",
          createdAt: new Date("2023-10-20T22:40:18.625Z"),
          modifiedAt: null,
          trialInterval: "year",
          trialIntervalCount: 406310,
          name: "<value>",
          description: "unabashedly regarding lest",
          recurringInterval: "day",
          recurringIntervalCount: 167145,
          isRecurring: true,
          isArchived: true,
          organizationId: "<value>",
          prices: [],
          benefits: [],
          medias: [],
          organization: {
            createdAt: new Date("2024-04-23T21:20:15.611Z"),
            modifiedAt: new Date("2024-05-22T15:08:17.767Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://late-cutover.org",
            email: "Phyllis_Romaguera@gmail.com",
            website: "<value>",
            socials: [],
            status: "denied",
            detailsSubmittedAt: new Date("2025-03-30T02:02:42.344Z"),
            featureSettings: null,
            subscriptionSettings: {
              allowMultipleSubscriptions: true,
              allowCustomerUpdates: true,
              prorationBehavior: "invoice",
              benefitRevocationGracePeriod: 916709,
            },
            notificationSettings: {
              newOrder: true,
              newSubscription: true,
            },
            customerEmailSettings: {
              orderConfirmation: true,
              subscriptionCancellation: true,
              subscriptionConfirmation: false,
              subscriptionCycled: true,
              subscriptionPastDue: false,
              subscriptionRevoked: false,
              subscriptionUncanceled: false,
              subscriptionUpdated: true,
            },
          },
        },
        prices: [
          {
            createdAt: new Date("2024-08-18T04:21:45.193Z"),
            modifiedAt: new Date("2023-09-06T16:06:48.196Z"),
            id: "<value>",
            amountType: "free",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            legacy: true,
          },
        ],
        meters: [],
        isPolarManaged: false,
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |