# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-03T00:52:46.065Z"),
        modifiedAt: new Date("2025-08-16T20:34:49.918Z"),
        id: "<value>",
        metadata: {
          "key": 977311,
        },
        amount: 437750,
        taxAmount: 249728,
        currency: "New Taiwan Dollar",
        billingReason: "subscription_update",
        billingAddress: {
          country: "Austria",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2025-03-18T12:21:35.318Z"),
          modifiedAt: new Date("2024-01-03T07:20:18.003Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Kraig.Tillman64@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Lucia",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://measly-procurement.name",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Lela.Mayer@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-09-08T04:02:06.778Z"),
          modifiedAt: new Date("2024-11-09T09:39:27.651Z"),
          id: "<value>",
          name: "<value>",
          description: "councilman blend hm woot colon",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-10-28T12:28:00.902Z"),
          modifiedAt: new Date("2024-04-18T21:02:57.554Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 810964,
          maximumAmount: 758587,
          presetAmount: 46738,
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          basisPoints: 295674,
          createdAt: new Date("2024-10-31T14:02:30.154Z"),
          modifiedAt: new Date("2024-05-08T14:23:40.928Z"),
          id: "<value>",
          metadata: {
            "key": 561768,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-03-14T14:49:55.703Z"),
          endsAt: new Date("2023-12-18T14:49:29.698Z"),
          maxRedemptions: 432322,
          redemptionsCount: 579103,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-10-25T17:44:56.080Z"),
          modifiedAt: new Date("2024-06-16T19:37:34.527Z"),
          id: "<value>",
          amount: 180507,
          currency: "Russian Ruble",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2025-06-20T03:32:55.037Z"),
          currentPeriodEnd: new Date("2025-01-21T09:49:56.291Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-10-02T07:42:31.304Z"),
          startedAt: new Date("2025-02-18T23:58:07.398Z"),
          endsAt: new Date("2023-08-31T10:08:04.333Z"),
          endedAt: new Date("2025-06-19T22:07:58.036Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 831539,
      maxPage: 588852,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |