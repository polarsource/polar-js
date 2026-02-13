# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2026-08-01T11:31:35.018Z"),
        modifiedAt: new Date("2026-12-12T00:45:47.881Z"),
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "day",
        recurringIntervalCount: 955385,
        status: "trialing",
        currentPeriodStart: new Date("2025-06-04T23:43:59.093Z"),
        currentPeriodEnd: new Date("2026-12-12T06:24:34.907Z"),
        trialStart: new Date("2024-07-15T18:10:41.850Z"),
        trialEnd: new Date("2024-05-09T15:41:14.073Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2026-02-07T05:43:32.303Z"),
        startedAt: new Date("2025-02-21T11:50:37.052Z"),
        endsAt: new Date("2025-01-20T21:40:10.018Z"),
        endedAt: null,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        product: {
          id: "<value>",
          createdAt: new Date("2026-11-27T03:11:42.060Z"),
          modifiedAt: new Date("2026-07-23T09:34:01.754Z"),
          trialInterval: "month",
          trialIntervalCount: 18088,
          name: "<value>",
          description: "international even aw stable obvious",
          visibility: "public",
          recurringInterval: null,
          recurringIntervalCount: 201273,
          isRecurring: true,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2026-03-21T11:59:31.997Z"),
              modifiedAt: new Date("2024-11-25T22:54:47.144Z"),
              id: "<value>",
              source: "ad_hoc",
              amountType: "custom",
              priceCurrency: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "week",
              minimumAmount: 825324,
              maximumAmount: 561974,
              presetAmount: 631283,
              legacy: true,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-03-14T00:55:02.549Z"),
              modifiedAt: new Date("2024-09-16T13:02:40.897Z"),
              type: "custom",
              description: "considering speedily for into across extricate",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [],
          organization: {
            createdAt: new Date("2025-06-19T16:24:01.921Z"),
            modifiedAt: new Date("2025-05-12T15:42:22.268Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://joyous-trick.biz",
            prorationBehavior: "invoice",
            allowCustomerUpdates: true,
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
            createdAt: new Date("2026-04-06T10:34:55.074Z"),
            modifiedAt: new Date("2024-05-13T01:30:26.069Z"),
            id: "<value>",
            source: "catalog",
            amountType: "fixed",
            priceCurrency: "<value>",
            isArchived: true,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceAmount: 930959,
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