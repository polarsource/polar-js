# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-02-13T00:39:06.977Z"),
      modifiedAt: new Date("2024-09-20T03:09:49.442Z"),
      id: "<value>",
      metadata: {
        "key": 169341,
      },
      amount: 409633,
      taxAmount: 593679,
      currency: "Denar",
      billingReason: "subscription_update",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Deshawn_Daniel-Kreiger@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://jealous-gripper.name",
      },
      product: {
        createdAt: new Date("2024-03-18T18:15:52.333Z"),
        modifiedAt: new Date("2024-10-24T10:57:13.571Z"),
        id: "<value>",
        name: "<value>",
        description:
          "till other blaspheme blah into translation corrupt because yet",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-08-17T05:51:35.005Z"),
        modifiedAt: new Date("2023-04-25T14:16:21.503Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2022-04-10T19:20:25.958Z"),
        modifiedAt: new Date("2023-09-14T15:29:47.794Z"),
        id: "<value>",
        amount: 7471,
        currency: "Cayman Islands Dollar",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2022-08-12T13:48:54.990Z"),
        currentPeriodEnd: new Date("2022-10-08T04:45:48.967Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-09-28T12:48:41.806Z"),
        endedAt: new Date("2023-12-27T18:50:34.690Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 161312,
    maxPage: 463193,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |