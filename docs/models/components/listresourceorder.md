# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-07-22T09:07:41.522Z"),
      modifiedAt: new Date("2022-01-05T23:53:43.790Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      amount: 987398,
      taxAmount: 667444,
      currency: "Tala",
      billingReason: "subscription_update",
      billingAddress: {
        country: "Palestine",
      },
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Arlene.Klein38@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://confused-adrenalin.name/",
      },
      product: {
        createdAt: new Date("2022-04-19T10:40:28.754Z"),
        modifiedAt: new Date("2022-06-12T15:14:18.032Z"),
        id: "<value>",
        name: "<value>",
        description: "eek swiftly seldom",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-08-30T03:30:52.625Z"),
        modifiedAt: new Date("2024-06-09T05:53:11.314Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 446595,
        maximumAmount: 5486,
        presetAmount: 218782,
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 1920,
        type: "fixed",
        basisPoints: 225522,
        createdAt: new Date("2024-05-03T15:00:56.296Z"),
        modifiedAt: new Date("2023-03-14T07:48:02.355Z"),
        id: "<value>",
        metadata: {
          "key": 872509,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-09-03T19:15:14.223Z"),
        endsAt: new Date("2023-04-14T21:51:22.912Z"),
        maxRedemptions: 760160,
        redemptionsCount: 234176,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-12-06T00:26:41.692Z"),
        modifiedAt: new Date("2023-12-01T11:14:21.780Z"),
        id: "<value>",
        amount: 657288,
        currency: "Hryvnia",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2024-02-28T05:02:53.225Z"),
        currentPeriodEnd: new Date("2023-05-14T06:24:30.263Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-10-30T09:13:30.404Z"),
        endedAt: new Date("2023-05-09T19:54:41.594Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 127032,
    maxPage: 907301,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |