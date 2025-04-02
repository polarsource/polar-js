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
    createdAt: new Date("2023-07-23T02:28:15.732Z"),
    modifiedAt: new Date("2024-03-30T23:27:16.931Z"),
    id: "<value>",
    metadata: {
      "key": 451807,
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 960523,
    discountAmount: 798953,
    netAmount: 77992,
    amount: 804936,
    taxAmount: 66596,
    totalAmount: 235970,
    refundedAmount: 153097,
    refundedTaxAmount: 197519,
    currency: "Moldovan Leu",
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
      createdAt: new Date("2025-11-17T19:50:02.721Z"),
      modifiedAt: new Date("2023-09-21T08:38:57.070Z"),
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
      deletedAt: new Date("2024-05-15T00:28:36.090Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Hildegard.Johnson69@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-07-02T12:43:21.651Z"),
      modifiedAt: new Date("2025-07-21T21:55:28.560Z"),
      id: "<value>",
      name: "<value>",
      description:
        "above hourly symbolise what likewise whether whereas collectivization despite",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-06-15T23:46:35.595Z"),
      modifiedAt: new Date("2023-03-30T04:07:03.909Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      durationInMonths: 761927,
      type: "percentage",
      basisPoints: 806124,
      createdAt: new Date("2023-04-28T14:26:46.798Z"),
      modifiedAt: new Date("2023-01-10T22:18:51.218Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-24T10:38:09.514Z"),
      endsAt: new Date("2024-11-06T08:04:38.587Z"),
      maxRedemptions: 384273,
      redemptionsCount: 703407,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 154425,
      },
      createdAt: new Date("2023-12-09T16:59:37.115Z"),
      modifiedAt: new Date("2025-08-27T05:15:52.024Z"),
      id: "<value>",
      amount: 958533,
      currency: "Cuban Peso",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2025-08-30T07:06:29.227Z"),
      currentPeriodEnd: new Date("2023-07-01T10:30:42.476Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-12-30T21:24:34.925Z"),
      startedAt: new Date("2023-04-03T07:05:35.185Z"),
      endsAt: new Date("2025-12-03T09:17:23.978Z"),
      endedAt: new Date("2025-02-06T21:27:34.191Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2024-09-13T01:40:13.089Z"),
        modifiedAt: new Date("2024-06-06T13:46:59.076Z"),
        id: "<value>",
        label: "<value>",
        amount: 621883,
        taxAmount: 528742,
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