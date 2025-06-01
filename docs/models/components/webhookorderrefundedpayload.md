# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    id: "<value>",
    createdAt: new Date("2025-12-02T13:09:55.292Z"),
    modifiedAt: new Date("2024-06-08T06:31:37.268Z"),
    status: "pending",
    paid: true,
    subtotalAmount: 755882,
    discountAmount: 691867,
    netAmount: 813163,
    amount: 80093,
    taxAmount: 124836,
    totalAmount: 870409,
    refundedAmount: 607202,
    refundedTaxAmount: 274984,
    currency: "Vatu",
    billingReason: "subscription_create",
    billingName: "<value>",
    billingAddress: {
      country: "FR",
    },
    isInvoiceGenerated: false,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 366992,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-03-02T08:02:47.952Z"),
      modifiedAt: new Date("2023-06-27T19:35:37.141Z"),
      metadata: {
        "key": 4956.59,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-08-22T15:17:26.403Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    product: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2024-09-12T22:40:16.807Z"),
      modifiedAt: new Date("2025-03-18T20:55:04.371Z"),
      id: "<value>",
      name: "<value>",
      description: "uh-huh interestingly aha scram formal footrest unlined",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    discount: {
      duration: "once",
      durationInMonths: 845142,
      type: "fixed",
      amount: 6379,
      currency: "Bhutanese Ngultrum",
      createdAt: new Date("2024-11-11T17:27:37.323Z"),
      modifiedAt: new Date("2025-07-27T02:58:28.772Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-13T04:57:18.043Z"),
      endsAt: new Date("2024-10-04T00:09:28.667Z"),
      maxRedemptions: 485021,
      redemptionsCount: 506655,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 997788,
      },
      createdAt: new Date("2025-03-31T04:42:37.083Z"),
      modifiedAt: new Date("2025-09-11T00:59:08.220Z"),
      id: "<value>",
      amount: 527115,
      currency: "Afghani",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2023-06-27T13:07:47.586Z"),
      currentPeriodEnd: new Date("2023-06-13T11:42:14.423Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-02-04T11:13:38.578Z"),
      startedAt: new Date("2023-10-15T17:19:52.586Z"),
      endsAt: new Date("2024-10-28T11:07:53.631Z"),
      endedAt: new Date("2024-12-15T14:19:46.440Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "switched_service",
      customerCancellationComment: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-12-06T03:02:48.494Z"),
        modifiedAt: new Date("2025-07-19T18:42:44.445Z"),
        id: "<value>",
        label: "<value>",
        amount: 546628,
        taxAmount: 698303,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.refunded                                       |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |