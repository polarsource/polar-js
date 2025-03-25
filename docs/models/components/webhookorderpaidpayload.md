# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    createdAt: new Date("2024-01-22T23:17:01.541Z"),
    modifiedAt: new Date("2023-06-19T06:00:22.932Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 958533,
    discountAmount: 207512,
    netAmount: 788469,
    amount: 273349,
    taxAmount: 887132,
    totalAmount: 165545,
    refundedAmount: 665960,
    refundedTaxAmount: 84211,
    currency: "Rand",
    billingReason: "subscription_cycle",
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
      createdAt: new Date("2024-09-13T01:40:13.089Z"),
      modifiedAt: new Date("2024-06-06T13:46:59.076Z"),
      metadata: {
        "key": 528742,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-07-15T07:23:52.507Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Hollie_Blanda@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-09T08:09:09.462Z"),
      modifiedAt: new Date("2023-03-21T13:40:19.741Z"),
      id: "<value>",
      name: "<value>",
      description: "out snow fencing vice yet sushi straw ha nudge",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-12-19T06:40:56.361Z"),
      modifiedAt: new Date("2023-11-09T02:50:43.300Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 930127,
      maximumAmount: 181267,
      presetAmount: 401388,
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 917877,
      createdAt: new Date("2023-03-30T20:02:19.882Z"),
      modifiedAt: new Date("2024-06-10T21:25:18.159Z"),
      id: "<value>",
      metadata: {
        "key": 209602,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-01-16T19:34:44.796Z"),
      endsAt: new Date("2024-05-12T18:21:47.587Z"),
      maxRedemptions: 865212,
      redemptionsCount: 955065,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": 870100,
      },
      createdAt: new Date("2024-10-28T13:20:43.403Z"),
      modifiedAt: new Date("2024-01-18T14:23:36.397Z"),
      id: "<value>",
      amount: 194194,
      currency: "Jamaican Dollar",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2023-06-09T20:12:21.697Z"),
      currentPeriodEnd: new Date("2024-10-19T19:15:03.918Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-09-04T14:26:31.007Z"),
      startedAt: new Date("2025-07-06T17:01:58.788Z"),
      endsAt: new Date("2023-12-25T07:53:20.177Z"),
      endedAt: new Date("2023-04-25T21:33:32.355Z"),
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
        createdAt: new Date("2025-10-24T02:05:02.156Z"),
        modifiedAt: new Date("2023-05-10T08:24:22.560Z"),
        id: "<value>",
        label: "<value>",
        amount: 140909,
        taxAmount: 862666,
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