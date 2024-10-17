# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-03-13T11:24:21.889Z"),
    modifiedAt: new Date("2024-01-24T09:32:26.939Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 405428,
    taxAmount: 142953,
    currency: "Namibia Dollar",
    billingReason: "subscription_cycle",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Amya.Moore56@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://indolent-formamide.biz/",
    },
    product: {
      createdAt: new Date("2023-08-03T18:04:30.206Z"),
      modifiedAt: new Date("2023-03-04T00:38:19.575Z"),
      id: "<value>",
      name: "<value>",
      description:
        "svelte acquire under youthfully regarding anti whispered ew quarrelsomely materialise",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-12-22T01:41:48.497Z"),
      modifiedAt: new Date("2022-02-06T06:24:29.220Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-11-28T15:05:53.315Z"),
      modifiedAt: new Date("2024-05-30T07:00:14.412Z"),
      id: "<value>",
      amount: 75004,
      currency: "Dobra",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2023-05-17T17:53:58.910Z"),
      currentPeriodEnd: new Date("2023-07-06T15:48:53.749Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-07-06T16:41:21.693Z"),
      endedAt: new Date("2023-06-15T05:33:14.929Z"),
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