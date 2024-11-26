# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-12-27T12:47:58.923Z"),
        modifiedAt: new Date("2022-01-22T13:58:08.292Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 257821,
        taxAmount: 740245,
        currency: "Norwegian Krone",
        billingReason: "subscription_update",
        billingAddress: {
          country: "Saint Vincent and the Grenadines",
        },
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Mina3@hotmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://shrill-slime.info/",
        },
        product: {
          createdAt: new Date("2022-08-04T17:59:47.205Z"),
          modifiedAt: new Date("2022-04-19T05:46:48.223Z"),
          id: "<value>",
          name: "<value>",
          description: "greatly gosh vengeful gee funny brief where daintily",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-01-07T04:07:48.053Z"),
          modifiedAt: new Date("2023-05-31T11:19:51.638Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 959696,
          maximumAmount: 240292,
          presetAmount: 763140,
          recurringInterval: "year",
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 428810,
          createdAt: new Date("2023-09-01T11:49:11.570Z"),
          modifiedAt: new Date("2023-04-02T23:01:50.436Z"),
          id: "<value>",
          metadata: {
            "key": 695347,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-04-12T18:21:29.910Z"),
          endsAt: new Date("2022-07-02T12:43:21.651Z"),
          maxRedemptions: 851199,
          redemptionsCount: 771078,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-02-18T11:40:55.217Z"),
          modifiedAt: new Date("2024-10-11T22:12:04.430Z"),
          id: "<value>",
          amount: 818078,
          currency: "Naira",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2023-04-18T15:48:23.052Z"),
          currentPeriodEnd: new Date("2024-01-08T04:47:03.376Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-06-27T00:21:02.962Z"),
          endedAt: new Date("2024-07-23T13:07:53.786Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 32775,
      maxPage: 244157,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |