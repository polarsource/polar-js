# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-03T02:25:37.402Z"),
        modifiedAt: new Date("2022-02-23T08:44:58.363Z"),
        id: "<value>",
        amount: 253642,
        taxAmount: 446135,
        currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        user: {
          id: "<value>",
          email: "Nadia_Mueller@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "<value>",
        },
        product: {
          createdAt: new Date("2024-01-12T03:52:56.114Z"),
          modifiedAt: new Date("2024-08-21T15:23:28.345Z"),
          id: "<value>",
          name: "<value>",
          description: "Optimized directional access",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-02-13T10:57:00.909Z"),
          modifiedAt: new Date("2023-08-05T11:15:03.211Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 922112,
        },
        subscription: {
          createdAt: new Date("2022-04-09T02:03:52.245Z"),
          modifiedAt: new Date("2023-03-21T21:54:24.613Z"),
          id: "<value>",
          amount: 24313,
          currency: "Hong Kong Dollar",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2022-08-18T21:15:45.632Z"),
          currentPeriodEnd: new Date("2022-05-07T19:27:28.258Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-09-25T13:05:49.123Z"),
          endedAt: new Date("2024-02-02T00:22:56.047Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 671957,
      maxPage: 948861,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |