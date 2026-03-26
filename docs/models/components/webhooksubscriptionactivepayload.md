# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  type: "subscription.active",
  timestamp: new Date("2024-01-04T02:09:35.584Z"),
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
      type: "individual",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-09-11T22:43:44.126Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2025-02-03T10:44:12.276Z"),
      modifiedAt: new Date("2025-01-02T02:01:45.933Z"),
      trialInterval: "week",
      trialIntervalCount: 889423,
      name: "<value>",
      description: "joyously biodegrade beside",
      visibility: "public",
      recurringInterval: "day",
      recurringIntervalCount: 763611,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 543181,
      },
      prices: [
        {
          createdAt: new Date("2024-01-07T14:45:36.833Z"),
          modifiedAt: new Date("2024-05-24T07:08:25.699Z"),
          id: "<value>",
          source: "ad_hoc",
          amountType: "fixed",
          priceCurrency: "<value>",
          taxBehavior: null,
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          priceAmount: 888361,
          legacy: true,
        },
      ],
      benefits: [],
      medias: [],
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
      createdAt: new Date("2026-10-18T04:31:13.670Z"),
      modifiedAt: new Date("2025-07-05T12:20:19.177Z"),
      id: "<value>",
      appliesAt: new Date("2026-11-05T15:07:01.438Z"),
      productId: "<value>",
      seats: 664617,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"subscription.active"*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.active                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |