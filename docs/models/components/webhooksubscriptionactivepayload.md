# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  type: "subscription.active",
  timestamp: new Date("2023-01-04T02:09:35.584Z"),
  data: {
    createdAt: new Date("2025-08-17T08:38:12.962Z"),
    modifiedAt: new Date("2024-09-27T16:02:48.107Z"),
    id: "<value>",
    amount: 10000,
    currency: "usd",
    recurringInterval: "week",
    recurringIntervalCount: 928876,
    status: "canceled",
    currentPeriodStart: new Date("2024-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2024-08-05T00:54:37.375Z"),
    trialStart: null,
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
      createdAt: new Date("2025-05-06T20:26:26.597Z"),
      modifiedAt: new Date("2023-10-27T12:38:37.731Z"),
      metadata: {
        "key": 612623,
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
      deletedAt: new Date("2023-09-12T22:43:44.126Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      id: "<value>",
      createdAt: new Date("2024-02-04T10:44:12.276Z"),
      modifiedAt: new Date("2024-01-03T02:01:45.933Z"),
      trialInterval: "week",
      trialIntervalCount: 889423,
      name: "<value>",
      description: "joyously biodegrade beside",
      recurringInterval: "year",
      recurringIntervalCount: null,
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 9159.56,
      },
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-11-20T23:12:51.407Z"),
          modifiedAt: new Date("2023-01-07T14:45:36.833Z"),
          type: "meter_credit",
          description: "yowza revoke in heavenly cautious wearily",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          properties: {
            units: 76669,
            rollover: false,
            meterId: "<value>",
          },
        },
      ],
      medias: [],
      attachedCustomFields: [],
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 1000,
      createdAt: new Date("2024-12-20T05:49:14.049Z"),
      modifiedAt: new Date("2024-05-06T01:19:34.835Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-10-09T16:49:56.134Z"),
      endsAt: new Date("2024-03-09T11:07:39.349Z"),
      maxRedemptions: 231585,
      redemptionsCount: 850103,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2025-05-29T06:38:49.802Z"),
        modifiedAt: new Date("2024-09-23T10:26:31.492Z"),
        id: "<value>",
        source: "ad_hoc",
        amountType: "metered_unit",
        isArchived: true,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "week",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 279574,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    meters: [
      {
        createdAt: new Date("2024-06-25T13:41:11.193Z"),
        modifiedAt: new Date("2023-03-11T20:38:31.600Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {},
          createdAt: new Date("2025-01-05T19:13:23.632Z"),
          modifiedAt: new Date("2025-10-09T02:26:38.751Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {
            func: "unique",
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
| `type`                                                                                        | *"subscription.active"*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.active                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |