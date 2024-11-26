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
      billingAddress: {
        country: "Guatemala",
      },
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      user: {
        id: "<value>",
        email: "Hiram30@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://ill-fated-fedora.com",
      },
      product: {
        createdAt: new Date("2023-10-31T19:49:06.620Z"),
        modifiedAt: new Date("2024-05-07T17:42:22.245Z"),
        id: "<value>",
        name: "<value>",
        description: "over wherever glittering parched now fashion",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-05-05T05:50:23.743Z"),
        modifiedAt: new Date("2024-08-28T16:46:56.853Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 971620,
        maximumAmount: 123188,
        presetAmount: 396784,
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 388709,
        createdAt: new Date("2024-04-12T21:02:13.589Z"),
        modifiedAt: new Date("2024-12-28T06:54:24.691Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-06-26T13:10:48.126Z"),
        endsAt: new Date("2022-12-24T14:14:54.996Z"),
        maxRedemptions: 747067,
        redemptionsCount: 237041,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2024-06-06T07:40:09.796Z"),
        modifiedAt: new Date("2024-04-21T01:22:42.197Z"),
        id: "<value>",
        amount: 811221,
        currency: "Swedish Krona",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2023-02-18T20:51:07.229Z"),
        currentPeriodEnd: new Date("2022-08-29T18:03:19.269Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-09-15T01:16:52.851Z"),
        endedAt: new Date("2023-01-15T01:37:35.582Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 709870,
    maxPage: 694619,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |