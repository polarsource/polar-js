# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2026-07-07T12:47:13.276Z"),
        modifiedAt: new Date("2024-06-14T22:50:06.458Z"),
        status: "refunded",
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
        metadata: {},
        platformFeeAmount: 500,
        platformFeeCurrency: "usd",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-03-24T08:16:45.004Z"),
          modifiedAt: new Date("2026-06-03T00:19:30.299Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          type: "individual",
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2026-10-31T02:47:18.612Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        product: {
          metadata: {
            "key": 948.58,
          },
          id: "<value>",
          createdAt: new Date("2025-08-02T16:31:19.549Z"),
          modifiedAt: new Date("2024-04-19T20:07:27.928Z"),
          trialInterval: "day",
          trialIntervalCount: 893240,
          name: "<value>",
          description: "supposing tall alongside but apropos horst bah until",
          visibility: "draft",
          recurringInterval: "day",
          recurringIntervalCount: 883573,
          isRecurring: false,
          isArchived: true,
          organizationId: "<value>",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 1000,
          createdAt: new Date("2025-04-10T20:35:43.034Z"),
          modifiedAt: new Date("2026-08-17T04:59:53.663Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-07-22T01:23:46.436Z"),
          endsAt: new Date("2024-10-24T03:56:27.220Z"),
          maxRedemptions: 50796,
          redemptionsCount: 458242,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {},
          createdAt: new Date("2026-05-21T17:10:25.414Z"),
          modifiedAt: new Date("2025-07-05T19:43:41.790Z"),
          id: "<value>",
          amount: 10000,
          currency: "usd",
          recurringInterval: "day",
          recurringIntervalCount: 387537,
          status: "active",
          currentPeriodStart: new Date("2024-06-05T22:13:20.253Z"),
          currentPeriodEnd: new Date("2025-10-21T00:56:37.822Z"),
          trialStart: new Date("2026-06-29T10:52:26.601Z"),
          trialEnd: new Date("2025-01-05T10:23:32.832Z"),
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2024-11-20T14:04:25.809Z"),
          startedAt: new Date("2026-03-13T07:31:02.223Z"),
          endsAt: new Date("2026-09-14T14:43:50.641Z"),
          endedAt: new Date("2024-10-20T06:20:10.555Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: null,
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2026-07-29T12:39:40.191Z"),
            modifiedAt: new Date("2026-07-27T15:03:31.368Z"),
            id: "<value>",
            label: "Pro Plan",
            amount: 10000,
            taxAmount: 720,
            proration: false,
            productPriceId: "<value>",
          },
        ],
        description: "Pro Plan",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |