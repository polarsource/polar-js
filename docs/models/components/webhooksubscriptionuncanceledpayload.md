# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  type: "subscription.uncanceled",
  timestamp: new Date("2024-03-28T06:34:59.076Z"),
  data: {
    createdAt: new Date("2025-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2024-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 10000,
    currency: "usd",
    recurringInterval: "week",
    status: "unpaid",
    currentPeriodStart: new Date("2025-04-10T06:28:48.544Z"),
    currentPeriodEnd: new Date("2023-12-12T07:39:41.542Z"),
    trialStart: new Date("2023-03-07T01:03:04.491Z"),
    trialEnd: new Date("2025-06-02T07:09:04.410Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2023-02-17T00:31:21.328Z"),
    startedAt: new Date("2024-08-09T17:28:02.277Z"),
    endsAt: new Date("2024-12-16T10:26:19.141Z"),
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
      createdAt: new Date("2024-10-21T10:07:05.567Z"),
      modifiedAt: new Date("2025-10-06T23:18:15.275Z"),
      metadata: {
        "key": 8022.6,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-09-25T13:44:27.391Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2024-06-29T11:55:37.867Z"),
      modifiedAt: null,
      trialInterval: "week",
      trialIntervalCount: 279574,
      name: "<value>",
      description: "sense busily outside extremely challenge",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      metadata: {},
      prices: [
        {
          createdAt: new Date("2024-12-14T23:57:12.104Z"),
          modifiedAt: new Date("2025-02-07T10:27:56.492Z"),
          id: "<value>",
          amountType: "fixed",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "week",
          priceCurrency: "<value>",
          priceAmount: 350820,
          legacy: true,
        },
      ],
      benefits: [],
      medias: [],
      attachedCustomFields: [],
    },
    discount: {
      duration: "repeating",
      durationInMonths: 13743,
      type: "fixed",
      basisPoints: 1000,
      createdAt: new Date("2023-05-02T03:13:00.458Z"),
      modifiedAt: new Date("2024-11-18T01:03:14.408Z"),
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-16T11:30:48.051Z"),
      endsAt: new Date("2024-12-28T19:07:39.973Z"),
      maxRedemptions: 571035,
      redemptionsCount: 98203,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [],
    meters: [
      {
        createdAt: new Date("2025-07-24T18:19:06.074Z"),
        modifiedAt: new Date("2024-09-19T00:13:29.723Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {},
          createdAt: new Date("2024-10-27T01:55:18.902Z"),
          modifiedAt: new Date("2024-06-09T17:37:57.976Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "and",
            clauses: [
              {
                conjunction: "or",
                clauses: [],
              },
            ],
          },
          aggregation: {},
          organizationId: "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.uncanceled                                                                       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |