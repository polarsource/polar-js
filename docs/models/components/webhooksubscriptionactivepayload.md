# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-06-15T15:59:14.720Z"),
    modifiedAt: new Date("2024-12-11T15:52:26.486Z"),
    id: "<value>",
    amount: 735410,
    currency: "Solomon Islands Dollar",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2024-02-03T13:43:27.274Z"),
    currentPeriodEnd: new Date("2023-03-09T01:44:15.535Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-02-24T18:09:40.072Z"),
    startedAt: new Date("2024-03-02T23:09:58.976Z"),
    endsAt: new Date("2025-10-05T13:49:22.673Z"),
    endedAt: new Date("2024-09-13T12:15:29.056Z"),
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
      createdAt: new Date("2024-04-29T13:46:10.741Z"),
      modifiedAt: new Date("2023-01-03T03:36:44.105Z"),
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
      deletedAt: new Date("2024-01-21T06:06:28.878Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Thurman.OHara@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-10-08T20:41:24.877Z"),
      modifiedAt: new Date("2024-11-09T00:43:35.009Z"),
      id: "<value>",
      name: "<value>",
      description: "with develop pleasing overconfidently",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 992347,
      },
      prices: [
        {
          createdAt: new Date("2023-04-15T12:53:05.203Z"),
          modifiedAt: new Date("2025-11-25T11:36:10.786Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 316335,
          maximumAmount: 489923,
          presetAmount: 956752,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-21T13:19:02.770Z"),
          modifiedAt: new Date("2024-01-21T05:01:58.399Z"),
          id: "<value>",
          description: "pro yet blue ugh nautical barring whereas",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 788036,
              timeframe: "month",
            },
            activations: {
              limit: 975847,
              enableCustomerAdmin: false,
            },
            limitUsage: 497633,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/lost+found",
          mimeType: "<value>",
          size: 302431,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-26T00:46:41.552Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-24T01:39:48.783Z"),
          sizeReadable: "<value>",
          publicUrl: "https://ajar-excess.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-03-29T04:13:17.980Z"),
            modifiedAt: new Date("2023-01-26T08:22:08.699Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 311465,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      durationInMonths: 384630,
      type: "fixed",
      amount: 571153,
      currency: "Venezuelan bolívar",
      createdAt: new Date("2025-03-20T13:09:09.599Z"),
      modifiedAt: new Date("2025-07-27T21:44:59.573Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-05-18T17:28:39.250Z"),
      endsAt: new Date("2024-08-19T07:14:49.562Z"),
      maxRedemptions: 697371,
      redemptionsCount: 954989,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-07-19T09:01:53.227Z"),
      modifiedAt: new Date("2025-01-20T16:36:26.954Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 723031,
    },
    prices: [
      {
        createdAt: new Date("2023-07-20T12:59:24.049Z"),
        modifiedAt: new Date("2023-12-13T05:33:20.610Z"),
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