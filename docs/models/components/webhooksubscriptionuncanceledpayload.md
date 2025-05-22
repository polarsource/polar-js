# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2024-03-28T06:34:59.076Z"),
    modifiedAt: new Date("2025-07-18T01:35:08.724Z"),
    id: "<value>",
    amount: 466736,
    currency: "Vatu",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2025-07-31T07:06:53.500Z"),
    currentPeriodEnd: new Date("2024-07-27T06:53:18.285Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-02-13T22:22:38.828Z"),
    startedAt: new Date("2024-11-02T06:58:48.343Z"),
    endsAt: new Date("2025-02-25T16:35:10.400Z"),
    endedAt: new Date("2024-08-21T21:07:38.998Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 4856.58,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-04-24T02:28:11.133Z"),
      modifiedAt: new Date("2024-06-08T11:38:30.288Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-12-30T06:44:16.769Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    product: {
      createdAt: new Date("2025-09-02T21:13:52.814Z"),
      modifiedAt: new Date("2025-08-11T16:30:44.897Z"),
      id: "<value>",
      name: "<value>",
      description:
        "phrase spectacles viciously likewise apropos till rule milestone quiet",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 742.56,
      },
      prices: [
        {
          createdAt: new Date("2025-02-12T23:17:39.099Z"),
          modifiedAt: new Date("2024-03-28T16:30:45.101Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 146219,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-11-14T19:08:57.828Z"),
          modifiedAt: new Date("2024-02-12T18:22:07.325Z"),
          description:
            "cripple joshingly inventory knotty implode decisive vibrant whether",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 965342,
          },
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/private",
          mimeType: "<value>",
          size: 908346,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-27T17:40:45.919Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-01-22T15:37:42.374Z"),
          sizeReadable: "<value>",
          publicUrl: "https://wasteful-nerve.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-01-26T08:31:47.040Z"),
            modifiedAt: new Date("2023-07-16T23:42:30.104Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 524361,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      durationInMonths: 185190,
      type: "percentage",
      basisPoints: 938159,
      createdAt: new Date("2025-12-15T14:44:47.116Z"),
      modifiedAt: new Date("2023-12-01T12:35:12.014Z"),
      id: "<value>",
      metadata: {
        "key": 3186.01,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-08-09T22:08:09.401Z"),
      endsAt: new Date("2023-01-19T03:26:04.709Z"),
      maxRedemptions: 148845,
      redemptionsCount: 349874,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2023-02-21T14:06:59.392Z"),
        modifiedAt: new Date("2025-12-08T22:41:42.196Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 957225,
        maximumAmount: 311260,
        presetAmount: 781653,
      },
    ],
    meters: [
      {
        createdAt: new Date("2025-05-06T00:43:54.440Z"),
        modifiedAt: new Date("2024-09-16T03:43:45.976Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": 6004,
          },
          createdAt: new Date("2025-03-12T11:48:00.561Z"),
          modifiedAt: new Date("2024-01-10T14:51:41.133Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "and",
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.uncanceled                                            |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |