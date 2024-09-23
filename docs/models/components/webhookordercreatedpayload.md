# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2024-12-20T12:28:04.015Z"),
    modifiedAt: new Date("2023-12-08T06:42:25.206Z"),
    id: "<value>",
    amount: 365998,
    taxAmount: 102019,
    currency: "Surinam Dollar",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
      id: "<value>",
      email: "Theodora_Buckridge20@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2022-12-17T12:12:43.741Z"),
      modifiedAt: new Date("2024-06-14T05:46:06.678Z"),
      id: "<value>",
      name: "<value>",
      description: "Operative 5th generation implementation",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-09-20T09:43:49.938Z"),
      modifiedAt: new Date("2022-09-04T08:32:34.245Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 847740,
      maximumAmount: 561399,
      presetAmount: 713246,
    },
    subscription: {
      createdAt: new Date("2024-12-12T02:57:22.912Z"),
      modifiedAt: new Date("2023-04-15T07:20:14.969Z"),
      id: "<value>",
      amount: 881067,
      currency: "Afghani",
      recurringInterval: "month",
      status: "past_due",
      currentPeriodStart: new Date("2022-12-08T08:21:53.641Z"),
      currentPeriodEnd: new Date("2022-09-30T02:40:00.548Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-11-01T14:48:41.889Z"),
      endedAt: new Date("2022-12-15T23:16:14.851Z"),
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