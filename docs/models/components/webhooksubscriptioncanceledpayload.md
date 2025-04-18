# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2025-09-27T23:56:42.701Z"),
    modifiedAt: new Date("2024-06-12T06:12:03.827Z"),
    id: "<value>",
    amount: 464666,
    currency: "Cayman Islands Dollar",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2024-01-15T06:32:33.080Z"),
    currentPeriodEnd: new Date("2023-05-13T07:51:49.721Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-11-26T03:26:40.472Z"),
    startedAt: new Date("2025-10-06T00:05:35.506Z"),
    endsAt: new Date("2024-05-11T15:17:03.037Z"),
    endedAt: new Date("2024-09-03T18:44:50.693Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 79.61,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-11-16T09:41:40.537Z"),
      modifiedAt: new Date("2025-10-19T03:23:28.853Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-07-25T08:36:28.134Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    product: {
      createdAt: new Date("2025-07-15T12:02:09.606Z"),
      modifiedAt: new Date("2025-05-29T13:12:24.760Z"),
      id: "<value>",
      name: "<value>",
      description: "boohoo vivaciously lava bah biodegradable alongside guzzle",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 107037,
      },
      prices: [
        {
          createdAt: new Date("2023-05-23T06:52:21.647Z"),
          modifiedAt: new Date("2023-07-28T17:19:49.492Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-04-19T16:01:22.989Z"),
          modifiedAt: new Date("2023-01-08T01:57:59.331Z"),
          description:
            "supposing pro inside sediment apropos captain wretched knottily",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 260674,
          },
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "push",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/tmp",
          mimeType: "<value>",
          size: 239966,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-05-12T07:44:30.875Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-05T13:17:34.342Z"),
          sizeReadable: "<value>",
          publicUrl: "https://self-reliant-knight.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-05-11T05:12:00.674Z"),
            modifiedAt: new Date("2023-11-06T10:30:39.503Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 792473,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 903279,
      createdAt: new Date("2025-09-28T22:19:22.542Z"),
      modifiedAt: new Date("2024-08-20T12:51:43.987Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-01-12T23:35:55.519Z"),
      endsAt: new Date("2025-06-03T00:56:43.066Z"),
      maxRedemptions: 582250,
      redemptionsCount: 484716,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2023-07-22T23:36:21.423Z"),
        modifiedAt: new Date("2023-04-28T06:52:35.145Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
    meters: [
      {
        createdAt: new Date("2025-12-04T07:57:32.567Z"),
        modifiedAt: new Date("2023-04-24T02:01:35.965Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": 2725.72,
          },
          createdAt: new Date("2023-03-28T19:34:48.931Z"),
          modifiedAt: new Date("2024-12-09T23:31:57.716Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "and",
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |