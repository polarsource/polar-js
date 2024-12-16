# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-11-01T03:26:54.317Z"),
    modifiedAt: new Date("2024-03-09T07:16:52.030Z"),
    id: "<value>",
    amount: 516739,
    currency: "Leone",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2022-05-10T14:04:59.269Z"),
    currentPeriodEnd: new Date("2022-09-14T01:05:30.071Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-06-05T11:40:35.040Z"),
    endedAt: new Date("2023-02-01T12:49:11.262Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 947309,
    },
    customer: {
      createdAt: new Date("2022-10-17T11:33:47.639Z"),
      modifiedAt: new Date("2023-06-02T18:46:06.050Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Neoma.Kunze@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Russian Federation",
      },
      taxId: [
        "th_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://angelic-metabolite.name",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Alba58@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-04-29T06:03:38.795Z"),
      modifiedAt: new Date("2022-02-03T04:42:22.826Z"),
      id: "<value>",
      name: "<value>",
      description: "why absentmindedly vaguely roughly broadcast under",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-03-29T12:49:57.400Z"),
          modifiedAt: new Date("2023-10-08T15:38:35.659Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-08-19T20:52:25.676Z"),
          modifiedAt: new Date("2023-11-15T18:13:16.525Z"),
          id: "<value>",
          description: "louse abaft unpleasant",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 380034,
              timeframe: "month",
            },
            activations: {
              limit: 694611,
              enableCustomerAdmin: false,
            },
            limitUsage: 43270,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/local/src",
          mimeType: "<value>",
          size: 377430,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-05T13:57:54.417Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-01T22:39:05.751Z"),
          sizeReadable: "<value>",
          publicUrl: "https://serene-cork.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-09-16T04:21:34.711Z"),
            modifiedAt: new Date("2024-04-10T23:15:28.772Z"),
            id: "<value>",
            metadata: {
              "key": 955126,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 260246,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-12-09T02:01:52.269Z"),
      modifiedAt: new Date("2022-10-10T17:20:51.726Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 756833,
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 956572,
      createdAt: new Date("2023-08-06T15:21:33.982Z"),
      modifiedAt: new Date("2023-12-13T17:06:01.103Z"),
      id: "<value>",
      metadata: {
        "key": 283557,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-11-10T14:49:35.672Z"),
      endsAt: new Date("2022-12-10T12:12:48.348Z"),
      maxRedemptions: 190850,
      redemptionsCount: 901924,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.Subscription](../../models/components/subscription.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |