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
        status: "unpaid",
        currentPeriodStart: new Date("2024-02-23T17:53:28.293Z"),
        currentPeriodEnd: new Date("2023-07-26T13:42:22.696Z"),
        trialStart: new Date("2024-04-26T18:30:27.337Z"),
        trialEnd: new Date("2024-09-10T16:41:08.863Z"),
        cancelAtPeriodEnd: true,
        canceledAt: null,
        startedAt: new Date("2025-02-07T05:43:32.303Z"),
        endsAt: new Date("2024-02-22T11:50:37.052Z"),
        endedAt: new Date("2024-01-21T21:40:10.018Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: null,
        checkoutId: "<value>",
        customerCancellationReason: "unused",
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
          isRecurring: true,
          isArchived: true,
          organizationId: "<value>",
          prices: [],
          benefits: [],
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
        },
        prices: [],
        meters: [
          {
            createdAt: new Date("2024-06-14T14:31:03.394Z"),
            modifiedAt: new Date("2024-08-18T04:21:45.193Z"),
            id: "<value>",
            consumedUnits: 25,
            creditedUnits: 100,
            amount: 0,
            meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
            meter: {
              createdAt: new Date("2023-05-13T23:55:31.561Z"),
              modifiedAt: new Date("2023-08-11T07:10:38.626Z"),
              id: "<value>",
              name: "<value>",
            },
          },
        ],
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