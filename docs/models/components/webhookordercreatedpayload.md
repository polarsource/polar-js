# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-10-05T21:44:59.619Z"),
    modifiedAt: new Date("2024-01-21T01:04:50.326Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 611589,
    taxAmount: 896483,
    currency: "Vatu",
    billingReason: "subscription_update",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Gabrielle69@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://bulky-whale.com/",
    },
    product: {
      createdAt: new Date("2023-12-31T21:38:37.650Z"),
      modifiedAt: new Date("2022-02-26T00:22:42.503Z"),
      id: "<value>",
      name: "<value>",
      description: "nervously zowie amid",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-02-02T12:36:51.052Z"),
      modifiedAt: new Date("2024-10-26T12:43:46.379Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 901228,
      maximumAmount: 597835,
      presetAmount: 571214,
      recurringInterval: "month",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-04-25T05:56:55.870Z"),
      modifiedAt: new Date("2022-10-19T11:47:06.902Z"),
      id: "<value>",
      amount: 917917,
      currency: "Djibouti Franc",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2023-06-26T07:05:03.761Z"),
      currentPeriodEnd: new Date("2022-06-13T06:47:36.631Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-07-12T13:59:51.236Z"),
      endedAt: new Date("2023-11-04T22:50:34.224Z"),
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