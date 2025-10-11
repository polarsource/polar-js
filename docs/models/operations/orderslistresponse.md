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
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-09-28T13:54:31.917Z"),
          modifiedAt: new Date("2025-11-14T07:33:56.379Z"),
          metadata: {
            "key": 5274.55,
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
          deletedAt: null,
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": 25688,
          },
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
        discount: null,
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-02-20T20:45:14.664Z"),
          modifiedAt: new Date("2025-08-10T23:49:13.193Z"),
          id: "<value>",
          amount: 375941,
          currency: "Gibraltar Pound",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2025-03-30T19:14:29.604Z"),
          currentPeriodEnd: new Date("2024-01-19T17:21:32.801Z"),
          trialStart: new Date("2023-01-12T02:36:36.955Z"),
          trialEnd: new Date("2023-05-28T14:42:14.625Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-06-13T22:38:11.482Z"),
          startedAt: new Date("2025-10-30T21:43:19.090Z"),
          endsAt: new Date("2024-11-17T19:13:16.335Z"),
          endedAt: new Date("2025-01-04T03:58:49.542Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: null,
        },
        items: [],
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