# WebhookOrderCreatedPayload

Sent when a new order is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookOrderCreatedPayload = {
  data: {
    createdAt: new Date("2025-03-19T00:44:08.150Z"),
    modifiedAt: new Date("2023-05-01T07:46:13.385Z"),
    id: "<value>",
    metadata: {
      "key": 703218,
    },
    status: "<value>",
    amount: 634786,
    taxAmount: 959143,
    refundedAmount: 103298,
    refundedTaxAmount: 867168,
    currency: "Netherlands Antillian Guilder",
    billingReason: "subscription_cycle",
    billingAddress: {
      country: "Hong Kong",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2024-07-28T12:07:56.150Z"),
      modifiedAt: new Date("2024-02-05T03:35:13.798Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Joshua.Hintz8@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Cuba",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://biodegradable-baseboard.org/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Keenan.Klocko@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-01T22:40:10.134Z"),
      modifiedAt: new Date("2024-01-18T23:40:38.791Z"),
      id: "<value>",
      name: "<value>",
      description:
        "pomelo ew absent mmm feline following willfully however ultimately",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2023-06-21T09:30:27.391Z"),
      modifiedAt: new Date("2023-11-30T09:38:32.582Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 75359,
    },
    discount: {
      duration: "once",
      durationInMonths: 568218,
      type: "fixed",
      amount: 596433,
      currency: "Boliviano boliviano",
      createdAt: new Date("2025-12-05T13:38:57.390Z"),
      modifiedAt: new Date("2025-10-19T02:05:23.663Z"),
      id: "<value>",
      metadata: {
        "key": 242178,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-02T10:28:28.527Z"),
      endsAt: new Date("2024-06-13T19:11:00.780Z"),
      maxRedemptions: 39992,
      redemptionsCount: 639705,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": 377406,
      },
      createdAt: new Date("2025-06-06T01:32:10.356Z"),
      modifiedAt: new Date("2025-02-16T02:28:07.481Z"),
      id: "<value>",
      amount: 954334,
      currency: "Gourde",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2024-01-27T17:41:52.928Z"),
      currentPeriodEnd: new Date("2024-11-12T08:17:15.506Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-11-13T06:32:38.998Z"),
      startedAt: new Date("2025-08-16T08:12:55.508Z"),
      endsAt: new Date("2023-05-04T05:17:17.347Z"),
      endedAt: new Date("2023-08-21T19:52:24.382Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      userId: "<value>",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `data`                                               | [components.Order](../../models/components/order.md) | :heavy_check_mark:                                   | N/A                                                  |