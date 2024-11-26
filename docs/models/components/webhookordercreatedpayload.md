# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-05-05T17:22:44.687Z"),
    modifiedAt: new Date("2024-09-14T08:29:02.551Z"),
    id: "<value>",
    metadata: {
      "key": 789841,
    },
    amount: 394238,
    taxAmount: 733157,
    currency: "Turkish Lira",
    billingReason: "subscription_cycle",
    billingAddress: {
      country: "Hong Kong",
    },
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Anahi15@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://liquid-formamide.info",
    },
    product: {
      createdAt: new Date("2023-02-12T01:50:20.635Z"),
      modifiedAt: new Date("2024-08-29T15:55:30.902Z"),
      id: "<value>",
      name: "<value>",
      description: "brr heighten cautiously since outflank tensely",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-07-13T00:28:03.217Z"),
      modifiedAt: new Date("2023-08-22T05:17:14.865Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 710767,
      createdAt: new Date("2022-04-13T01:27:21.623Z"),
      modifiedAt: new Date("2022-10-14T09:08:59.998Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-02-15T15:33:57.970Z"),
      endsAt: new Date("2022-02-26T13:53:56.478Z"),
      maxRedemptions: 344981,
      redemptionsCount: 426373,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-05-18T09:47:38.626Z"),
      modifiedAt: new Date("2023-08-06T10:08:55.763Z"),
      id: "<value>",
      amount: 970819,
      currency: "Tanzanian Shilling",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2022-06-14T13:59:56.674Z"),
      currentPeriodEnd: new Date("2023-12-01T18:54:11.315Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-08-09T20:54:37.953Z"),
      endedAt: new Date("2023-10-05T18:49:29.270Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.WebhookOrderCreatedPayloadType](../../models/components/webhookordercreatedpayloadtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.Order](../../models/components/order.md)                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |