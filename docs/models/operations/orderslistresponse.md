# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-22T01:59:26.650Z"),
        modifiedAt: new Date("2023-09-23T15:13:56.903Z"),
        id: "<value>",
        amount: 467109,
        taxAmount: 753043,
        currency: "UAE Dirham",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        user: {
          id: "<value>",
          email: "Eudora.Sanford@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://oval-whack.info",
        },
        product: {
          createdAt: new Date("2022-05-30T09:02:00.896Z"),
          modifiedAt: new Date("2024-01-23T04:12:00.187Z"),
          id: "<value>",
          name: "<value>",
          description: "ferociously where loyally beyond onto if carefully",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2022-06-15T01:33:14.819Z"),
          modifiedAt: new Date("2023-10-13T20:06:24.868Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 537623,
          maximumAmount: 198406,
          presetAmount: 603038,
        },
        subscription: {
          createdAt: new Date("2023-01-08T21:26:32.595Z"),
          modifiedAt: new Date("2022-09-19T06:06:16.828Z"),
          id: "<value>",
          amount: 510401,
          currency: "Pound Sterling",
          recurringInterval: "month",
          status: "unpaid",
          currentPeriodStart: new Date("2022-06-20T17:10:43.731Z"),
          currentPeriodEnd: new Date("2022-11-04T12:38:19.545Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-02-28T04:59:02.197Z"),
          endedAt: new Date("2022-10-27T21:46:55.611Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 210710,
      maxPage: 771146,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |