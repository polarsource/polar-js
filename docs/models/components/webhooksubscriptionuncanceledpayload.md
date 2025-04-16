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
    priceId: "<value>",
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
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Sarah0@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-02-08T02:36:01.566Z"),
      modifiedAt: new Date("2025-12-31T06:05:26.352Z"),
      id: "<value>",
      name: "<value>",
      description:
        "spectacles viciously likewise apropos till rule milestone quiet",
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
          minimumAmount: 146219,
          maximumAmount: 349107,
          presetAmount: 289961,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-02-12T11:57:45.695Z"),
          modifiedAt: new Date("2023-04-17T00:15:12.855Z"),
          metadata: {
            "key": 4583.73,
          },
          description:
            "since and uh-huh deceivingly wrongly into consequently drat polyester ha",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
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
          path: "/usr/obj",
          mimeType: "<value>",
          size: 938159,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-12-15T14:44:47.116Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-01T12:35:12.014Z"),
          sizeReadable: "<value>",
          publicUrl: "https://glass-summary.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-19T11:05:27.786Z"),
            modifiedAt: new Date("2024-05-15T22:43:57.548Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 47069,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 957225,
      type: "fixed",
      basisPoints: 781653,
      createdAt: new Date("2025-05-06T00:43:54.440Z"),
      modifiedAt: new Date("2024-09-16T03:43:45.976Z"),
      id: "<value>",
      metadata: {
        "key": 6004,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-03-12T11:48:00.561Z"),
      endsAt: new Date("2024-01-10T14:51:41.133Z"),
      maxRedemptions: 147438,
      redemptionsCount: 361653,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-05-21T08:21:41.060Z"),
      modifiedAt: new Date("2025-06-01T17:26:31.380Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2024-01-20T13:11:54.794Z"),
        modifiedAt: new Date("2024-12-15T08:41:41.531Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 3021,
        maximumAmount: 145321,
        presetAmount: 5101,
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.uncanceled                                            |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |