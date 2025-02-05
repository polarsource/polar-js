# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-25T19:36:23.667Z"),
        modifiedAt: new Date("2025-12-25T02:20:19.631Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "<value>",
        amount: 360860,
        taxAmount: 359870,
        refundedAmount: 465424,
        refundedTaxAmount: 262400,
        currency: "Pataca",
        billingReason: "subscription_update",
        billingAddress: {
          country: "Honduras",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2023-11-04T01:43:26.070Z"),
          modifiedAt: new Date("2025-10-21T04:47:53.381Z"),
          id: "<value>",
          metadata: {
            "key": 232703,
          },
          email: "Jewel_Barton@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Switzerland",
          },
          taxId: [
            "ro_tin",
          ],
          organizationId: "<value>",
          avatarUrl: "https://squeaky-experience.com",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Giovanna.Ritchie@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-01-17T07:46:40.038Z"),
          modifiedAt: new Date("2025-08-13T20:24:17.767Z"),
          id: "<value>",
          name: "<value>",
          description:
            "gracefully pfft taro but roughly despite safe yogurt psst readies",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-02-21T13:36:12.093Z"),
          modifiedAt: new Date("2024-09-20T13:21:44.003Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 224738,
          maximumAmount: 677383,
          presetAmount: 902627,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 831779,
          currency: "East Caribbean Dollar",
          createdAt: new Date("2025-08-16T20:34:49.918Z"),
          modifiedAt: new Date("2024-07-24T08:00:42.998Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-04-24T18:34:12.157Z"),
          endsAt: new Date("2023-10-01T16:51:40.339Z"),
          maxRedemptions: 868229,
          redemptionsCount: 882022,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2025-03-18T12:21:35.318Z"),
          modifiedAt: new Date("2024-01-03T07:20:18.003Z"),
          id: "<value>",
          amount: 860098,
          currency: "Algerian Dinar",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2025-08-26T03:06:52.368Z"),
          currentPeriodEnd: new Date("2023-05-30T01:40:11.174Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-12-11T02:42:16.684Z"),
          startedAt: new Date("2023-09-05T05:28:52.147Z"),
          endsAt: new Date("2025-04-09T06:38:23.918Z"),
          endedAt: new Date("2023-07-21T21:02:29.433Z"),
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
      totalCount: 505990,
      maxPage: 708686,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |