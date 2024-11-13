# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-08-22T02:23:53.093Z"),
        modifiedAt: new Date("2023-06-07T08:51:38.406Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 321422,
        taxAmount: 284779,
        currency: "Riel",
        billingReason: "subscription_update",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Gretchen.West91@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://lanky-cruelty.info/",
        },
        product: {
          createdAt: new Date("2023-05-13T18:21:47.587Z"),
          modifiedAt: new Date("2024-08-06T06:31:20.354Z"),
          id: "<value>",
          name: "<value>",
          description:
            "license cheerfully repeatedly replicate jell black till transcend before rarely",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-11-01T01:36:21.641Z"),
          modifiedAt: new Date("2022-06-25T15:28:36.981Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 729612,
          maximumAmount: 609094,
          presetAmount: 185116,
          recurringInterval: "month",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-08-07T04:09:31.431Z"),
          modifiedAt: new Date("2024-10-30T06:52:10.521Z"),
          id: "<value>",
          amount: 644299,
          currency: "Russian Ruble",
          recurringInterval: "month",
          status: "past_due",
          currentPeriodStart: new Date("2022-05-19T11:58:16.990Z"),
          currentPeriodEnd: new Date("2024-08-18T23:53:22.557Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-04-13T19:53:21.496Z"),
          endedAt: new Date("2024-12-30T00:37:30.921Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 297723,
      maxPage: 227017,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |