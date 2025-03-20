# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    createdAt: new Date("2025-12-03T09:17:23.978Z"),
    modifiedAt: new Date("2025-02-06T21:27:34.191Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "refunded",
    paid: true,
    subtotalAmount: 476801,
    discountAmount: 621883,
    netAmount: 528742,
    amount: 469384,
    taxAmount: 759451,
    totalAmount: 178201,
    refundedAmount: 171172,
    refundedTaxAmount: 431843,
    currency: "Guinea Franc",
    billingReason: "purchase",
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
      createdAt: new Date("2025-04-25T16:14:24.819Z"),
      modifiedAt: new Date("2024-08-19T03:18:40.071Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2023-10-19T22:36:24.411Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Dahlia_Considine66@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-06-07T20:03:48.485Z"),
      modifiedAt: new Date("2024-11-19T00:29:10.889Z"),
      id: "<value>",
      name: "<value>",
      description:
        "why pish lucky whenever happily likewise pace fall ick incidentally",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-07-22T17:49:15.783Z"),
      modifiedAt: new Date("2025-08-11T15:06:17.582Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 44443,
      currency: "Belarusian Ruble",
      createdAt: new Date("2024-10-19T19:15:03.918Z"),
      modifiedAt: new Date("2023-09-04T14:26:31.007Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-25T07:53:20.177Z"),
      endsAt: new Date("2023-04-25T21:33:32.355Z"),
      maxRedemptions: 83530,
      redemptionsCount: 937123,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2023-06-04T10:29:25.571Z"),
      modifiedAt: new Date("2025-08-03T11:34:04.757Z"),
      id: "<value>",
      amount: 254288,
      currency: "Kina",
      recurringInterval: "year",
      status: "past_due",
      currentPeriodStart: new Date("2025-11-15T09:46:43.129Z"),
      currentPeriodEnd: new Date("2025-02-15T22:27:20.816Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-05-04T13:48:56.579Z"),
      startedAt: new Date("2024-09-04T00:25:02.418Z"),
      endsAt: new Date("2025-02-26T03:10:42.176Z"),
      endedAt: new Date("2025-05-28T22:40:59.703Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "customer_service",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-02-26T21:23:27.554Z"),
        modifiedAt: new Date("2025-06-23T22:42:29.938Z"),
        id: "<value>",
        label: "<value>",
        amount: 746834,
        taxAmount: 512349,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.paid                                           |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |