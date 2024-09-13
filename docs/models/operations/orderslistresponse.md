# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-18T11:51:15.355Z"),
        modifiedAt: new Date("2024-08-09T11:11:16.431Z"),
        id: "<value>",
        amount: 37559,
        taxAmount: 162493,
        currency: "Moldovan Leu",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        user: {
          id: "<value>",
          email: "Catalina_Casper86@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "<value>",
        },
        product: {
          createdAt: new Date("2024-06-03T19:43:04.556Z"),
          modifiedAt: new Date("2023-03-27T21:22:45.979Z"),
          id: "<value>",
          name: "<value>",
          description: "Organic bifurcated groupware",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          type: "free",
          isHighlighted: false,
        },
        productPrice: {
          createdAt: new Date("2024-12-12T21:39:05.983Z"),
          modifiedAt: new Date("2024-02-04T09:09:59.151Z"),
          id: "<value>",
          priceAmount: 373291,
          priceCurrency: "<value>",
          isArchived: false,
        },
        subscription: {
          createdAt: new Date("2023-05-13T01:59:11.980Z"),
          modifiedAt: new Date("2023-04-06T09:39:44.896Z"),
          id: "<value>",
          status: "canceled",
          currentPeriodStart: new Date("2022-02-25T10:40:10.987Z"),
          currentPeriodEnd: new Date("2024-08-07T13:19:14.531Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-02-05T14:00:33.863Z"),
          endedAt: new Date("2024-12-05T04:07:04.276Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 16627,
      maxPage: 855804,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |