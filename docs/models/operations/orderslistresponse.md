# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-28T02:31:06.514Z"),
        modifiedAt: new Date("2024-01-10T07:55:53.988Z"),
        id: "<value>",
        metadata: {
          "key": 789654,
        },
        amount: 962380,
        taxAmount: 620966,
        currency: "Boliviano boliviano",
        billingReason: "subscription_cycle",
        billingAddress: {
          country: "Anguilla",
        },
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        user: {
          id: "<value>",
          email: "April.Tromp@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://tepid-harp.org/",
        },
        product: {
          createdAt: new Date("2022-08-06T22:31:18.612Z"),
          modifiedAt: new Date("2024-08-21T22:06:31.667Z"),
          id: "<value>",
          name: "<value>",
          description: "dilate midst whoa around worth",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2022-12-17T08:51:22.729Z"),
          modifiedAt: new Date("2022-01-07T19:48:01.441Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 519466,
          recurringInterval: "year",
        },
        discount: {
          duration: "forever",
          durationInMonths: 877279,
          type: "percentage",
          amount: 263502,
          currency: "Guinea Franc",
          createdAt: new Date("2022-08-09T02:29:28.009Z"),
          modifiedAt: new Date("2022-10-18T01:10:10.562Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-11-30T23:44:32.134Z"),
          endsAt: new Date("2022-10-14T18:21:15.353Z"),
          maxRedemptions: 539732,
          redemptionsCount: 860632,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2022-01-28T06:52:10.820Z"),
          modifiedAt: new Date("2022-10-30T14:10:23.904Z"),
          id: "<value>",
          amount: 940723,
          currency: "Armenian Dram",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2024-02-14T02:44:27.976Z"),
          currentPeriodEnd: new Date("2024-12-08T15:22:09.808Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-10-07T18:53:01.108Z"),
          endedAt: new Date("2022-04-07T23:51:00.199Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 457997,
      maxPage: 783071,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |