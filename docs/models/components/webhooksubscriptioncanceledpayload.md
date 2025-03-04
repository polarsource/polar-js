# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2025-02-27T22:59:15.859Z"),
    modifiedAt: new Date("2025-04-21T00:39:36.408Z"),
    id: "<value>",
    amount: 950894,
    currency: "Nepalese Rupee",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2025-08-06T22:08:29.288Z"),
    currentPeriodEnd: new Date("2024-03-01T08:33:25.279Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-05-21T16:31:26.662Z"),
    startedAt: new Date("2024-12-15T20:57:59.104Z"),
    endsAt: new Date("2023-11-30T19:27:00.258Z"),
    endedAt: new Date("2023-01-16T00:03:35.865Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2024-09-27T08:10:26.067Z"),
      modifiedAt: new Date("2023-10-28T22:56:20.342Z"),
      id: "<value>",
      metadata: {
        "key": 661149,
      },
      externalId: "<id>",
      email: "Holly36@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Bahamas",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://unlucky-dusk.biz/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Cathrine.Rempel@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-05-12T22:50:38.700Z"),
      modifiedAt: new Date("2025-09-25T10:30:22.038Z"),
      id: "<value>",
      name: "<value>",
      description: "acquire upon concerning",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-08-05T00:10:24.690Z"),
          modifiedAt: new Date("2024-10-09T06:25:26.879Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 185182,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-02-21T00:08:54.044Z"),
          modifiedAt: new Date("2023-01-31T12:55:38.637Z"),
          id: "<value>",
          description:
            "save interestingly sunder embossing up till congregate inhibit unlucky helpless",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 95380,
              timeframe: "day",
            },
            activations: {
              limit: 389585,
              enableCustomerAdmin: false,
            },
            limitUsage: 293381,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/mnt",
          mimeType: "<value>",
          size: 489923,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-14T14:23:19.654Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-12-17T08:06:48.746Z"),
          sizeReadable: "<value>",
          publicUrl: "https://hairy-lashes.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-10-22T22:05:47.312Z"),
            modifiedAt: new Date("2023-02-02T06:15:52.112Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 420647,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-12-02T08:07:08.018Z"),
      modifiedAt: new Date("2023-12-01T19:09:40.569Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 562402,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 336350,
      type: "percentage",
      basisPoints: 953916,
      createdAt: new Date("2024-02-14T09:32:18.526Z"),
      modifiedAt: new Date("2025-02-14T23:31:39.572Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-09-08T05:53:16.779Z"),
      endsAt: new Date("2023-04-16T11:56:12.784Z"),
      maxRedemptions: 372925,
      redemptionsCount: 542506,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |