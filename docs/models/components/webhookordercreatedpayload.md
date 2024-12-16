# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-02-12T14:57:02.739Z"),
    modifiedAt: new Date("2022-01-02T12:23:15.498Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    amount: 318233,
    taxAmount: 858778,
    currency: "North Korean Won",
    billingReason: "subscription_create",
    billingAddress: {
      country: "Germany",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2024-08-23T05:21:26.455Z"),
      modifiedAt: new Date("2024-11-01T17:59:03.627Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Virginie.Padberg21@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Turks and Caicos Islands",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://magnificent-sauerkraut.org/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Hertha.Schumm15@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2022-03-24T14:14:41.831Z"),
      modifiedAt: new Date("2023-04-11T10:20:08.256Z"),
      id: "<value>",
      name: "<value>",
      description: "ham gift harmful",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-08-16T08:12:55.508Z"),
      modifiedAt: new Date("2022-05-04T05:17:17.347Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 212434,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 526907,
      currency: "Kip",
      createdAt: new Date("2022-01-01T14:21:39.818Z"),
      modifiedAt: new Date("2023-04-12T05:46:01.141Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-08-17T05:53:36.757Z"),
      endsAt: new Date("2024-10-18T21:41:24.614Z"),
      maxRedemptions: 215398,
      redemptionsCount: 858338,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2022-06-24T10:10:57.419Z"),
      modifiedAt: new Date("2023-10-26T20:38:50.367Z"),
      id: "<value>",
      amount: 115661,
      currency: "Saudi Riyal",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2023-06-10T09:43:52.274Z"),
      currentPeriodEnd: new Date("2024-09-29T16:33:31.185Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-02-24T02:04:28.906Z"),
      endedAt: new Date("2022-11-18T00:08:26.932Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
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