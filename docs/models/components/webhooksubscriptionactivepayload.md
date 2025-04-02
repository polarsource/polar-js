# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2025-04-22T02:58:17.524Z"),
    modifiedAt: new Date("2023-12-18T13:17:08.954Z"),
    id: "<value>",
    amount: 559209,
    currency: "Zloty",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2024-05-09T13:43:53.738Z"),
    currentPeriodEnd: new Date("2025-12-09T17:05:31.658Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-07-27T18:33:03.482Z"),
    startedAt: new Date("2024-06-14T05:10:45.704Z"),
    endsAt: new Date("2023-07-01T18:36:52.222Z"),
    endedAt: new Date("2023-01-12T03:47:46.867Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 431131,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-08-29T14:37:53.760Z"),
      modifiedAt: new Date("2024-11-27T16:51:17.097Z"),
      metadata: {
        "key": 987998,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-01-27T16:14:29.110Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Shaniya_Hilll@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-23T14:41:40.189Z"),
      modifiedAt: new Date("2025-07-01T12:24:30.142Z"),
      id: "<value>",
      name: "<value>",
      description: "oof tuba greatly sans jaggedly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-02-25T00:50:26.019Z"),
          modifiedAt: new Date("2024-01-24T03:16:54.696Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-02-21T19:22:05.875Z"),
          modifiedAt: new Date("2024-08-16T23:04:53.906Z"),
          id: "<value>",
          description:
            "carelessly since humor aboard midwife unless separate gadzooks",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 287797,
              timeframe: "year",
            },
            activations: {
              limit: 300732,
              enableCustomerAdmin: false,
            },
            limitUsage: 886994,
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
          size: 225415,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-19T07:07:14.338Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-04T00:53:14.075Z"),
          sizeReadable: "<value>",
          publicUrl: "https://emotional-nectarine.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-25T10:32:48.478Z"),
            modifiedAt: new Date("2023-01-06T05:25:38.671Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 920488,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 407230,
      type: "fixed",
      amount: 927354,
      currency: "Surinam Dollar",
      createdAt: new Date("2025-04-15T01:22:04.252Z"),
      modifiedAt: new Date("2024-07-30T14:43:18.489Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-05-17T10:30:26.732Z"),
      endsAt: new Date("2024-05-24T20:20:45.368Z"),
      maxRedemptions: 493774,
      redemptionsCount: 236910,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-08-06T04:23:14.951Z"),
      modifiedAt: new Date("2023-09-25T03:38:49.818Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 427107,
      maximumAmount: 13781,
      presetAmount: 975736,
    },
    prices: [
      {
        createdAt: new Date("2025-05-06T18:26:38.655Z"),
        modifiedAt: new Date("2025-10-25T03:08:43.304Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
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