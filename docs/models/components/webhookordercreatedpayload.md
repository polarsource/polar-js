# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-01-21T17:19:50.907Z"),
    modifiedAt: new Date("2023-10-20T19:28:55.834Z"),
    id: "<value>",
    amount: 897543,
    taxAmount: 654082,
    currency: "Lilangeni",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
      id: "<value>",
      email: "Florence.Ortiz@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2022-11-13T06:32:39.070Z"),
      modifiedAt: new Date("2022-04-04T05:35:49.851Z"),
      id: "<value>",
      name: "<value>",
      description: "Synergized contextually-based array",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      type: "free",
      isHighlighted: false,
    },
    productPrice: {
      createdAt: new Date("2022-12-19T22:20:38.778Z"),
      modifiedAt: new Date("2022-07-20T14:30:27.937Z"),
      id: "<value>",
      priceAmount: 611328,
      priceCurrency: "<value>",
      isArchived: false,
    },
    subscription: {
      createdAt: new Date("2023-03-18T17:11:45.531Z"),
      modifiedAt: new Date("2023-02-07T22:02:19.982Z"),
      id: "<value>",
      status: "canceled",
      currentPeriodStart: new Date("2024-03-06T22:40:47.679Z"),
      currentPeriodEnd: new Date("2023-08-01T11:46:24.442Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-01-14T03:40:29.200Z"),
      endedAt: new Date("2023-06-19T11:50:17.389Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.WebhookOrderCreatedPayloadType](../../models/components/webhookordercreatedpayloadtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.OrderInput](../../models/components/orderinput.md)                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |