# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    createdAt: new Date("2024-05-29T10:41:09.880Z"),
    modifiedAt: new Date("2025-04-12T08:34:45.892Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "pending",
    paid: true,
    subtotalAmount: 431843,
    discountAmount: 320748,
    netAmount: 74124,
    amount: 844471,
    taxAmount: 771603,
    totalAmount: 543922,
    refundedAmount: 979325,
    refundedTaxAmount: 72600,
    currency: "Saint Helena Pound",
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
      createdAt: new Date("2023-08-29T07:55:29.814Z"),
      modifiedAt: new Date("2025-05-14T18:51:09.710Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2023-03-06T16:32:50.796Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Lizzie_Rohan83@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-22T10:58:27.936Z"),
      modifiedAt: new Date("2023-11-18T19:17:48.581Z"),
      id: "<value>",
      name: "<value>",
      description:
        "pish lucky whenever happily likewise pace fall ick incidentally gullible",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-02-18T17:02:19.985Z"),
      modifiedAt: new Date("2023-06-09T20:12:21.697Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 225001,
    },
    discount: {
      duration: "once",
      durationInMonths: 104834,
      type: "fixed",
      basisPoints: 937123,
      createdAt: new Date("2023-05-10T08:24:22.560Z"),
      modifiedAt: new Date("2023-06-04T10:29:25.571Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-06T16:47:41.923Z"),
      endsAt: new Date("2024-12-30T21:11:09.271Z"),
      maxRedemptions: 816726,
      redemptionsCount: 607181,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2025-02-15T22:27:20.816Z"),
      modifiedAt: new Date("2023-05-04T13:48:56.579Z"),
      id: "<value>",
      amount: 558410,
      currency: "Russian Ruble",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2025-02-26T21:23:27.554Z"),
      currentPeriodEnd: new Date("2025-06-23T22:42:29.938Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-03-29T12:42:59.626Z"),
      startedAt: new Date("2024-07-15T12:49:54.938Z"),
      endsAt: new Date("2024-05-16T23:47:00.287Z"),
      endedAt: new Date("2024-08-25T03:54:23.094Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2025-10-08T12:20:15.003Z"),
        modifiedAt: new Date("2024-11-07T06:29:39.051Z"),
        id: "<value>",
        label: "<value>",
        amount: 887835,
        taxAmount: 701257,
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