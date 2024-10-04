# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-02-12T05:28:18.955Z"),
    modifiedAt: new Date("2022-09-05T04:07:53.610Z"),
    id: "<value>",
    amount: 778856,
    taxAmount: 399019,
    currency: "Sri Lanka Rupee",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
      id: "<value>",
      email: "Silas17@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://questionable-swanling.com",
    },
    product: {
      createdAt: new Date("2022-11-10T08:00:29.356Z"),
      modifiedAt: new Date("2024-02-28T05:02:53.225Z"),
      id: "<value>",
      name: "<value>",
      description: "a inasmuch oh request merry both",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-12-09T10:05:15.071Z"),
      modifiedAt: new Date("2023-03-09T12:56:03.909Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 812999,
    },
    subscription: {
      createdAt: new Date("2024-05-05T01:49:25.103Z"),
      modifiedAt: new Date("2024-12-31T16:19:45.104Z"),
      id: "<value>",
      amount: 299170,
      currency: "Swiss Franc",
      recurringInterval: "month",
      status: "past_due",
      currentPeriodStart: new Date("2023-01-02T15:50:57.660Z"),
      currentPeriodEnd: new Date("2024-09-20T21:54:34.005Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-03-28T23:23:12.546Z"),
      endedAt: new Date("2024-04-18T05:44:29.115Z"),
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
| `data`                                                                                                 | [components.Order](../../models/components/order.md)                                                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |