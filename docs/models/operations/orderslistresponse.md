# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-18T09:41:21.758Z"),
        modifiedAt: new Date("2024-12-31T11:52:56.158Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "<value>",
        amount: 773887,
        taxAmount: 461348,
        refundedAmount: 326520,
        refundedTaxAmount: 373891,
        currency: "Bahamian Dollar",
        billingReason: "subscription_create",
        billingAddress: {
          country: "Chad",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-05-16T12:52:48.837Z"),
          modifiedAt: new Date("2024-08-01T14:13:00.732Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          externalId: "<id>",
          email: "Junior.Cronin54@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Tonga",
          },
          taxId: [
            "gb_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://concerned-spirit.com",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Keeley_Ortiz8@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-02-15T06:07:07.965Z"),
          modifiedAt: new Date("2025-05-19T12:26:17.943Z"),
          id: "<value>",
          name: "<value>",
          description: "tightly meanwhile round gadzooks consign than",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-08-16T02:19:13.665Z"),
          modifiedAt: new Date("2023-12-26T15:44:15.373Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 421528,
          createdAt: new Date("2025-02-08T11:53:51.191Z"),
          modifiedAt: new Date("2024-05-10T07:07:24.823Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-06-24T10:56:26.493Z"),
          endsAt: new Date("2025-11-02T11:24:09.830Z"),
          maxRedemptions: 471167,
          redemptionsCount: 139011,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2025-10-02T13:21:51.360Z"),
          modifiedAt: new Date("2024-01-09T04:15:12.510Z"),
          id: "<value>",
          amount: 22069,
          currency: "Syrian Pound",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2025-05-09T23:06:39.150Z"),
          currentPeriodEnd: new Date("2024-06-06T13:42:10.812Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-11-17T11:14:47.693Z"),
          startedAt: new Date("2025-07-27T20:42:35.660Z"),
          endsAt: new Date("2025-10-08T16:43:45.654Z"),
          endedAt: new Date("2025-02-24T18:26:18.203Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 43142,
      maxPage: 577724,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |