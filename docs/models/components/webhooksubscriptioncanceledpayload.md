# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  type: "subscription.canceled",
  timestamp: new Date("2026-09-27T23:56:42.701Z"),
  data: {
    createdAt: new Date("2026-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2025-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 10000,
    currency: "usd",
    recurringInterval: "week",
    recurringIntervalCount: 928876,
    status: "unpaid",
    currentPeriodStart: new Date("2025-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2024-12-11T07:39:41.542Z"),
    currentMeterPeriodStart: new Date("2024-03-06T01:03:04.491Z"),
    currentMeterPeriodEnd: new Date("2026-06-02T07:09:04.410Z"),
    trialStart: null,
    trialEnd: new Date("2024-02-17T00:31:21.328Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2025-01-13T07:41:12.658Z"),
    startedAt: new Date("2024-02-19T12:41:57.376Z"),
    endsAt: new Date("2026-07-30T11:35:44.457Z"),
    endedAt: null,
    pauseAtPeriodEnd: true,
    pausedAt: new Date("2026-08-17T22:26:31.092Z"),
    resumesAt: new Date("2025-10-21T10:07:05.567Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 9111.07,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-09-11T22:43:44.126Z"),
      modifiedAt: new Date("2024-11-20T04:38:53.340Z"),
      metadata: {},
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "team",
      name: "John Doe",
      billingName: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-09-01T19:21:53.135Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2025-08-31T19:24:02.332Z"),
      modifiedAt: null,
      trialInterval: "year",
      trialIntervalCount: 838599,
      name: "<value>",
      description: null,
      visibility: "draft",
      recurringInterval: "week",
      recurringIntervalCount: 935017,
      meterInterval: "week",
      meterIntervalCount: 68303,
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      metadata: {
        "key": 42745,
      },
      prices: [
        {
          createdAt: new Date("2026-09-27T11:50:11.984Z"),
          modifiedAt: null,
          id: "<value>",
          source: "catalog",
          amountType: "fixed",
          priceCurrency: "<value>",
          taxBehavior: "exclusive",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceAmount: 322230,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-11-20T23:12:51.407Z"),
          modifiedAt: new Date("2024-01-07T14:45:36.833Z"),
          type: "slack_shared_channel",
          description: "yowza revoke in heavenly cautious wearily",
          selectable: false,
          deletable: false,
          isDeleted: false,
          organizationId: "<value>",
          metadata: {},
          visibility: "draft",
          properties: {
            slackIntegrationId: "<value>",
            channelNameTemplate: "<value>",
            private: true,
            archiveOnRevoke: true,
          },
          visibilityConfigurable: false,
        },
      ],
      medias: [],
      attachedCustomFields: [],
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 1000,
      currency: "usd",
      amounts: {
        "eur": 900,
        "usd": 1000,
      },
      createdAt: new Date("2025-01-05T02:03:02.818Z"),
      modifiedAt: new Date("2025-04-10T00:28:23.328Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2026-10-05T03:17:34.194Z"),
      endsAt: new Date("2024-04-17T09:15:17.215Z"),
      maxRedemptions: 537607,
      redemptionsCount: 738231,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-11-02T09:55:48.511Z"),
        modifiedAt: new Date("2025-01-19T06:24:47.595Z"),
        id: "<value>",
        source: "catalog",
        amountType: "fixed",
        priceCurrency: "<value>",
        taxBehavior: "inclusive",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        priceAmount: 172685,
        legacy: true,
      },
    ],
    meters: [
      {
        createdAt: new Date("2024-12-01T19:18:27.422Z"),
        modifiedAt: new Date("2025-06-01T20:10:41.749Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": 661.85,
          },
          createdAt: new Date("2025-08-16T16:57:16.542Z"),
          modifiedAt: null,
          id: "<value>",
          name: "<value>",
          unit: "token",
          filter: {
            conjunction: "or",
            clauses: [
              {
                property: "<value>",
                operator: "lt",
                value: false,
              },
            ],
          },
          aggregation: {
            func: "count",
          },
          organizationId: "<value>",
        },
      },
    ],
    pendingUpdate: {
      createdAt: new Date("2024-07-10T15:45:53.558Z"),
      modifiedAt: new Date("2025-08-10T01:22:04.827Z"),
      id: "<value>",
      appliesAt: new Date("2024-09-28T01:26:28.000Z"),
      productId: null,
      seats: 90478,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"subscription.canceled"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.canceled                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |