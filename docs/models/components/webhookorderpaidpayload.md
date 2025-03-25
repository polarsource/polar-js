# WebhookOrderPaidPayload

Sent when an order is paid.

When you receive this event, the order is fully processed and payment has been received.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderPaidPayload } from "@polar-sh/sdk/models/components/webhookorderpaidpayload.js";

let value: WebhookOrderPaidPayload = {
  data: {
    createdAt: new Date("2024-01-09T07:15:52.390Z"),
    modifiedAt: new Date("2023-06-16T15:26:41.808Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "refunded",
    paid: true,
    subtotalAmount: 967047,
    discountAmount: 874843,
    netAmount: 555663,
    amount: 101284,
    taxAmount: 483501,
    totalAmount: 313695,
    refundedAmount: 512408,
    refundedTaxAmount: 301701,
    currency: "Trinidad and Tobago Dollar",
    billingReason: "subscription_update",
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
      createdAt: new Date("2024-10-19T03:23:15.846Z"),
      modifiedAt: new Date("2024-04-16T11:28:38.206Z"),
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
      deletedAt: new Date("2025-11-29T12:45:09.445Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Collin.Satterfield60@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-06-06T08:51:38.406Z"),
      modifiedAt: new Date("2023-05-03T19:56:19.516Z"),
      id: "<value>",
      name: "<value>",
      description: "ick incidentally gullible decongestant clonk",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-06-14T03:09:08.898Z"),
      modifiedAt: new Date("2024-10-27T11:16:46.409Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 708883,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 801958,
      currency: "Netherlands Antillian Guilder",
      createdAt: new Date("2025-02-26T21:23:27.554Z"),
      modifiedAt: new Date("2025-06-23T22:42:29.938Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-07-15T12:49:54.938Z"),
      endsAt: new Date("2024-05-16T23:47:00.287Z"),
      maxRedemptions: 549419,
      redemptionsCount: 704644,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2024-11-07T06:29:39.051Z"),
      modifiedAt: new Date("2025-08-31T01:35:36.933Z"),
      id: "<value>",
      amount: 701257,
      currency: "Convertible Marks",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2023-11-09T13:14:28.714Z"),
      currentPeriodEnd: new Date("2024-01-26T02:19:05.906Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-12-11T22:43:51.005Z"),
      startedAt: new Date("2024-09-26T03:45:24.901Z"),
      endsAt: new Date("2025-01-19T05:27:13.915Z"),
      endedAt: new Date("2023-10-22T13:11:01.959Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
    },
    items: [
      {
        createdAt: new Date("2023-03-06T10:54:16.543Z"),
        modifiedAt: new Date("2024-09-23T00:36:10.209Z"),
        id: "<value>",
        label: "<value>",
        amount: 186130,
        taxAmount: 9248,
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