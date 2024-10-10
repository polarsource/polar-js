# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-14T22:34:09.472Z"),
    modifiedAt: new Date("2023-06-14T20:02:24.167Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 640270,
    taxAmount: 926054,
    currency: "Som",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Claire92@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://natural-spirit.info",
    },
    product: {
      createdAt: new Date("2023-02-18T02:26:35.615Z"),
      modifiedAt: new Date("2024-02-09T18:13:23.683Z"),
      id: "<value>",
      name: "<value>",
      description: "oh like um clonk",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-08-13T14:34:33.232Z"),
      modifiedAt: new Date("2023-08-29T16:35:03.394Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 201848,
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-04-02T11:09:31.783Z"),
      modifiedAt: new Date("2024-09-09T05:02:05.909Z"),
      id: "<value>",
      amount: 979068,
      currency: "Netherlands Antillian Guilder",
      recurringInterval: "month",
      status: "unpaid",
      currentPeriodStart: new Date("2022-02-25T08:29:39.215Z"),
      currentPeriodEnd: new Date("2022-10-26T03:21:02.491Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-08-08T14:15:09.120Z"),
      endedAt: new Date("2024-03-22T06:08:43.995Z"),
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