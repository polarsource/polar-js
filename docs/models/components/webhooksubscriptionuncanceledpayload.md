# WebhookSubscriptionUncanceledPayload

Sent when a customer revokes a pending cancellation.

When a customer cancels with "at period end", they retain access until the
subscription would renew. During this time, they can change their mind and
undo the cancellation. This event is triggered when they do so.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  type: "subscription.uncanceled",
  timestamp: new Date("2025-03-28T06:34:59.076Z"),
  data: {
    createdAt: new Date("2026-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2025-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 10000,
    currency: "usd",
    recurringInterval: "week",
    recurringIntervalCount: 928876,
    status: "canceled",
    currentPeriodStart: new Date("2025-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2024-12-11T07:39:41.542Z"),
    trialStart: new Date("2024-03-06T01:03:04.491Z"),
    trialEnd: new Date("2026-06-02T07:09:04.410Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2024-02-17T00:31:21.328Z"),
    startedAt: new Date("2025-08-09T17:28:02.277Z"),
    endsAt: new Date("2025-12-16T10:26:19.141Z"),
    endedAt: null,
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: null,
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2026-05-06T20:26:26.597Z"),
      modifiedAt: new Date("2024-10-26T12:38:37.731Z"),
      metadata: {
        "key": 612623,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "team",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-02-03T10:44:12.276Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2024-11-20T04:38:53.340Z"),
      modifiedAt: new Date("2026-11-26T03:50:00.293Z"),
      trialInterval: "year",
      trialIntervalCount: 555482,
      name: "<value>",
      description: null,
      visibility: "public",
      recurringInterval: "month",
      recurringIntervalCount: 13550,
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      metadata: {},
      prices: [
        {
          createdAt: new Date("2024-10-19T01:40:55.754Z"),
          modifiedAt: new Date("2024-03-15T20:39:49.840Z"),
          id: "<value>",
          source: "catalog",
          amountType: "free",
          priceCurrency: "<value>",
          taxBehavior: "exclusive",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          legacy: true,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/libexec",
          mimeType: "<value>",
          size: 238122,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2026-06-12T01:48:20.505Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2026-06-20T18:25:36.529Z"),
          sizeReadable: "<value>",
          publicUrl: "https://sophisticated-affect.biz",
        },
      ],
      attachedCustomFields: [],
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 1000,
      createdAt: new Date("2025-04-10T20:35:43.034Z"),
      modifiedAt: new Date("2026-08-17T04:59:53.663Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-07-22T01:23:46.436Z"),
      endsAt: new Date("2024-10-24T03:56:27.220Z"),
      maxRedemptions: 50796,
      redemptionsCount: 458242,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2026-05-29T06:38:49.802Z"),
        modifiedAt: new Date("2025-09-23T10:26:31.492Z"),
        id: "<value>",
        source: "ad_hoc",
        amountType: "metered_unit",
        priceCurrency: "<value>",
        taxBehavior: "location",
        isArchived: false,
        productId: "<value>",
        unitAmount: "<value>",
        capAmount: 535868,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    meters: [],
    pendingUpdate: {
      createdAt: new Date("2024-02-25T01:22:58.741Z"),
      modifiedAt: new Date("2025-03-01T22:24:22.500Z"),
      id: "<value>",
      appliesAt: new Date("2026-04-07T05:04:30.181Z"),
      productId: null,
      seats: 226862,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"subscription.uncanceled"*                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.uncanceled                                                                       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |