# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-01-22T13:58:08.292Z"),
        modifiedAt: new Date("2022-02-14T19:10:20.351Z"),
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
          priceCurrency: "<value>",
          minimumAmount: 989089,
          maximumAmount: 662857,
          presetAmount: 845365,
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-05-02T17:32:01.787Z"),
          modifiedAt: new Date("2022-12-04T01:19:21.934Z"),
          id: "<value>",
          amount: 875693,
          currency: "Argentine Peso",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-05-22T11:00:48.310Z"),
          currentPeriodEnd: new Date("2023-12-01T15:29:51.324Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2022-04-22T12:57:54.328Z"),
          endedAt: new Date("2024-01-08T14:51:30.818Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 801816,
      maxPage: 185313,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |