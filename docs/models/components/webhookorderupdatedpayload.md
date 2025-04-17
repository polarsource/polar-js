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
    product: {
      metadata: {
        "key": 3182.28,
      },
      createdAt: new Date("2024-02-01T08:01:12.331Z"),
      modifiedAt: new Date("2023-02-06T07:42:45.738Z"),
      id: "<value>",
      name: "<value>",
      description: "bestride peter among",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 132709,
      createdAt: new Date("2025-04-08T10:33:45.874Z"),
      modifiedAt: new Date("2024-05-31T01:26:27.365Z"),
      id: "<value>",
      metadata: {
        "key": 461170,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-03T04:39:22.952Z"),
      endsAt: new Date("2023-04-09T12:40:32.394Z"),
      maxRedemptions: 329322,
      redemptionsCount: 666519,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2023-02-13T14:10:30.972Z"),
      modifiedAt: new Date("2024-05-13T08:58:14.883Z"),
      id: "<value>",
      amount: 302841,
      currency: "Rial Omani",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2024-12-02T02:38:02.057Z"),
      currentPeriodEnd: new Date("2025-06-20T08:58:03.801Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-07-13T07:04:01.155Z"),
      startedAt: new Date("2025-03-12T14:42:40.765Z"),
      endsAt: new Date("2023-05-03T18:06:28.669Z"),
      endedAt: new Date("2024-03-01T15:55:06.620Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-12-27T16:16:15.365Z"),
        modifiedAt: new Date("2023-07-30T12:37:20.815Z"),
        id: "<value>",
        label: "<value>",
        amount: 471478,
        taxAmount: 535114,
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