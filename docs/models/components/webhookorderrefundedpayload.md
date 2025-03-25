# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2023-10-06T16:47:41.923Z"),
    modifiedAt: new Date("2024-12-30T21:11:09.271Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "refunded",
    paid: true,
    subtotalAmount: 957489,
    discountAmount: 708883,
    netAmount: 112751,
    amount: 558410,
    taxAmount: 718187,
    totalAmount: 801958,
    refundedAmount: 26321,
    refundedTaxAmount: 718879,
    currency: "Somoni",
    billingReason: "subscription_cycle",
    billingAddress: {
      country: "SE",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-05-16T23:47:00.287Z"),
      modifiedAt: new Date("2024-08-25T03:54:23.094Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-08-31T01:35:36.933Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Annetta.Grant35@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-09-26T03:45:24.901Z"),
      modifiedAt: new Date("2025-01-19T05:27:13.915Z"),
      id: "<value>",
      name: "<value>",
      description: "luck yahoo phooey yuck playfully",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-12-30T00:37:30.921Z"),
      modifiedAt: new Date("2023-11-23T07:18:15.885Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: 964210,
      includedUnits: 780885,
      capAmount: 166324,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    discount: {
      duration: "forever",
      type: "fixed",
      basisPoints: 162073,
      createdAt: new Date("2025-11-21T23:06:53.071Z"),
      modifiedAt: new Date("2023-12-01T05:46:40.326Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-03-24T20:51:47.319Z"),
      endsAt: new Date("2024-05-20T00:57:47.608Z"),
      maxRedemptions: 129619,
      redemptionsCount: 4787,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 113894,
      },
      createdAt: new Date("2025-03-02T08:07:59.742Z"),
      modifiedAt: new Date("2025-02-04T03:15:11.328Z"),
      id: "<value>",
      amount: 176333,
      currency: "East Caribbean Dollar",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2025-02-16T07:41:05.737Z"),
      currentPeriodEnd: new Date("2025-03-13T04:41:38.487Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-01-11T01:55:17.102Z"),
      startedAt: new Date("2024-02-16T15:28:53.569Z"),
      endsAt: new Date("2024-01-29T13:56:15.278Z"),
      endedAt: new Date("2024-11-06T19:31:53.541Z"),
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
        createdAt: new Date("2023-07-09T19:40:29.588Z"),
        modifiedAt: new Date("2025-08-17T05:15:01.934Z"),
        id: "<value>",
        label: "<value>",
        amount: 27653,
        taxAmount: 660339,
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