# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-01-01T11:35:03.806Z"),
      modifiedAt: new Date("2022-01-20T02:42:32.862Z"),
      id: "<value>",
      metadata: {
        "key": 910324,
      },
      amount: 295960,
      taxAmount: 926867,
      currency: "Naira",
      billingReason: "subscription_cycle",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Verna_Nicolas64@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://paltry-gown.biz",
      },
      product: {
        createdAt: new Date("2022-05-05T14:21:48.338Z"),
        modifiedAt: new Date("2023-10-31T19:49:06.620Z"),
        id: "<value>",
        name: "<value>",
        description:
          "tackle during weighty pretty oof including amidst solidly fooey",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-06-08T02:20:37.651Z"),
        modifiedAt: new Date("2024-04-10T01:04:29.834Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        amount: 219664,
        currency: "Ouguiya",
        createdAt: new Date("2023-01-15T01:37:35.582Z"),
        modifiedAt: new Date("2024-02-18T00:24:52.361Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-07-20T17:13:35.220Z"),
        endsAt: new Date("2024-12-24T22:33:51.471Z"),
        maxRedemptions: 799564,
        redemptionsCount: 141549,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": false,
        },
        createdAt: new Date("2023-09-14T07:43:31.648Z"),
        modifiedAt: new Date("2023-09-10T05:55:09.703Z"),
        id: "<value>",
        amount: 337245,
        currency: "Canadian Dollar",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2024-06-01T15:55:18.464Z"),
        currentPeriodEnd: new Date("2024-03-26T08:49:10.019Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-07-27T23:23:21.475Z"),
        endedAt: new Date("2024-02-11T17:46:51.214Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 167786,
    maxPage: 735959,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |