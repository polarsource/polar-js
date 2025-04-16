# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-26T03:04:18.633Z"),
    modifiedAt: new Date("2025-08-17T08:38:12.962Z"),
    id: "<value>",
    amount: 763138,
    currency: "Rufiyaa",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2025-04-10T06:28:48.544Z"),
    currentPeriodEnd: new Date("2024-07-08T14:40:56.923Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-12-12T07:39:41.542Z"),
    startedAt: new Date("2024-08-05T00:54:37.375Z"),
    endsAt: new Date("2023-03-07T01:03:04.491Z"),
    endedAt: new Date("2023-07-20T18:35:29.433Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-01-20T17:41:07.841Z"),
      modifiedAt: new Date("2023-02-17T00:31:21.328Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2024-12-16T10:26:19.141Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Maynard72@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-07-14T13:39:42.542Z"),
      modifiedAt: new Date("2024-10-21T10:07:05.567Z"),
      id: "<value>",
      name: "<value>",
      description: "unwelcome supposing huzzah austere hoof idolized ouch",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 593105,
      },
      prices: [
        {
          createdAt: new Date("2023-07-05T16:59:54.271Z"),
          modifiedAt: new Date("2025-01-09T17:18:35.537Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-12-14T23:57:12.104Z"),
          modifiedAt: new Date("2023-07-14T23:25:32.030Z"),
          metadata: {
            "key": 5538.7,
          },
          description: "topsail gee during partially programme",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/local/bin",
          mimeType: "<value>",
          size: 213093,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-08-02T18:43:23.443Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-04-11T11:08:20.926Z"),
          sizeReadable: "<value>",
          publicUrl: "https://some-loaf.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-02-05T07:16:39.856Z"),
            modifiedAt: new Date("2024-10-24T19:56:48.566Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 533690,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 911235,
      currency: "New Leu",
      createdAt: new Date("2025-10-21T16:14:31.084Z"),
      modifiedAt: new Date("2025-02-24T00:26:32.219Z"),
      id: "<value>",
      metadata: {
        "key": 8569.5,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-30T20:38:09.922Z"),
      endsAt: new Date("2024-05-08T05:04:41.253Z"),
      maxRedemptions: 650710,
      redemptionsCount: 56820,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-06-26T03:23:33.136Z"),
      modifiedAt: new Date("2023-03-25T06:21:58.346Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 957299,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    prices: [
      {
        createdAt: new Date("2023-03-31T16:32:28.729Z"),
        modifiedAt: new Date("2024-11-27T18:15:24.710Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 50317,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |