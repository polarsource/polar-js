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
        trialStart: new Date("2024-09-10T16:41:08.863Z"),
        trialEnd: new Date("2023-04-17T09:47:01.324Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2023-06-29T23:05:17.353Z"),
        startedAt: new Date("2024-08-07T21:51:13.873Z"),
        endsAt: new Date("2023-01-15T13:37:48.558Z"),
        endedAt: new Date("2023-07-07T13:03:13.224Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        product: {
          id: "<value>",
          createdAt: new Date("2025-05-03T10:12:25.310Z"),
          modifiedAt: new Date("2025-02-27T00:40:12.894Z"),
          trialInterval: "year",
          trialIntervalCount: null,
          name: "<value>",
          description: "huzzah illiterate yuck fooey judgementally coil murky",
          recurringInterval: "day",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-09-27T05:47:49.325Z"),
              modifiedAt: new Date("2024-12-12T23:23:35.523Z"),
              id: "<value>",
              amountType: "metered_unit",
              isArchived: true,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "day",
              priceCurrency: "<value>",
              unitAmount: "<value>",
              capAmount: 378835,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [],
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
        },
        prices: [
          {
            createdAt: new Date("2023-09-06T16:06:48.196Z"),
            modifiedAt: null,
            id: "<value>",
            amountType: "free",
            isArchived: true,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            legacy: true,
          },
        ],
        meters: [
          {
            createdAt: new Date("2025-03-26T21:02:15.917Z"),
            modifiedAt: new Date("2025-11-12T16:59:08.301Z"),
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
        isPolarManaged: true,
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