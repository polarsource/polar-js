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
        billingReason: "subscription_cycle",
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
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        product: {
          metadata: {
            "key": "<value>",
          },
          id: "<value>",
          createdAt: new Date("2024-08-24T11:57:23.137Z"),
          modifiedAt: new Date("2026-02-17T20:12:35.643Z"),
          trialInterval: "day",
          trialIntervalCount: 360581,
          name: "<value>",
          description: "unrealistic bulky hutch",
          visibility: "draft",
          recurringInterval: "month",
          recurringIntervalCount: 663461,
          meterInterval: "year",
          meterIntervalCount: 179577,
          isRecurring: true,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: null,
        subscription: {
          metadata: {
            "key": 4304.92,
          },
          createdAt: new Date("2025-11-25T15:35:37.473Z"),
          modifiedAt: new Date("2026-07-16T19:16:18.193Z"),
          id: "<value>",
          amount: 10000,
          currency: "usd",
          recurringInterval: "week",
          recurringIntervalCount: 44088,
          status: "incomplete",
          currentPeriodStart: new Date("2025-12-04T12:27:30.421Z"),
          currentPeriodEnd: new Date("2024-11-06T22:50:45.782Z"),
          currentMeterPeriodStart: new Date("2026-06-20T09:54:03.220Z"),
          currentMeterPeriodEnd: new Date("2024-08-23T08:31:41.560Z"),
          trialStart: new Date("2026-02-24T20:20:29.546Z"),
          trialEnd: new Date("2026-08-19T01:28:11.741Z"),
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2026-08-26T09:30:03.796Z"),
          startedAt: new Date("2024-12-05T02:57:13.562Z"),
          endsAt: new Date("2026-01-30T05:47:34.515Z"),
          endedAt: new Date("2025-04-08T09:15:27.816Z"),
          pauseAtPeriodEnd: true,
          pausedAt: new Date("2026-08-17T04:59:53.663Z"),
          resumesAt: new Date("2024-08-26T04:01:26.686Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-02-25T16:09:23.428Z"),
            modifiedAt: new Date("2025-06-05T12:32:13.509Z"),
            id: "<value>",
            label: "Pro Plan",
            amount: 10000,
            taxAmount: 720,
            proration: false,
            productPriceId: "<value>",
          },
        ],
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