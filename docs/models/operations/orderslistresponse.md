# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-16T23:39:48.423Z"),
        modifiedAt: new Date("2022-11-26T14:19:13.907Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 738325,
        taxAmount: 259341,
        currency: "Yemeni Rial",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "Annette.Zieme31@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://qualified-label.name",
        },
        product: {
          createdAt: new Date("2022-12-15T09:19:38.551Z"),
          modifiedAt: new Date("2023-11-05T03:15:33.344Z"),
          id: "<value>",
          name: "<value>",
          description: "splendid physically where likable bludgeon cleave",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-10-10T02:26:47.325Z"),
          modifiedAt: new Date("2023-08-22T06:08:02.478Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 939096,
          maximumAmount: 129156,
          presetAmount: 73197,
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2022-06-18T21:53:52.884Z"),
          modifiedAt: new Date("2022-09-26T12:13:20.933Z"),
          id: "<value>",
          amount: 592946,
          currency: "Naira",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2023-06-13T08:09:17.911Z"),
          currentPeriodEnd: new Date("2023-05-12T14:37:32.147Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-05-30T16:27:19.575Z"),
          endedAt: new Date("2023-06-01T23:24:52.236Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 758366,
      maxPage: 166481,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |