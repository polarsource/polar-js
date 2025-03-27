# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-28T14:16:24.495Z"),
        modifiedAt: new Date("2023-09-12T00:09:19.046Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "paid",
        paid: true,
        subtotalAmount: 356437,
        discountAmount: 427119,
        netAmount: 573342,
        amount: 76050,
        taxAmount: 262790,
        totalAmount: 230016,
        refundedAmount: 886329,
        refundedTaxAmount: 741240,
        currency: "Yuan Renminbi",
        billingReason: "subscription_update",
        billingAddress: {
          country: "SE",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-06-09T10:53:32.770Z"),
          modifiedAt: new Date("2025-03-12T19:36:07.618Z"),
          metadata: {
            "key": 601758,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "SE",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-04-16T09:34:44.366Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Glenna.Grant8@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-05-02T10:37:08.569Z"),
          modifiedAt: new Date("2025-02-20T11:21:43.942Z"),
          id: "<value>",
          name: "<value>",
          description:
            "finer SUV whoever cleave and miserly bleakly sure-footed oh sunbathe",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-12-18T20:33:13.071Z"),
          modifiedAt: new Date("2023-05-19T15:12:48.391Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        discount: {
          duration: "forever",
          type: "percentage",
          amount: 337519,
          currency: "Metical",
          createdAt: new Date("2023-12-21T14:29:37.705Z"),
          modifiedAt: new Date("2023-12-07T10:55:45.940Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-11T20:41:07.671Z"),
          endsAt: new Date("2024-11-08T05:49:56.202Z"),
          maxRedemptions: 912808,
          redemptionsCount: 819396,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 616077,
          },
          createdAt: new Date("2024-08-28T14:15:50.951Z"),
          modifiedAt: new Date("2025-01-12T17:24:32.927Z"),
          id: "<value>",
          amount: 424479,
          currency: "Yemeni Rial",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-07-24T16:32:08.913Z"),
          currentPeriodEnd: new Date("2023-06-11T17:24:07.582Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-10-10T01:47:12.756Z"),
          startedAt: new Date("2023-01-21T09:09:17.740Z"),
          endsAt: new Date("2023-04-22T18:24:15.526Z"),
          endedAt: new Date("2023-05-21T20:05:30.836Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-07-12T11:37:36.359Z"),
            modifiedAt: new Date("2024-12-25T08:25:58.170Z"),
            id: "<value>",
            label: "<value>",
            amount: 392377,
            taxAmount: 741968,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 850392,
      maxPage: 372034,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |