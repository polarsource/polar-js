# WebhookOrderRefundedPayload

Sent when an order is fully or partially refunded.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookOrderRefundedPayload } from "@polar-sh/sdk/models/components/webhookorderrefundedpayload.js";

let value: WebhookOrderRefundedPayload = {
  data: {
    createdAt: new Date("2023-06-04T11:44:43.665Z"),
    modifiedAt: new Date("2025-11-26T04:51:12.762Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    status: "<value>",
    amount: 617657,
    taxAmount: 42906,
    refundedAmount: 700856,
    refundedTaxAmount: 913285,
    currency: "Moroccan Dirham",
    billingReason: "subscription_create",
    billingAddress: {
      country: "Botswana",
    },
    customerId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    subscriptionId: "<value>",
    checkoutId: "<value>",
    customer: {
      createdAt: new Date("2025-04-07T08:55:07.116Z"),
      modifiedAt: new Date("2025-08-27T23:36:53.188Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Agustina.Morar-Lueilwitz92@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "South Africa",
      },
      taxId: [
        "rs_pib",
      ],
      organizationId: "<value>",
      avatarUrl: "https://biodegradable-integer.info",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Henriette.Cruickshank@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-02-08T12:51:00.758Z"),
      modifiedAt: new Date("2025-09-20T05:30:40.558Z"),
      id: "<value>",
      name: "<value>",
      description:
        "whup fess boo merge tenderly huzzah shanghai ruddy gadzooks",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
    productPrice: {
      createdAt: new Date("2024-02-07T18:04:15.155Z"),
      modifiedAt: new Date("2025-02-13T17:33:21.870Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 649534,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 911451,
      type: "fixed",
      basisPoints: 369523,
      createdAt: new Date("2024-02-21T08:43:45.283Z"),
      modifiedAt: new Date("2024-09-06T06:05:32.228Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-11-11T05:47:44.270Z"),
      endsAt: new Date("2023-01-22T07:56:26.664Z"),
      maxRedemptions: 399222,
      redemptionsCount: 308528,
      organizationId: "<value>",
    },
    subscription: {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2025-08-31T12:55:25.056Z"),
      modifiedAt: new Date("2025-07-31T21:36:43.500Z"),
      id: "<value>",
      amount: 653000,
      currency: "Lempira",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2023-04-19T01:50:49.700Z"),
      currentPeriodEnd: new Date("2025-05-27T23:28:25.141Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-02-15T03:11:35.631Z"),
      startedAt: new Date("2025-06-13T19:08:19.699Z"),
      endsAt: new Date("2025-06-04T02:09:29.897Z"),
      endedAt: new Date("2023-02-25T21:41:46.505Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
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