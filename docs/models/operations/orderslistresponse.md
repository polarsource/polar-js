# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-06T16:34:44.515Z"),
        modifiedAt: new Date("2023-03-17T19:09:02.033Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "partially_refunded",
        paid: true,
        subtotalAmount: 479578,
        discountAmount: 118732,
        netAmount: 957684,
        amount: 136506,
        taxAmount: 580770,
        totalAmount: 539367,
        refundedAmount: 209995,
        refundedTaxAmount: 133563,
        currency: "Dong",
        billingReason: "purchase",
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
          createdAt: new Date("2024-08-31T11:48:12.407Z"),
          modifiedAt: new Date("2025-02-07T23:46:11.920Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-08-17T20:38:53.044Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Kayla.Schroeder@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-10-29T09:38:00.244Z"),
          modifiedAt: new Date("2024-10-12T04:31:46.536Z"),
          id: "<value>",
          name: "<value>",
          description: "than fence youthful distant fast stake hoof about",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-10-24T05:07:27.834Z"),
          modifiedAt: new Date("2023-08-20T12:45:04.998Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 472182,
          createdAt: new Date("2025-11-17T16:39:06.576Z"),
          modifiedAt: new Date("2023-01-08T20:09:09.347Z"),
          id: "<value>",
          metadata: {
            "key": 204674,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-01-19T17:34:05.944Z"),
          endsAt: new Date("2024-01-06T07:16:09.340Z"),
          maxRedemptions: 496702,
          redemptionsCount: 523527,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2023-12-18T16:53:07.346Z"),
          modifiedAt: new Date("2023-02-23T15:46:03.693Z"),
          id: "<value>",
          amount: 637470,
          currency: "Uzbekistan Sum",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-10-19T03:32:34.569Z"),
          currentPeriodEnd: new Date("2024-01-29T06:25:49.739Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-08-12T13:54:33.928Z"),
          startedAt: new Date("2025-06-26T17:38:57.459Z"),
          endsAt: new Date("2023-04-02T11:06:19.473Z"),
          endedAt: new Date("2023-06-08T09:57:07.070Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_expensive",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-01-07T10:48:48.530Z"),
            modifiedAt: new Date("2025-08-22T11:53:54.364Z"),
            id: "<value>",
            label: "<value>",
            amount: 461339,
            taxAmount: 565818,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 874075,
      maxPage: 284524,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |