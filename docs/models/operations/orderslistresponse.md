# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-10T23:27:30.195Z"),
        modifiedAt: new Date("2024-03-12T11:55:33.792Z"),
        id: "<value>",
        amount: 846427,
        taxAmount: 58176,
        currency: "Leone",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        user: {
          id: "<value>",
          email: "Magnus.Lindgren40@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://well-lit-season.info",
        },
        product: {
          createdAt: new Date("2023-10-03T09:12:12.639Z"),
          modifiedAt: new Date("2022-11-30T09:41:40.479Z"),
          id: "<value>",
          name: "<value>",
          description: "accredit psst instead staid well-groomed rot woot",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-04-30T10:48:39.079Z"),
          modifiedAt: new Date("2022-03-25T10:55:20.447Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 158059,
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2024-03-20T06:56:16.111Z"),
          modifiedAt: new Date("2023-10-07T16:03:34.360Z"),
          id: "<value>",
          amount: 982804,
          currency: "Lebanese Pound",
          recurringInterval: "month",
          status: "past_due",
          currentPeriodStart: new Date("2023-10-22T20:59:40.329Z"),
          currentPeriodEnd: new Date("2023-10-10T02:26:47.325Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-08-22T06:08:02.478Z"),
          endedAt: new Date("2024-10-26T05:58:24.759Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 129156,
      maxPage: 73197,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |