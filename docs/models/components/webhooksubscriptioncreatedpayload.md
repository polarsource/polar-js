# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-26T03:04:18.633Z"),
    modifiedAt: new Date("2025-04-16T09:35:04.807Z"),
    id: "<value>",
    amount: 579990,
    currency: "Kenyan Shilling",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2024-08-05T00:54:37.375Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2025-06-02T07:09:04.410Z"),
    startedAt: null,
    endsAt: new Date("2023-02-17T00:31:21.328Z"),
    endedAt: new Date("2024-08-09T17:28:02.277Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: null,
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-03-21T22:53:47.601Z"),
      modifiedAt: new Date("2025-08-17T22:26:31.092Z"),
      metadata: {
        "key": 5317.17,
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
      deletedAt: new Date("2025-03-15T06:51:53.014Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    product: {
      createdAt: new Date("2025-05-29T06:38:49.802Z"),
      modifiedAt: new Date("2024-09-23T10:26:31.492Z"),
      id: "<value>",
      name: "<value>",
      description: "hm sense busily outside extremely challenge",
      recurringInterval: "year",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      metadata: {},
      prices: [
        {
          createdAt: new Date("2025-04-25T22:33:07.718Z"),
          modifiedAt: new Date("2025-05-05T04:10:48.685Z"),
          id: "<value>",
          isArchived: true,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
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
            func: "avg",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |