# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-09-09T18:27:38.526Z"),
    modifiedAt: new Date("2022-04-16T13:09:43.732Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 571158,
    taxAmount: 217338,
    currency: "Bhutanese Ngultrum",
    billingReason: "purchase",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    user: {
      id: "<value>",
      email: "Macey_Olson86@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://unlawful-rationale.org/",
    },
    product: {
      createdAt: new Date("2023-03-01T00:50:01.666Z"),
      modifiedAt: new Date("2023-07-01T22:01:44.842Z"),
      id: "<value>",
      name: "<value>",
      description:
        "navigate easily dulcimer impact annually amongst hence or tighten memorable",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-04-11T22:26:51.446Z"),
      modifiedAt: new Date("2023-12-25T07:57:58.923Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 863273,
      recurringInterval: "month",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-10-29T06:16:02.069Z"),
      modifiedAt: new Date("2024-08-27T16:44:25.827Z"),
      id: "<value>",
      amount: 873618,
      currency: "New Zealand Dollar",
      recurringInterval: "month",
      status: "canceled",
      currentPeriodStart: new Date("2022-08-14T23:12:22.090Z"),
      currentPeriodEnd: new Date("2022-11-17T08:26:15.219Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-07-09T06:31:28.422Z"),
      endedAt: new Date("2024-12-29T18:54:48.908Z"),
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