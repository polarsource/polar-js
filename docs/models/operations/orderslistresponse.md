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
        fromBalanceAmount: 759912,
        refundedAmount: 562703,
        refundedTaxAmount: 534015,
        currency: "Belize Dollar",
        billingReason: "subscription_create",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        isInvoiceGenerated: false,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": 6072.74,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-11-29T23:08:09.503Z"),
          modifiedAt: new Date("2025-04-19T04:57:52.293Z"),
          metadata: {
            "key": 9564.92,
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
          deletedAt: new Date("2024-08-01T02:10:59.019Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-09-10T09:53:33.542Z"),
          modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
          id: "<value>",
          name: "<value>",
          description: null,
          recurringInterval: "day",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 730131,
          currency: "Argentine Peso",
          createdAt: new Date("2023-09-25T16:35:51.122Z"),
          modifiedAt: new Date("2023-02-17T22:27:48.746Z"),
          id: "<value>",
          metadata: {
            "key": 2446.34,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-01-16T07:39:17.060Z"),
          endsAt: new Date("2024-07-16T03:03:58.095Z"),
          maxRedemptions: 328255,
          redemptionsCount: 466795,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-10-14T15:57:55.645Z"),
          modifiedAt: new Date("2023-05-04T20:55:46.311Z"),
          id: "<value>",
          amount: 602962,
          currency: "CFA Franc BEAC",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2023-02-14T05:20:48.992Z"),
          currentPeriodEnd: new Date("2025-11-22T14:25:51.795Z"),
          cancelAtPeriodEnd: true,
          canceledAt: new Date("2023-11-02T20:45:43.683Z"),
          startedAt: new Date("2025-11-30T18:32:35.930Z"),
          endsAt: new Date("2023-06-16T10:04:40.672Z"),
          endedAt: new Date("2025-03-27T15:38:39.644Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
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