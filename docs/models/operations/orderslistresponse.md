# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-24T06:43:22.575Z"),
        modifiedAt: new Date("2023-07-29T22:16:58.750Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "<value>",
        amount: 28975,
        taxAmount: 420137,
        refundedAmount: 301381,
        refundedTaxAmount: 773533,
        currency: "Dong",
        billingReason: "purchase",
        billingAddress: {
          country: "Spain",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2023-06-18T21:54:42.100Z"),
          modifiedAt: new Date("2024-12-23T19:24:07.252Z"),
          id: "<value>",
          metadata: {
            "key": 674864,
          },
          email: "Theo_Kertzmann@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Togo",
          },
          taxId: [
            "is_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://shocked-stay.biz/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Henriette91@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-05-13T14:22:50.526Z"),
          modifiedAt: new Date("2025-10-01T22:08:07.697Z"),
          id: "<value>",
          name: "<value>",
          description:
            "gleefully irk perky barring next over once at ugh because",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-12-25T13:15:49.662Z"),
          modifiedAt: new Date("2025-12-27T13:08:11.577Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 59498,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 20573,
          createdAt: new Date("2025-04-17T15:07:16.114Z"),
          modifiedAt: new Date("2023-06-30T02:48:33.424Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-02-22T02:23:51.191Z"),
          endsAt: new Date("2024-10-27T23:47:00.735Z"),
          maxRedemptions: 254390,
          redemptionsCount: 843715,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-08-16T15:58:06.671Z"),
          modifiedAt: new Date("2023-07-16T07:35:44.669Z"),
          id: "<value>",
          amount: 43447,
          currency: "Malaysian Ringgit",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2024-12-25T12:46:52.335Z"),
          currentPeriodEnd: new Date("2023-09-22T12:57:47.488Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-04-09T22:14:51.563Z"),
          startedAt: new Date("2025-10-13T07:38:25.603Z"),
          endsAt: new Date("2025-01-08T05:45:15.386Z"),
          endedAt: new Date("2025-04-07T21:35:58.266Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 630208,
      maxPage: 472170,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |