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
        amount: 185275,
        currency: "CFP Franc",
        recurringInterval: "week",
        status: "active",
        currentPeriodStart: new Date("2023-07-26T13:42:22.696Z"),
        currentPeriodEnd: new Date("2024-04-26T18:30:27.337Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2023-05-10T15:41:14.073Z"),
        startedAt: null,
        endsAt: new Date("2025-02-07T05:43:32.303Z"),
        endedAt: new Date("2024-02-22T11:50:37.052Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: null,
        customerCancellationComment: "<value>",
        product: {
          createdAt: new Date("2023-10-20T22:40:18.625Z"),
          modifiedAt: null,
          id: "<value>",
          name: "<value>",
          description:
            "gee sniff after beneath tomatillo cautiously reassuringly tangible exotic deliberately",
          recurringInterval: "week",
          isRecurring: true,
          isArchived: true,
          organizationId: "<value>",
          prices: [],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-01-02T09:29:19.773Z"),
              modifiedAt: new Date("2025-02-05T18:27:31.976Z"),
              type: "downloadables",
              description:
                "considering superior about toward fortunately eek internationalize wedge enrage",
              selectable: true,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [],
          organization: {
            createdAt: new Date("2025-01-01T18:22:02.718Z"),
            modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: null,
            email: "Hannah_Price@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "github",
                url: "https://scratchy-midwife.net/",
              },
            ],
            status: "denied",
            detailsSubmittedAt: new Date("2023-09-01T05:50:45.596Z"),
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
          },
        },
        prices: [],
        meters: [
          {
            createdAt: new Date("2023-09-30T02:03:52.048Z"),
            modifiedAt: new Date("2025-02-16T18:07:59.288Z"),
            id: "<value>",
            consumedUnits: 25,
            creditedUnits: 100,
            amount: 0,
            meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
            meter: {
              createdAt: new Date("2025-10-13T05:14:46.856Z"),
              modifiedAt: null,
              id: "<value>",
              name: "<value>",
            },
          },
        ],
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