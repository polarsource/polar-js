# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-09-01T01:11:59.221Z"),
    modifiedAt: new Date("2023-07-11T00:50:41.686Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 428147,
    taxAmount: 296892,
    currency: "Philippine Peso",
    billingReason: "subscription_update",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Godfrey61@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://defenseless-reorganisation.com",
    },
    product: {
      createdAt: new Date("2024-10-02T20:36:49.150Z"),
      modifiedAt: new Date("2024-01-26T23:42:41.917Z"),
      id: "<value>",
      name: "<value>",
      description: "since or emphasise",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-03-12T09:29:49.374Z"),
      modifiedAt: new Date("2022-01-17T09:30:26.346Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 478217,
      maximumAmount: 123490,
      presetAmount: 853228,
      recurringInterval: "month",
    },
    subscription: {
      metadata: {
        "key": 47423,
      },
      createdAt: new Date("2022-06-13T11:03:06.616Z"),
      modifiedAt: new Date("2022-01-02T23:04:43.120Z"),
      id: "<value>",
      amount: 360035,
      currency: "Syrian Pound",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2022-07-12T07:15:18.514Z"),
      currentPeriodEnd: new Date("2024-01-13T08:47:31.957Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-03-28T11:02:14.499Z"),
      endedAt: new Date("2023-01-13T00:35:57.498Z"),
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