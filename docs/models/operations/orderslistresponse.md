# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-31T12:03:59.290Z"),
        modifiedAt: new Date("2024-01-30T10:01:58.731Z"),
        id: "<value>",
        metadata: {
          "key": 262400,
        },
        status: "<value>",
        amount: 558907,
        taxAmount: 831639,
        refundedAmount: 400361,
        refundedTaxAmount: 280175,
        currency: "Tala",
        billingReason: "subscription_cycle",
        billingAddress: {
          country: "Cyprus",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-01-16T11:15:45.831Z"),
          modifiedAt: new Date("2024-07-03T00:47:42.245Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Meredith58@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "United Arab Emirates",
          },
          taxId: [
            "de_stn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://appropriate-graffiti.com/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Ivy87@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-10-20T18:16:25.401Z"),
          modifiedAt: new Date("2025-02-05T06:52:12.699Z"),
          id: "<value>",
          name: "<value>",
          description: "phooey proofread schlep",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-02-09T14:02:15.752Z"),
          modifiedAt: new Date("2023-05-29T17:59:10.197Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 119193,
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          durationInMonths: 670567,
          type: "fixed",
          amount: 685160,
          currency: "Bhutanese Ngultrum",
          createdAt: new Date("2025-06-24T03:29:30.577Z"),
          modifiedAt: new Date("2024-09-21T04:25:18.763Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-11-17T02:53:54.791Z"),
          endsAt: new Date("2024-02-01T09:53:39.231Z"),
          maxRedemptions: 387749,
          redemptionsCount: 807446,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-07-09T18:22:31.091Z"),
          modifiedAt: new Date("2024-11-20T23:20:38.345Z"),
          id: "<value>",
          amount: 743422,
          currency: "Turkish Lira",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2025-10-05T03:54:29.465Z"),
          currentPeriodEnd: new Date("2024-04-06T08:26:53.676Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-05-14T04:56:14.610Z"),
          startedAt: new Date("2023-11-21T10:30:33.033Z"),
          endsAt: new Date("2025-10-14T21:38:28.286Z"),
          endedAt: new Date("2025-12-28T21:23:05.624Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_expensive",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 334548,
      maxPage: 962996,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |