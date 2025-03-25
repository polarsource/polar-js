# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-16T21:15:11.586Z"),
        modifiedAt: new Date("2024-05-18T04:18:48.794Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "refunded",
        paid: true,
        subtotalAmount: 133924,
        discountAmount: 350774,
        netAmount: 534995,
        amount: 792382,
        taxAmount: 852353,
        totalAmount: 591309,
        refundedAmount: 77284,
        refundedTaxAmount: 374960,
        currency: "Hong Kong Dollar",
        billingReason: "subscription_update",
        billingAddress: {
          country: "US",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-10-16T19:50:16.042Z"),
          modifiedAt: new Date("2023-02-21T19:45:47.178Z"),
          metadata: {
            "key": 161442,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-09-19T21:01:06.393Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Kian99@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-11-01T11:45:13.800Z"),
          modifiedAt: new Date("2025-08-16T18:33:54.749Z"),
          id: "<value>",
          name: "<value>",
          description:
            "so brr forgo anxiously snowplow helpless rule generally",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-05-17T12:39:40.779Z"),
          modifiedAt: new Date("2024-01-08T05:27:56.235Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 894150,
          maximumAmount: 605633,
          presetAmount: 712715,
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 271631,
          createdAt: new Date("2024-02-05T17:30:45.548Z"),
          modifiedAt: new Date("2025-07-12T19:46:41.069Z"),
          id: "<value>",
          metadata: {
            "key": 48148,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-01-27T01:33:18.294Z"),
          endsAt: new Date("2025-03-12T10:28:21.358Z"),
          maxRedemptions: 45261,
          redemptionsCount: 995714,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2024-04-04T20:58:22.098Z"),
          modifiedAt: new Date("2023-09-29T08:20:42.032Z"),
          id: "<value>",
          amount: 807596,
          currency: "Saudi Riyal",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2025-11-04T17:11:22.415Z"),
          currentPeriodEnd: new Date("2024-10-18T01:06:28.766Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-08-28T20:25:41.386Z"),
          startedAt: new Date("2024-11-15T05:18:20.127Z"),
          endsAt: new Date("2023-10-24T23:45:18.084Z"),
          endedAt: new Date("2024-02-11T14:07:26.855Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "other",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-12-22T12:29:01.001Z"),
            modifiedAt: new Date("2025-08-05T04:18:33.269Z"),
            id: "<value>",
            label: "<value>",
            amount: 286973,
            taxAmount: 73370,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 135156,
      maxPage: 258318,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |