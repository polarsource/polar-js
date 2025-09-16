# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user loses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  type: "subscription.revoked",
  timestamp: new Date("2024-02-05T04:48:33.398Z"),
  data: {
    createdAt: new Date("2025-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2024-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 429724,
    currency: "Tala",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-12-12T07:39:41.542Z"),
    currentPeriodEnd: new Date("2023-03-07T01:03:04.491Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2023-02-25T17:33:40.616Z"),
    startedAt: new Date("2023-02-17T00:31:21.328Z"),
    endsAt: new Date("2024-08-09T17:28:02.277Z"),
    endedAt: new Date("2024-12-16T10:26:19.141Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: null,
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
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
      createdAt: new Date("2024-06-29T11:55:37.867Z"),
      modifiedAt: null,
      id: "<value>",
      name: "<value>",
      description: "nor so sleepily scram ascertain ascribe",
      recurringInterval: "day",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {},
      prices: [
        {
          createdAt: new Date("2024-08-30T00:59:04.800Z"),
          modifiedAt: new Date("2023-11-19T07:09:34.058Z"),
          id: "<value>",
          amountType: "free",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
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
      basisPoints: 110523,
      createdAt: new Date("2023-08-01T09:40:42.240Z"),
      modifiedAt: new Date("2023-12-01T00:52:44.646Z"),
      id: "<value>",
      metadata: {
        "key": true,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-19T17:06:47.406Z"),
      endsAt: new Date("2023-04-18T15:08:06.320Z"),
      maxRedemptions: 570348,
      redemptionsCount: 853799,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [],
    meters: [
      {
        createdAt: new Date("2024-02-17T20:04:32.852Z"),
        modifiedAt: new Date("2024-05-28T01:02:31.690Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {},
          createdAt: new Date("2023-04-30T10:26:58.812Z"),
          modifiedAt: new Date("2025-02-17T07:09:21.144Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {
            func: "max",
            property: "<value>",
          },
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
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.revoked                                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |