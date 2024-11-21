# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-07-30T21:08:39.343Z"),
    modifiedAt: new Date("2023-03-17T17:52:45.018Z"),
    id: "<value>",
    metadata: {
      "key": 56591,
    },
    amount: 14815,
    taxAmount: 743570,
    currency: "Jamaican Dollar",
    billingReason: "purchase",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Lowell37@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://agreeable-chasuble.info/",
    },
    product: {
      createdAt: new Date("2022-07-02T07:43:41.839Z"),
      modifiedAt: new Date("2024-06-20T23:42:15.718Z"),
      id: "<value>",
      name: "<value>",
      description: "too fervently toward among hot rebel per oof so drat",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2022-09-14T19:42:35.208Z"),
      modifiedAt: new Date("2024-09-09T16:28:12.266Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 31870,
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 240358,
      createdAt: new Date("2022-10-28T16:26:05.274Z"),
      modifiedAt: new Date("2023-12-13T17:46:52.061Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-11-29T10:23:36.754Z"),
      endsAt: new Date("2024-02-11T01:04:09.916Z"),
      maxRedemptions: 421915,
      redemptionsCount: 245539,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": 726566,
      },
      createdAt: new Date("2022-05-08T18:50:11.491Z"),
      modifiedAt: new Date("2022-03-07T13:13:15.838Z"),
      id: "<value>",
      amount: 224158,
      currency: "Jordanian Dinar",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2023-08-14T06:11:02.768Z"),
      currentPeriodEnd: new Date("2022-11-15T19:10:02.805Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-01-03T04:14:52.159Z"),
      endedAt: new Date("2023-04-20T19:40:49.785Z"),
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