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
        metadata: {},
        platformFeeAmount: 500,
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-10-23T16:50:39.580Z"),
          modifiedAt: new Date("2023-12-12T00:57:39.847Z"),
          metadata: {
            "key": 166283,
          },
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
          deletedAt: new Date("2025-04-19T04:57:52.293Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": false,
          },
          id: "<value>",
          createdAt: new Date("2024-08-18T23:02:56.814Z"),
          modifiedAt: new Date("2025-02-16T17:05:48.519Z"),
          trialInterval: null,
          trialIntervalCount: 397442,
          name: "<value>",
          description: null,
          recurringInterval: null,
          recurringIntervalCount: 212587,
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 13743,
          type: "fixed",
          basisPoints: 1000,
          createdAt: new Date("2023-05-02T03:13:00.458Z"),
          modifiedAt: new Date("2024-11-18T01:03:14.408Z"),
          id: "<value>",
          metadata: {},
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-02-16T11:30:48.051Z"),
          endsAt: new Date("2024-12-28T19:07:39.973Z"),
          maxRedemptions: 571035,
          redemptionsCount: 98203,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 4420.08,
          },
          createdAt: new Date("2023-12-26T18:24:48.736Z"),
          modifiedAt: new Date("2024-05-24T18:24:21.591Z"),
          id: "<value>",
          amount: 10000,
          currency: "usd",
          recurringInterval: "month",
          recurringIntervalCount: 960,
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-10-11T14:34:45.147Z"),
          currentPeriodEnd: new Date("2024-10-22T20:19:14.907Z"),
          trialStart: new Date("2025-07-09T10:12:20.525Z"),
          trialEnd: null,
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2025-11-22T14:25:51.795Z"),
          startedAt: new Date("2024-04-30T15:21:57.777Z"),
          endsAt: new Date("2023-11-02T13:05:04.577Z"),
          endedAt: new Date("2025-03-15T06:28:35.975Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
        },
        items: [],
        description: "Pro Plan",
      },
    ],
    pagination: {
      totalCount: 279990,
      maxPage: 718643,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |