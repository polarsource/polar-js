# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-02-05T04:48:33.398Z"),
    modifiedAt: new Date("2023-09-04T15:41:09.328Z"),
    id: "<value>",
    amount: 247395,
    currency: "Turkish Lira",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-05-20T22:06:23.650Z"),
    currentPeriodEnd: new Date("2024-04-22T12:07:17.975Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-02-07T21:24:40.307Z"),
    startedAt: new Date("2025-06-13T08:43:41.276Z"),
    endsAt: new Date("2024-09-18T13:27:37.485Z"),
    endedAt: new Date("2024-07-21T01:01:03.969Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-09-14T09:50:37.468Z"),
      modifiedAt: new Date("2025-07-27T11:08:54.033Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-01-17T12:02:49.326Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    product: {
      createdAt: new Date("2023-01-14T18:38:50.327Z"),
      modifiedAt: new Date("2025-06-26T14:36:50.648Z"),
      id: "<value>",
      name: "<value>",
      description: "drat ugh strictly now plump merrily until",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 6959.19,
      },
      prices: [
        {
          createdAt: new Date("2023-10-16T16:05:50.889Z"),
          modifiedAt: new Date("2024-01-01T16:45:56.034Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 368763,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-08-04T05:27:35.532Z"),
          modifiedAt: new Date("2023-11-25T00:39:20.443Z"),
          description: "an toward which oh ad aw",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 107.01,
          },
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 965688,
              timeframe: "month",
            },
            activations: {
              limit: 345946,
              enableCustomerAdmin: false,
            },
            limitUsage: 920761,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/include",
          mimeType: "<value>",
          size: 101276,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-29T11:46:55.248Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-25T21:09:11.954Z"),
          sizeReadable: "<value>",
          publicUrl: "https://spanish-mathematics.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-11-18T17:09:26.535Z"),
            modifiedAt: new Date("2024-06-07T18:43:33.711Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 748204,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 322549,
      type: "percentage",
      basisPoints: 633397,
      createdAt: new Date("2025-05-24T06:00:43.127Z"),
      modifiedAt: new Date("2024-03-07T19:03:58.176Z"),
      id: "<value>",
      metadata: {
        "key": 625.91,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-07-15T13:32:18.528Z"),
      endsAt: new Date("2025-01-28T10:55:04.515Z"),
      maxRedemptions: 672383,
      redemptionsCount: 37266,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-05-04T15:17:07.378Z"),
        modifiedAt: new Date("2024-12-27T19:04:22.309Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
    meters: [
      {
        createdAt: new Date("2024-11-22T07:06:20.439Z"),
        modifiedAt: new Date("2025-02-17T17:48:06.743Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2024-10-29T00:52:06.091Z"),
          modifiedAt: new Date("2025-02-10T13:23:40.560Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.revoked                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |