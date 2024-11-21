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
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Russell_Wuckert@hotmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://zealous-ceramic.net/",
        },
        product: {
          createdAt: new Date("2024-06-18T19:59:01.294Z"),
          modifiedAt: new Date("2023-02-13T20:49:34.820Z"),
          id: "<value>",
          name: "<value>",
          description: "vastly capsize supposing immediately",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-03-13T10:16:08.156Z"),
          modifiedAt: new Date("2024-09-02T13:29:38.345Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 989089,
          maximumAmount: 662857,
          presetAmount: 845365,
        },
        discount: {
          duration: "once",
          durationInMonths: 875693,
          type: "fixed",
          basisPoints: 367,
          createdAt: new Date("2022-10-28T00:15:47.100Z"),
          modifiedAt: new Date("2023-05-22T11:00:48.310Z"),
          id: "<value>",
          metadata: {
            "key": 101770,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-01-08T14:51:30.818Z"),
          endsAt: new Date("2024-05-28T18:57:52.442Z"),
          maxRedemptions: 185313,
          redemptionsCount: 415125,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": 451807,
          },
          createdAt: new Date("2024-05-26T14:43:35.408Z"),
          modifiedAt: new Date("2024-11-18T17:34:52.177Z"),
          id: "<value>",
          amount: 798953,
          currency: "Taka",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2022-09-16T14:57:54.048Z"),
          currentPeriodEnd: new Date("2022-06-17T19:03:38.787Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2022-08-05T11:32:33.311Z"),
          endedAt: new Date("2023-08-03T00:48:03.968Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 671690,
      maxPage: 470321,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |