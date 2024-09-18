# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-03-20T02:52:44.320Z"),
    modifiedAt: new Date("2023-02-17T21:48:08.238Z"),
    id: "<value>",
    amount: 895346,
    taxAmount: 966148,
    currency: "Barbados Dollar",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
      id: "<value>",
      email: "Marley24@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2023-08-14T14:23:49.962Z"),
      modifiedAt: new Date("2022-08-26T05:41:30.456Z"),
      id: "<value>",
      name: "<value>",
      description: "Robust clear-thinking portal",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      type: "business",
      isHighlighted: false,
    },
    productPrice: {
      createdAt: new Date("2023-06-14T05:58:52.520Z"),
      modifiedAt: new Date("2023-05-12T14:11:28.020Z"),
      id: "<value>",
      priceCurrency: "<value>",
      isArchived: false,
      priceAmount: 194023,
    },
    subscription: {
      createdAt: new Date("2023-06-26T09:04:00.570Z"),
      modifiedAt: new Date("2022-08-14T07:12:59.166Z"),
      id: "<value>",
      amount: 778172,
      currency: "Pataca",
      recurringInterval: "year",
      status: "active",
      currentPeriodStart: new Date("2022-06-02T10:10:05.347Z"),
      currentPeriodEnd: new Date("2024-12-04T14:07:55.155Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-04-13T21:17:32.168Z"),
      endedAt: new Date("2022-11-26T16:52:21.045Z"),
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