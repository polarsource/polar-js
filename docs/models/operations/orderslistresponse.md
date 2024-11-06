# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-14T18:33:31.564Z"),
        modifiedAt: new Date("2024-11-13T17:37:04.407Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 958280,
        taxAmount: 824267,
        currency: "Metical",
        billingReason: "subscription_create",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Lemuel78@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://turbulent-marten.com",
        },
        product: {
          createdAt: new Date("2023-06-14T22:00:04.745Z"),
          modifiedAt: new Date("2022-12-10T19:26:04.923Z"),
          id: "<value>",
          name: "<value>",
          description: "task whenever below certification drat corral snowplow",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2022-04-02T13:11:18.964Z"),
          modifiedAt: new Date("2024-10-24T02:05:02.156Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 118020,
          recurringInterval: "month",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-08-03T11:34:04.757Z"),
          modifiedAt: new Date("2022-10-06T16:47:41.923Z"),
          id: "<value>",
          amount: 665952,
          currency: "Lilangeni",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2024-02-16T22:27:20.816Z"),
          currentPeriodEnd: new Date("2022-05-04T13:48:56.579Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-09-05T00:25:02.418Z"),
          endedAt: new Date("2024-02-27T03:10:42.176Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 801958,
      maxPage: 26321,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |