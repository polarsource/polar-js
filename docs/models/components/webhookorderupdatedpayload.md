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
    createdAt: new Date("2025-12-13T06:53:53.078Z"),
    modifiedAt: new Date("2023-06-07T21:18:57.113Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "pending",
    paid: true,
    subtotalAmount: 163181,
    discountAmount: 696219,
    netAmount: 109569,
    amount: 565845,
    taxAmount: 420233,
    totalAmount: 728474,
    refundedAmount: 900676,
    refundedTaxAmount: 769872,
    currency: "Pa'anga",
    billingReason: "purchase",
    billingAddress: {
      country: "US",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-07-18T21:57:06.884Z"),
      modifiedAt: new Date("2024-03-31T21:14:09.557Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-11-19T10:08:01.911Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Abel25@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-08-15T06:29:52.517Z"),
      modifiedAt: new Date("2025-05-24T02:08:00.227Z"),
      id: "<value>",
      name: "<value>",
      description:
        "collectivization despite till crumble besides even forenenst lazily afore",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-08-29T07:55:29.814Z"),
      modifiedAt: new Date("2025-05-14T18:51:09.710Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 840017,
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 627756,
      createdAt: new Date("2025-09-18T20:39:17.763Z"),
      modifiedAt: new Date("2025-03-31T14:23:29.572Z"),
      id: "<value>",
      metadata: {
        "key": 836548,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-11-01T17:50:00.486Z"),
      endsAt: new Date("2024-08-22T10:58:27.936Z"),
      maxRedemptions: 293617,
      redemptionsCount: 968205,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-01-18T05:58:43.162Z"),
      modifiedAt: new Date("2023-12-24T03:17:08.750Z"),
      id: "<value>",
      amount: 502509,
      currency: "Netherlands Antillian Guilder",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2025-02-11T09:16:32.311Z"),
      currentPeriodEnd: new Date("2024-11-13T18:33:31.564Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-11-13T17:37:04.407Z"),
      startedAt: new Date("2025-11-16T06:34:46.551Z"),
      endsAt: new Date("2025-06-22T09:30:18.789Z"),
      endedAt: new Date("2024-10-28T02:02:29.593Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "switched_service",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2023-01-15T14:16:01.354Z"),
        modifiedAt: new Date("2024-10-26T11:06:47.453Z"),
        id: "<value>",
        label: "<value>",
        amount: 989089,
        taxAmount: 818101,
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