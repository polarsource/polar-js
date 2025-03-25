# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2025-10-13T19:37:01.195Z"),
    modifiedAt: new Date("2024-08-11T16:56:29.701Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 983203,
    discountAmount: 448601,
    netAmount: 42489,
    amount: 117546,
    taxAmount: 381654,
    totalAmount: 885523,
    refundedAmount: 148038,
    refundedTaxAmount: 823990,
    currency: "Lek",
    billingReason: "subscription_create",
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
      createdAt: new Date("2023-03-08T04:13:18.822Z"),
      modifiedAt: new Date("2024-11-04T18:43:09.812Z"),
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
      deletedAt: new Date("2024-10-29T13:36:21.210Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Ada64@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-06-25T06:38:15.965Z"),
      modifiedAt: new Date("2024-09-29T18:00:24.289Z"),
      id: "<value>",
      name: "<value>",
      description: "oof oof ugh beneath",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-02-16T15:28:53.569Z"),
      modifiedAt: new Date("2024-01-29T13:56:15.278Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 173193,
      maximumAmount: 875200,
      presetAmount: 27653,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 721198,
      createdAt: new Date("2024-06-10T04:45:20.733Z"),
      modifiedAt: new Date("2024-12-06T16:11:58.639Z"),
      id: "<value>",
      metadata: {
        "key": 811519,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-06-05T18:54:47.401Z"),
      endsAt: new Date("2024-07-27T09:05:42.579Z"),
      maxRedemptions: 250520,
      redemptionsCount: 605043,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2024-09-24T16:52:43.387Z"),
      modifiedAt: new Date("2023-07-05T23:12:47.347Z"),
      id: "<value>",
      amount: 159469,
      currency: "Jordanian Dinar",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2023-05-25T05:31:24.787Z"),
      currentPeriodEnd: new Date("2023-02-12T23:23:38.484Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-01-28T15:41:52.745Z"),
      startedAt: new Date("2023-10-25T14:51:31.782Z"),
      endsAt: new Date("2024-05-21T04:35:34.593Z"),
      endedAt: new Date("2025-03-06T23:06:11.778Z"),
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
        createdAt: new Date("2025-09-17T20:09:09.916Z"),
        modifiedAt: new Date("2023-02-08T14:25:18.262Z"),
        id: "<value>",
        label: "<value>",
        amount: 180660,
        taxAmount: 338514,
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