# WebhookOrderUpdatedPayload

Sent when an order is updated.

An order is updated when:

* Its status changes, e.g. from `pending` to `paid`.
* It's refunded, partially or fully.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderUpdatedPayload } from "@polar-sh/sdk/models/components/webhookorderupdatedpayload.js";

let value: WebhookOrderUpdatedPayload = {
  data: {
    createdAt: new Date("2024-02-17T15:02:37.628Z"),
    modifiedAt: new Date("2023-02-23T23:16:53.012Z"),
    id: "<value>",
    metadata: {
      "key": 914756,
    },
    status: "pending",
    paid: true,
    subtotalAmount: 921898,
    discountAmount: 788796,
    netAmount: 20773,
    amount: 366510,
    taxAmount: 799785,
    totalAmount: 290008,
    refundedAmount: 793828,
    refundedTaxAmount: 699917,
    currency: "Tanzanian Shilling",
    billingReason: "subscription_update",
    billingAddress: {
      country: "FR",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-03-21T10:41:52.459Z"),
      modifiedAt: new Date("2025-12-06T00:26:20.147Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-06-06T13:18:25.313Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Emilio.Bartoletti@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-29T13:05:48.610Z"),
      modifiedAt: new Date("2024-01-28T19:57:36.152Z"),
      id: "<value>",
      name: "<value>",
      description: "label an yowza",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-05-20T10:36:39.113Z"),
      modifiedAt: new Date("2025-12-03T04:39:22.952Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 329322,
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 454721,
      createdAt: new Date("2023-11-28T21:55:29.204Z"),
      modifiedAt: new Date("2024-12-07T21:49:39.943Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-03T00:03:49.840Z"),
      endsAt: new Date("2024-12-02T02:38:02.057Z"),
      maxRedemptions: 822422,
      redemptionsCount: 510305,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 1120.02,
      },
      createdAt: new Date("2024-03-01T15:55:06.620Z"),
      modifiedAt: new Date("2025-06-17T22:29:51.277Z"),
      id: "<value>",
      amount: 663027,
      currency: "Colombian Peso",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2025-10-23T00:59:34.514Z"),
      currentPeriodEnd: new Date("2024-06-18T06:26:21.612Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-08-09T08:01:36.123Z"),
      startedAt: new Date("2024-07-22T11:28:57.084Z"),
      endsAt: new Date("2024-05-05T00:44:28.977Z"),
      endedAt: new Date("2025-05-15T09:00:40.080Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "other",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-12-05T12:03:32.458Z"),
        modifiedAt: new Date("2025-06-29T18:06:47.285Z"),
        id: "<value>",
        label: "<value>",
        amount: 279064,
        taxAmount: 99811,
        proration: false,
        productPriceId: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.updated                                        |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |