# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  type: "subscription.active",
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
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    product: {
      createdAt: new Date("2025-05-29T06:38:49.802Z"),
      modifiedAt: new Date("2024-09-23T10:26:31.492Z"),
      id: "<value>",
      name: "<value>",
      description: "hm sense busily outside extremely challenge",
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
          amountType: "custom",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "week",
          priceCurrency: "<value>",
          minimumAmount: 232490,
          maximumAmount: null,
          presetAmount: 922780,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-01-16T01:29:59.311Z"),
          modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
          type: "license_keys",
          description: "out beneath off phew",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {},
          properties: {
            prefix: null,
            expires: {
              ttl: 56931,
              timeframe: "month",
            },
            activations: {
              limit: 936323,
              enableCustomerAdmin: false,
            },
            limitUsage: 702937,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 327832,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2023-11-10T03:13:37.813Z"),
          sizeReadable: "<value>",
          publicUrl: "https://warlike-tinderbox.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-07-28T05:12:23.569Z"),
            modifiedAt: null,
            id: "<value>",
            metadata: {},
            type: "select",
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [],
            },
          },
          order: 650710,
          required: true,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 75972,
      type: "fixed",
      basisPoints: 318562,
      createdAt: new Date("2025-11-15T04:46:36.215Z"),
      modifiedAt: new Date("2025-12-18T11:14:27.994Z"),
      id: "<value>",
      metadata: {},
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-04-27T01:57:17.453Z"),
      endsAt: null,
      maxRedemptions: 416834,
      redemptionsCount: 667167,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-12-08T01:42:40.355Z"),
        modifiedAt: new Date("2023-08-16T05:28:17.026Z"),
        id: "<value>",
        amountType: "custom",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "day",
        priceCurrency: "<value>",
        minimumAmount: 342183,
        maximumAmount: 400141,
        presetAmount: 753226,
        legacy: true,
      },
    ],
    meters: [
      {
        createdAt: new Date("2025-08-12T21:40:54.973Z"),
        modifiedAt: new Date("2024-03-26T12:19:23.472Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": 645986,
          },
          createdAt: new Date("2025-04-20T02:42:18.399Z"),
          modifiedAt: new Date("2023-07-17T20:52:33.753Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "and",
            clauses: [],
          },
          aggregation: {
            func: "min",
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.active                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |