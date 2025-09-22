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
  type: "order.updated",
  timestamp: new Date("2024-02-17T15:02:37.628Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2024-12-27T21:37:16.242Z"),
    modifiedAt: new Date("2025-01-02T09:32:03.168Z"),
    status: "paid",
    paid: true,
    subtotalAmount: 1812,
    discountAmount: 693089,
    netAmount: 893426,
    taxAmount: 334746,
    totalAmount: 866654,
    fromBalanceAmount: 493644,
    refundedAmount: 460641,
    refundedTaxAmount: 875596,
    currency: "Namibia Dollar",
    billingReason: "subscription_create",
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
    isInvoiceGenerated: true,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {},
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-11-29T23:08:09.503Z"),
      modifiedAt: new Date("2025-04-19T04:57:52.293Z"),
      metadata: {
        "key": 9564.92,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-08-01T02:10:59.019Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": "<value>",
      },
      id: "<value>",
      createdAt: new Date("2024-09-10T09:53:33.542Z"),
      modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
      trialInterval: null,
      trialIntervalCount: 212587,
      name: "<value>",
      description: "ferociously sternly gah whoever drat regarding exterior ha",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      durationInMonths: 365530,
      type: "percentage",
      amount: 785414,
      currency: "Bahraini Dinar",
      createdAt: new Date("2023-01-08T01:56:34.831Z"),
      modifiedAt: new Date("2023-06-30T21:23:01.391Z"),
      id: "<value>",
      metadata: {
        "key": 1217.39,
      },
      name: "<value>",
      code: null,
      startsAt: new Date("2023-02-15T03:03:57.233Z"),
      endsAt: new Date("2023-12-16T11:47:17.463Z"),
      maxRedemptions: 100765,
      redemptionsCount: 803957,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {},
      createdAt: new Date("2024-11-20T15:28:12.891Z"),
      modifiedAt: new Date("2023-06-21T16:47:17.985Z"),
      id: "<value>",
      amount: 74671,
      currency: "Uganda Shilling",
      recurringInterval: "week",
      status: "incomplete",
      currentPeriodStart: new Date("2025-02-03T14:23:56.921Z"),
      currentPeriodEnd: new Date("2024-06-20T06:09:26.582Z"),
      trialStart: new Date("2023-03-30T20:20:03.602Z"),
      trialEnd: new Date("2025-11-20T18:15:09.797Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-07-26T03:49:25.286Z"),
      startedAt: new Date("2025-10-27T09:20:54.423Z"),
      endsAt: new Date("2025-02-12T10:41:21.406Z"),
      endedAt: new Date("2024-02-22T13:40:24.594Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: null,
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2023-03-08T18:55:46.865Z"),
        modifiedAt: new Date("2024-05-21T03:01:04.091Z"),
        id: "<value>",
        label: "<value>",
        amount: 864952,
        taxAmount: 346483,
        proration: false,
        productPriceId: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | order.updated                                                                                 |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Order](../../models/components/order.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |