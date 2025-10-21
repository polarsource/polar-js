# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-07-07T12:47:13.276Z"),
        modifiedAt: new Date("2023-06-15T22:50:06.458Z"),
        status: "paid",
        paid: true,
        subtotalAmount: 10000,
        discountAmount: 1000,
        netAmount: 9000,
        taxAmount: 720,
        totalAmount: 9720,
        appliedBalanceAmount: 0,
        dueAmount: 0,
        refundedAmount: 0,
        refundedTaxAmount: 0,
        currency: "usd",
        billingReason: "subscription_cycle",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        invoiceNumber: "<value>",
        isInvoiceGenerated: true,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        platformFeeAmount: 500,
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-03-15T16:51:44.459Z"),
          modifiedAt: new Date("2024-05-14T04:26:31.780Z"),
          metadata: {},
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-07-02T05:54:26.991Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": 765700,
          },
          id: "<value>",
          createdAt: new Date("2025-09-28T13:54:31.917Z"),
          modifiedAt: new Date("2025-11-14T07:33:56.379Z"),
          trialInterval: "month",
          trialIntervalCount: 709592,
          name: "<value>",
          description: null,
          recurringInterval: "week",
          isRecurring: true,
          isArchived: true,
          organizationId: "<value>",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 1000,
          createdAt: new Date("2024-12-20T05:49:14.049Z"),
          modifiedAt: new Date("2024-05-06T01:19:34.835Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-10-09T16:49:56.134Z"),
          endsAt: new Date("2024-03-09T11:07:39.349Z"),
          maxRedemptions: 231585,
          redemptionsCount: 850103,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {},
          createdAt: new Date("2024-06-27T07:56:50.097Z"),
          modifiedAt: new Date("2024-01-16T07:39:17.060Z"),
          id: "<value>",
          amount: 10000,
          currency: "usd",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2024-04-29T10:34:50.731Z"),
          currentPeriodEnd: new Date("2024-05-26T14:35:18.792Z"),
          trialStart: new Date("2025-03-17T04:48:05.046Z"),
          trialEnd: null,
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2023-05-04T20:55:46.311Z"),
          startedAt: new Date("2025-10-27T14:16:47.398Z"),
          endsAt: new Date("2023-01-05T15:34:29.499Z"),
          endedAt: null,
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-02-16T11:18:39.347Z"),
            modifiedAt: new Date("2023-11-25T23:33:09.773Z"),
            id: "<value>",
            label: "Pro Plan",
            amount: 10000,
            taxAmount: 720,
            proration: false,
            productPriceId: null,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |