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
    createdAt: new Date("2024-02-17T15:02:37.628Z"),
    modifiedAt: new Date("2023-02-23T23:16:53.012Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "partially_refunded",
    paid: true,
    subtotalAmount: 92264,
    discountAmount: 921898,
    netAmount: 788796,
    amount: 20773,
    taxAmount: 366510,
    totalAmount: 799785,
    refundedAmount: 290008,
    refundedTaxAmount: 793828,
    currency: "Qatari Rial",
    billingReason: "subscription_update",
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
      createdAt: new Date("2025-05-15T09:36:14.262Z"),
      modifiedAt: new Date("2025-03-21T10:41:52.459Z"),
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
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-05-14T01:44:26.787Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Karl8@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-07-24T01:26:31.832Z"),
      modifiedAt: new Date("2025-12-29T13:05:48.610Z"),
      id: "<value>",
      name: "<value>",
      description: "whoa or aw break proselytise",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-06-20T08:58:03.801Z"),
      modifiedAt: new Date("2024-07-13T07:04:01.155Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 112002,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 663027,
      type: "fixed",
      amount: 471478,
      currency: "Malagasy Ariary",
      createdAt: new Date("2025-10-23T00:59:34.514Z"),
      modifiedAt: new Date("2024-06-18T06:26:21.612Z"),
      id: "<value>",
      metadata: {
        "key": 518685,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-05-05T00:44:28.977Z"),
      endsAt: new Date("2025-05-15T09:00:40.080Z"),
      maxRedemptions: 910760,
      redemptionsCount: 975824,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2023-11-02T20:31:02.604Z"),
      modifiedAt: new Date("2023-04-20T09:26:59.923Z"),
      id: "<value>",
      amount: 712352,
      currency: "Balboa",
      recurringInterval: "month",
      status: "trialing",
      currentPeriodStart: new Date("2024-09-11T01:20:27.146Z"),
      currentPeriodEnd: new Date("2025-05-03T17:01:53.818Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-02-06T23:07:04.772Z"),
      startedAt: new Date("2024-10-18T03:23:35.309Z"),
      endsAt: new Date("2025-07-06T11:20:03.402Z"),
      endedAt: new Date("2025-02-06T00:06:08.120Z"),
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
        createdAt: new Date("2023-10-26T03:28:52.050Z"),
        modifiedAt: new Date("2024-01-28T19:52:09.509Z"),
        id: "<value>",
        label: "<value>",
        amount: 915962,
        taxAmount: 575792,
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