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
      recurringIntervalCount: null,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      metadata: {
        "key": 3270.53,
      },
      prices: [
        {
          createdAt: new Date("2024-08-30T00:59:04.800Z"),
          modifiedAt: new Date("2023-11-19T07:09:34.058Z"),
          id: "<value>",
          source: "catalog",
          amountType: "free",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "day",
          legacy: true,
        },
      ],
      benefits: [],
      medias: [],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-03-25T19:23:20.887Z"),
            modifiedAt: null,
            id: "<value>",
            metadata: {},
            type: "text",
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 110523,
          required: true,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 300165,
      type: "fixed",
      amount: 1000,
      currency: "usd",
      createdAt: new Date("2023-05-29T14:09:28.797Z"),
      modifiedAt: null,
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-13T13:43:10.078Z"),
      endsAt: new Date("2024-08-25T16:24:44.378Z"),
      maxRedemptions: 731444,
      redemptionsCount: 88175,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-02-29T07:21:00.425Z"),
        modifiedAt: new Date("2024-03-19T17:06:47.406Z"),
        id: "<value>",
        source: "ad_hoc",
        amountType: "custom",
        isArchived: true,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 572089,
        maximumAmount: 606825,
        presetAmount: 479685,
        legacy: true,
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.active                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |