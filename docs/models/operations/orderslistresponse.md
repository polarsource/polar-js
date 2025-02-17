# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-17T08:36:55.539Z"),
        modifiedAt: new Date("2024-04-22T13:46:31.465Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "<value>",
        amount: 909641,
        taxAmount: 746547,
        refundedAmount: 202049,
        refundedTaxAmount: 425149,
        currency: "Rial Omani",
        billingReason: "subscription_create",
        billingAddress: {
          country: "Canada",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-06-12T12:56:05.172Z"),
          modifiedAt: new Date("2024-10-19T09:58:05.006Z"),
          id: "<value>",
          metadata: {
            "key": 611534,
          },
          email: "Fatima.Doyle45@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Bonaire, Sint Eustatius and Saba",
          },
          taxId: [
            "au_abn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://simplistic-wafer.info/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Llewellyn_Waters15@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-10-12T04:57:23.597Z"),
          modifiedAt: new Date("2025-11-13T20:01:57.814Z"),
          id: "<value>",
          name: "<value>",
          description: "nor since remark gaseous reach",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-08-13T20:24:17.767Z"),
          modifiedAt: new Date("2025-10-05T21:40:56.060Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 601060,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 320788,
          currency: "Lari",
          createdAt: new Date("2025-07-11T04:58:53.619Z"),
          modifiedAt: new Date("2024-05-22T08:02:04.970Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-09-23T10:49:31.106Z"),
          endsAt: new Date("2024-05-02T00:27:52.898Z"),
          maxRedemptions: 947493,
          redemptionsCount: 241322,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2023-07-11T17:41:21.318Z"),
          modifiedAt: new Date("2024-12-05T00:00:18.378Z"),
          id: "<value>",
          amount: 225584,
          currency: "Saint Helena Pound",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2023-04-28T00:46:40.480Z"),
          currentPeriodEnd: new Date("2023-07-27T10:55:02.173Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-04-19T19:23:02.816Z"),
          startedAt: new Date("2024-01-04T05:16:59.047Z"),
          endsAt: new Date("2023-03-18T03:29:56.846Z"),
          endedAt: new Date("2025-02-09T14:02:15.752Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 119193,
      maxPage: 502849,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |