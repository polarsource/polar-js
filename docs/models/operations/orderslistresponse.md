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
        billingReason: "subscription_update",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        invoiceNumber: "<value>",
        isInvoiceGenerated: false,
        receiptNumber: "<value>",
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": false,
        },
        platformFeeAmount: 500,
        platformFeeCurrency: "usd",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-09-15T15:31:44.390Z"),
          modifiedAt: new Date("2026-06-24T21:12:20.594Z"),
          metadata: {
            "key": 6072.74,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          type: "team",
          name: "John Doe",
          billingName: "John Doe",
          billingAddress: null,
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-06-13T12:26:18.091Z"),
          firstUserEventAt: new Date("2025-10-02T10:08:37.346Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        product: null,
        discount: {
          duration: "repeating",
          durationInMonths: 666109,
          type: "fixed",
          basisPoints: 1000,
          createdAt: new Date("2024-10-05T07:02:31.892Z"),
          modifiedAt: new Date("2026-10-02T11:08:34.577Z"),
          id: "<value>",
          metadata: {},
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-11-16T04:34:50.055Z"),
          endsAt: new Date("2025-09-03T17:18:10.818Z"),
          maxRedemptions: 898588,
          maxRedemptionsPerCustomer: 833113,
          redemptionsCount: 669829,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 937.97,
          },
          createdAt: new Date("2026-07-30T00:47:59.212Z"),
          modifiedAt: new Date("2024-10-02T18:21:25.457Z"),
          id: "<value>",
          amount: 10000,
          currency: "usd",
          recurringInterval: "year",
          recurringIntervalCount: 306180,
          status: "incomplete",
          currentPeriodStart: new Date("2025-04-30T04:55:43.054Z"),
          currentPeriodEnd: new Date("2024-08-11T08:44:58.861Z"),
          currentMeterPeriodStart: new Date("2025-07-14T11:06:57.535Z"),
          currentMeterPeriodEnd: new Date("2025-12-28T03:40:43.738Z"),
          trialStart: new Date("2026-07-14T05:29:25.216Z"),
          trialEnd: new Date("2024-07-15T19:35:20.571Z"),
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2024-02-05T19:38:49.892Z"),
          startedAt: new Date("2026-07-27T17:43:41.871Z"),
          endsAt: new Date("2025-04-16T19:39:05.792Z"),
          endedAt: new Date("2024-11-11T19:17:09.365Z"),
          pauseAtPeriodEnd: false,
          pausedAt: new Date("2024-02-18T07:41:25.454Z"),
          resumesAt: null,
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: "<value>",
        },
        items: [],
        description: "Pro Plan",
        refundableAmount: 9000,
        refundableTaxAmount: 720,
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