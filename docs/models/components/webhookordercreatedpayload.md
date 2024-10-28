# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-06-25T04:35:26.551Z"),
    modifiedAt: new Date("2024-03-05T22:33:02.662Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 319664,
    taxAmount: 388215,
    currency: "Turkish Lira",
    billingReason: "subscription_cycle",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Kennedi81@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://frilly-complication.biz",
    },
    product: {
      createdAt: new Date("2023-10-19T09:57:54.093Z"),
      modifiedAt: new Date("2023-01-02T15:50:57.660Z"),
      id: "<value>",
      name: "<value>",
      description:
        "redound unpleasant an brr of gosh concerning hm coolly submitter",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-07-28T09:20:22.857Z"),
      modifiedAt: new Date("2023-05-26T18:04:20.819Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 990568,
      recurringInterval: "month",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-03-03T10:59:48.224Z"),
      modifiedAt: new Date("2024-07-04T22:25:13.212Z"),
      id: "<value>",
      amount: 623092,
      currency: "Convertible Marks",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2023-03-11T20:41:59.793Z"),
      currentPeriodEnd: new Date("2024-03-17T00:47:08.664Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-11-20T08:32:51.731Z"),
      endedAt: new Date("2022-01-01T08:03:47.357Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
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