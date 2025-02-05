# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-07T16:45:09.899Z"),
        modifiedAt: new Date("2025-03-14T14:49:55.703Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "<value>",
        amount: 432322,
        taxAmount: 579103,
        refundedAmount: 8088,
        refundedTaxAmount: 271660,
        currency: "Tenge",
        billingReason: "purchase",
        billingAddress: {
          country: "Puerto Rico",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2023-04-26T07:49:59.337Z"),
          modifiedAt: new Date("2025-03-03T05:53:22.940Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Terrance24@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Monaco",
          },
          taxId: [
            "kr_brn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://finished-incandescence.com/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Kasey_Nienow51@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-08-22T20:14:42.910Z"),
          modifiedAt: new Date("2023-05-13T14:09:00.250Z"),
          id: "<value>",
          name: "<value>",
          description: "override whose inasmuch weary gently carpool too in",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-12-23T06:42:41.549Z"),
          modifiedAt: new Date("2025-04-25T01:05:15.633Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 728290,
          maximumAmount: 411321,
          presetAmount: 120809,
        },
        discount: {
          duration: "repeating",
          durationInMonths: 335847,
          type: "fixed",
          amount: 531355,
          currency: "Metical",
          createdAt: new Date("2023-05-10T16:07:10.579Z"),
          modifiedAt: new Date("2025-04-19T21:02:01.154Z"),
          id: "<value>",
          metadata: {
            "key": 587138,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-02-12T02:08:42.634Z"),
          endsAt: new Date("2023-08-25T12:08:38.630Z"),
          maxRedemptions: 440469,
          redemptionsCount: 104088,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2023-08-26T14:07:50.921Z"),
          modifiedAt: new Date("2024-01-31T23:06:11.787Z"),
          id: "<value>",
          amount: 33394,
          currency: "Egyptian Pound",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2025-03-13T09:56:57.969Z"),
          currentPeriodEnd: new Date("2023-08-16T12:23:08.303Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-08-04T00:15:59.783Z"),
          startedAt: new Date("2024-10-01T20:58:37.542Z"),
          endsAt: new Date("2023-07-30T10:24:54.251Z"),
          endedAt: new Date("2023-08-05T16:54:18.635Z"),
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
      totalCount: 759559,
      maxPage: 88180,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |