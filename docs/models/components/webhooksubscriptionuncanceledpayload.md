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
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-16T06:44:38.773Z"),
      modifiedAt: new Date("2025-04-24T02:28:11.133Z"),
      metadata: {
        "key": 211931,
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
        "key": 74256,
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
          createdAt: new Date("2025-02-12T11:57:45.695Z"),
          modifiedAt: new Date("2023-04-17T00:15:12.855Z"),
          id: "<value>",
          description:
            "rapidly or whereas favorable er obnoxiously mysteriously veto",
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
        "key": 318601,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-08-09T22:08:09.401Z"),
      endsAt: new Date("2023-01-19T03:26:04.709Z"),
      maxRedemptions: 148845,
      redemptionsCount: 349874,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
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
    prices: [
      {
        createdAt: new Date("2024-06-21T23:38:35.374Z"),
        modifiedAt: new Date("2023-01-07T13:56:53.909Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
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