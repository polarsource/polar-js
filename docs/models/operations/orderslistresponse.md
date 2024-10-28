# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-30T09:14:35.161Z"),
        modifiedAt: new Date("2022-05-25T04:58:30.125Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 740347,
        taxAmount: 821016,
        currency: "New Israeli Sheqel",
        billingReason: "purchase",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Nella14@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://fruitful-typewriter.org/",
        },
        product: {
          createdAt: new Date("2022-08-06T23:39:39.226Z"),
          modifiedAt: new Date("2023-12-21T21:28:33.162Z"),
          id: "<value>",
          name: "<value>",
          description: "supposing immediately terrible",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-08-17T18:12:34.115Z"),
          modifiedAt: new Date("2022-02-16T20:50:29.690Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 367,
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2022-10-28T00:15:47.100Z"),
          modifiedAt: new Date("2023-05-22T11:00:48.310Z"),
          id: "<value>",
          amount: 638363,
          currency: "Burundi Franc",
          recurringInterval: "year",
          status: "canceled",
          currentPeriodStart: new Date("2022-07-23T02:28:15.732Z"),
          currentPeriodEnd: new Date("2023-03-31T23:27:16.931Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-07-24T21:41:06.633Z"),
          endedAt: new Date("2023-05-11T04:19:54.493Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 799830,
      maxPage: 960523,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |