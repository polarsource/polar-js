# WebhookOrderCreatedPayload

Sent when a new order is created.

A new order is created when:

* A customer purchases a one-time product. In this case, `billing_reason` is set to `purchase`.
* A customer starts a subscription. In this case, `billing_reason` is set to `subscription_create`.
* A subscription is renewed. In this case, `billing_reason` is set to `subscription_cycle`.
* A subscription is upgraded or downgraded with an immediate proration invoice. In this case, `billing_reason` is set to `subscription_update`.

<Warning>The order might not be paid yet, so the `status` field might be `pending`.</Warning>

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components/webhookordercreatedpayload.js";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2023-10-06T17:04:58.025Z"),
    modifiedAt: new Date("2024-12-27T21:37:16.242Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    status: "refunded",
    paid: true,
    subtotalAmount: 467357,
    discountAmount: 1812,
    netAmount: 693089,
    amount: 893426,
    taxAmount: 334746,
    totalAmount: 866654,
    refundedAmount: 493644,
    refundedTaxAmount: 460641,
    currency: "Tanzanian Shilling",
    billingReason: "subscription_update",
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
      createdAt: new Date("2025-03-15T16:51:44.459Z"),
      modifiedAt: new Date("2023-10-23T16:50:39.580Z"),
      metadata: {
        "key": 314817,
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
      deletedAt: new Date("2023-07-02T05:54:26.991Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Elna95@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-18T23:02:56.814Z"),
      modifiedAt: new Date("2024-08-01T02:10:59.019Z"),
      id: "<value>",
      name: "<value>",
      description:
        "for retool pfft feminize cleverly willfully critical beside",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2025-09-03T07:09:45.929Z"),
      modifiedAt: new Date("2024-04-14T03:20:41.585Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 352300,
      maximumAmount: 318189,
      presetAmount: 696203,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 296011,
      createdAt: new Date("2023-05-23T02:58:36.665Z"),
      modifiedAt: new Date("2024-05-14T04:35:11.944Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-02-05T14:53:34.516Z"),
      endsAt: new Date("2024-11-11T13:37:40.112Z"),
      maxRedemptions: 785414,
      redemptionsCount: 94841,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    subscription: {
      metadata: {
        "key": "<value>",
      },
      createdAt: new Date("2025-05-31T04:26:49.388Z"),
      modifiedAt: new Date("2023-06-30T21:23:01.391Z"),
      id: "<value>",
      amount: 993291,
      currency: "Balboa",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2025-10-23T09:15:08.886Z"),
      currentPeriodEnd: new Date("2023-02-15T03:03:57.233Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-08-19T11:28:23.762Z"),
      startedAt: new Date("2023-12-16T11:47:17.463Z"),
      endsAt: new Date("2025-01-07T07:56:21.338Z"),
      endedAt: new Date("2023-04-21T10:31:24.947Z"),
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
        createdAt: new Date("2025-01-09T12:56:54.240Z"),
        modifiedAt: new Date("2023-05-31T11:36:17.716Z"),
        id: "<value>",
        label: "<value>",
        amount: 629238,
        taxAmount: 823215,
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
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | order.created                                        |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |