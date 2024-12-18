# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2022-04-13T06:46:54.478Z"),
      modifiedAt: new Date("2022-06-05T10:08:11.440Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 843824,
      taxAmount: 589943,
      currency: "South Sudanese pound",
      billingReason: "subscription_create",
      billingAddress: {
        country: "Nepal",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2024-09-12T04:51:54.984Z"),
        modifiedAt: new Date("2023-08-09T05:09:54.823Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Vito.Ruecker@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "French Polynesia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://writhing-outset.biz/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Duncan_Gislason@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-05-18T22:46:14.781Z"),
        modifiedAt: new Date("2022-09-24T03:44:56.785Z"),
        id: "<value>",
        name: "<value>",
        description:
          "incidentally interestingly gape notwithstanding onto fortunately per",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-03-12T00:00:14.600Z"),
        modifiedAt: new Date("2024-03-09T09:53:49.933Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 484977,
        maximumAmount: 281476,
        presetAmount: 206174,
      },
      discount: {
        duration: "once",
        durationInMonths: 337073,
        type: "percentage",
        basisPoints: 600069,
        createdAt: new Date("2023-04-20T19:22:55.409Z"),
        modifiedAt: new Date("2022-04-25T05:44:28.693Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-02-03T09:20:15.518Z"),
        endsAt: new Date("2023-06-15T03:09:20.689Z"),
        maxRedemptions: 339551,
        redemptionsCount: 374793,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": 683057,
        },
        createdAt: new Date("2023-10-21T15:19:50.360Z"),
        modifiedAt: new Date("2022-03-19T05:59:03.453Z"),
        id: "<value>",
        amount: 157478,
        currency: "Convertible Marks",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2024-07-21T15:37:23.186Z"),
        currentPeriodEnd: new Date("2023-04-02T03:08:30.116Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-11-27T20:23:16.786Z"),
        endedAt: new Date("2024-08-04T12:04:26.255Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 860385,
    maxPage: 367184,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |