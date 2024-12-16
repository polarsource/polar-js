# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2022-03-02T01:52:31.830Z"),
      modifiedAt: new Date("2024-08-23T10:05:21.181Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      amount: 755297,
      taxAmount: 565831,
      currency: "Guyana Dollar",
      billingReason: "subscription_update",
      billingAddress: {
        country: "Spain",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2022-11-09T23:17:49.242Z"),
        modifiedAt: new Date("2022-08-11T03:22:39.673Z"),
        id: "<value>",
        metadata: {
          "key": 332116,
        },
        email: "Tressa.Swift@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Sweden",
        },
        taxId: [
          "jp_rn",
        ],
        organizationId: "<value>",
        avatarUrl: "https://mundane-descent.com/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Otto.Spencer@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2022-02-13T06:44:42.782Z"),
        modifiedAt: new Date("2023-04-18T05:33:46.328Z"),
        id: "<value>",
        name: "<value>",
        description: "lecture fuss indeed halt",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2022-04-15T17:29:09.966Z"),
        modifiedAt: new Date("2022-05-06T22:23:17.177Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 267095,
        createdAt: new Date("2022-05-21T01:38:02.928Z"),
        modifiedAt: new Date("2023-07-13T02:22:41.507Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-12-15T00:04:42.925Z"),
        endsAt: new Date("2022-02-13T16:01:02.803Z"),
        maxRedemptions: 190895,
        redemptionsCount: 753559,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": 562238,
        },
        createdAt: new Date("2024-06-12T17:38:39.918Z"),
        modifiedAt: new Date("2024-01-01T21:10:10.994Z"),
        id: "<value>",
        amount: 603551,
        currency: "Zloty",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-10-28T20:58:02.846Z"),
        currentPeriodEnd: new Date("2023-02-08T03:46:38.942Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-12-27T07:15:57.889Z"),
        endedAt: new Date("2024-06-18T10:36:53.507Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 926479,
    maxPage: 180463,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |