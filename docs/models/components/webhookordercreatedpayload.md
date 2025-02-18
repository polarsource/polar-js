# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components/webhookordercreatedpayload.js";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-11T00:03:45.342Z"),
    modifiedAt: new Date("2025-10-25T07:53:21.937Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "<value>",
    amount: 458212,
    taxAmount: 757407,
    refundedAmount: 203621,
    refundedTaxAmount: 566312,
    currency: "Yuan Renminbi",
    billingReason: "purchase",
    billingAddress: {
      country: "Botswana",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2024-01-27T23:20:13.821Z"),
      modifiedAt: new Date("2023-01-06T02:26:26.981Z"),
      id: "<value>",
      metadata: {
        "key": 664197,
      },
      email: "Arvilla.Gottlieb96@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Singapore",
      },
      taxId: [
        "kr_brn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://winding-freezing.net",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Gonzalo78@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-10-01T07:24:57.730Z"),
      modifiedAt: new Date("2023-10-12T06:39:45.765Z"),
      id: "<value>",
      name: "<value>",
      description:
        "upwardly rue alarmed beyond quaver shaft rekindle vibration tomorrow",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-02-18T20:23:54.612Z"),
      modifiedAt: new Date("2025-09-27T23:00:42.188Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 982445,
    },
    discount: {
      duration: "forever",
      durationInMonths: 400879,
      type: "percentage",
      amount: 527715,
      currency: "Dominican Peso",
      createdAt: new Date("2023-10-25T08:26:08.475Z"),
      modifiedAt: new Date("2023-10-10T19:59:22.296Z"),
      id: "<value>",
      metadata: {
        "key": 703189,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-06T09:51:30.567Z"),
      endsAt: new Date("2025-01-30T17:16:27.531Z"),
      maxRedemptions: 781193,
      redemptionsCount: 168926,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": 413780,
      },
      createdAt: new Date("2025-01-22T06:32:44.052Z"),
      modifiedAt: new Date("2023-11-21T07:08:33.168Z"),
      id: "<value>",
      amount: 303292,
      currency: "Gourde",
      recurringInterval: "year",
      status: "past_due",
      currentPeriodStart: new Date("2023-03-24T12:05:36.847Z"),
      currentPeriodEnd: new Date("2023-03-27T18:11:07.462Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-02-11T22:19:54.417Z"),
      startedAt: new Date("2025-04-20T04:24:39.583Z"),
      endsAt: new Date("2025-01-24T19:07:43.861Z"),
      endedAt: new Date("2025-02-14T22:46:04.284Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      userId: "<value>",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |