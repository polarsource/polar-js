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
        subtotalAmount: 635381,
        discountAmount: 714409,
        netAmount: 515356,
        taxAmount: 431945,
        totalAmount: 881695,
        appliedBalanceAmount: 759912,
        dueAmount: 562703,
        refundedAmount: 534015,
        refundedTaxAmount: 151703,
        currency: "Iceland Krona",
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
          "key": 7184.18,
        },
        platformFeeAmount: 94858,
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-01-25T07:39:50.630Z"),
          modifiedAt: new Date("2025-06-25T21:41:29.268Z"),
          metadata: {
            "key": 7095.92,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: null,
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-03-11T14:18:46.896Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {},
          id: "<value>",
          createdAt: new Date("2023-04-15T23:46:14.322Z"),
          modifiedAt: new Date("2023-08-21T23:53:48.706Z"),
          trialInterval: "month",
          trialIntervalCount: 68538,
          name: "<value>",
          description: "mmm judicious fortunately",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: {
          duration: "once",
          type: "percentage",
          amount: 39398,
          currency: "Czech Koruna",
          createdAt: new Date("2025-09-05T23:46:12.711Z"),
          modifiedAt: new Date("2024-12-31T01:19:30.644Z"),
          id: "<value>",
          metadata: {},
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-02T11:08:34.577Z"),
          endsAt: null,
          maxRedemptions: 595140,
          redemptionsCount: 625174,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 8985.88,
          },
          createdAt: new Date("2025-11-27T09:46:30.985Z"),
          modifiedAt: new Date("2025-01-04T03:11:21.144Z"),
          id: "<value>",
          amount: 585515,
          currency: "Libyan Dinar",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2025-07-30T00:47:59.212Z"),
          currentPeriodEnd: new Date("2023-10-03T18:21:25.457Z"),
          trialStart: new Date("2023-12-02T13:46:26.965Z"),
          trialEnd: null,
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2023-05-25T14:10:13.086Z"),
          startedAt: new Date("2025-01-09T07:48:57.064Z"),
          endsAt: new Date("2023-12-11T00:11:27.725Z"),
          endedAt: new Date("2023-10-28T06:07:23.262Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-08-10T23:49:13.193Z"),
            modifiedAt: new Date("2023-12-03T01:20:11.188Z"),
            id: "<value>",
            label: "<value>",
            amount: 523627,
            taxAmount: 115419,
            proration: false,
            productPriceId: "<value>",
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