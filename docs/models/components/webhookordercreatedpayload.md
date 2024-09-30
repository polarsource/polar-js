# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2022-01-02T20:03:32.558Z"),
    modifiedAt: new Date("2023-08-08T22:42:00.928Z"),
    id: "<value>",
    amount: 150725,
    taxAmount: 571693,
    currency: "Kwanza",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
      id: "<value>",
      email: "Giovanni6@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://pleased-order.net",
    },
    product: {
      createdAt: new Date("2024-10-22T22:24:04.640Z"),
      modifiedAt: new Date("2024-12-12T19:04:30.975Z"),
      id: "<value>",
      name: "<value>",
      description: "underneath husband tenderly up across knowingly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2022-03-26T21:44:52.578Z"),
      modifiedAt: new Date("2023-06-07T20:09:19.471Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 573379,
      maximumAmount: 749283,
      presetAmount: 923240,
      recurringInterval: "month",
    },
    subscription: {
      createdAt: new Date("2023-11-20T01:54:46.683Z"),
      modifiedAt: new Date("2022-03-07T20:02:10.765Z"),
      id: "<value>",
      amount: 475314,
      currency: "New Taiwan Dollar",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2022-04-08T19:32:02.022Z"),
      currentPeriodEnd: new Date("2023-07-01T10:48:10.648Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-10-03T21:34:19.414Z"),
      endedAt: new Date("2022-03-22T23:42:49.599Z"),
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