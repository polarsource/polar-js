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
          createdAt: new Date("2025-11-27T03:11:42.060Z"),
          modifiedAt: new Date("2025-07-23T09:34:01.754Z"),
          trialInterval: "month",
          trialIntervalCount: 18088,
          name: "<value>",
          description: "international even aw stable obvious",
          recurringInterval: "day",
          recurringIntervalCount: 201273,
          isRecurring: true,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-03-21T11:59:31.997Z"),
              modifiedAt: new Date("2023-11-26T22:54:47.144Z"),
              id: "<value>",
              source: "ad_hoc",
              amountType: "custom",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "day",
              priceCurrency: "<value>",
              minimumAmount: 589761,
              maximumAmount: 427546,
              presetAmount: 724747,
              legacy: true,
            },
          ],
          benefits: [],
          medias: [],
          organization: {
            createdAt: new Date("2023-09-17T13:02:40.897Z"),
            modifiedAt: null,
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://peaceful-address.net",
            prorationBehavior: "invoice",
            allowCustomerUpdates: false,
            customerPortalSettings: {
              usage: {
                show: true,
              },
              subscription: {
                updateSeats: false,
                updatePlan: true,
              },
            },
          },
        },
        prices: [
          {
            createdAt: new Date("2023-09-01T11:46:18.306Z"),
            modifiedAt: new Date("2023-08-15T05:35:30.525Z"),
            id: "<value>",
            source: "ad_hoc",
            amountType: "free",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            legacy: true,
          },
        ],
        meters: [],
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |