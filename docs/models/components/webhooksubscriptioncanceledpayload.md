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
    status: "canceled",
    currentPeriodStart: new Date("2025-07-08T14:40:56.923Z"),
    currentPeriodEnd: new Date("2025-08-05T00:54:37.375Z"),
    trialStart: null,
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
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          priceAmount: 479731,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-06-04T18:32:44.963Z"),
          modifiedAt: new Date("2026-04-07T05:04:30.181Z"),
          type: "custom",
          description: "cap permafrost treble",
          selectable: true,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          properties: {
            note: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/private/tmp",
          mimeType: "<value>",
          size: 16733,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2025-07-11T05:48:37.631Z"),
          sizeReadable: "<value>",
          publicUrl: "https://impressionable-viability.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-09-17T23:34:10.111Z"),
            modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
            id: "<value>",
            metadata: {},
            type: "select",
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 797456,
          required: false,
        },
      ],
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
        isArchived: true,
        productId: "<value>",
        unitAmount: "<value>",
        capAmount: null,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    meters: [
      {
        createdAt: new Date("2026-03-20T19:43:53.594Z"),
        modifiedAt: new Date("2024-01-29T13:10:13.616Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {},
          createdAt: new Date("2026-01-05T19:13:23.632Z"),
          modifiedAt: new Date("2026-10-09T02:26:38.751Z"),
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
| `type`                                                                                        | *"subscription.canceled"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | subscription.canceled                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Subscription](../../models/components/subscription.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |