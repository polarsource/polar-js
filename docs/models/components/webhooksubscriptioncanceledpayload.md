# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-02-03T13:43:27.274Z"),
    modifiedAt: new Date("2023-03-09T01:44:15.535Z"),
    id: "<value>",
    amount: 382990,
    currency: "Indian Rupee",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2025-02-13T03:51:50.700Z"),
    currentPeriodEnd: new Date("2025-08-30T08:52:26.881Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-04-29T13:46:10.741Z"),
    startedAt: new Date("2023-01-03T03:36:44.105Z"),
    endsAt: new Date("2023-11-09T17:28:43.650Z"),
    endedAt: new Date("2025-06-11T07:37:49.605Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 293991,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-10-10T06:11:06.259Z"),
      modifiedAt: new Date("2024-01-20T18:38:36.784Z"),
      metadata: {
        "key": 280309,
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
      deletedAt: new Date("2025-10-08T20:41:24.877Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Cordie55@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-06-25T17:55:44.890Z"),
      modifiedAt: new Date("2025-11-22T15:42:40.032Z"),
      id: "<value>",
      name: "<value>",
      description: "down glorious favorite instead by knottily",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-08-14T08:55:15.893Z"),
          modifiedAt: new Date("2023-09-05T19:16:17.163Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 999932,
          maximumAmount: 728466,
          presetAmount: 336350,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-11-11T11:47:55.562Z"),
          modifiedAt: new Date("2024-02-14T09:32:18.526Z"),
          id: "<value>",
          description:
            "though scratchy versus mould eulogise settler going commonly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/root",
          mimeType: "<value>",
          size: 697371,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-12T16:00:20.228Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-02-12T04:50:27.888Z"),
          sizeReadable: "<value>",
          publicUrl: "https://milky-plumber.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-21T19:48:14.781Z"),
            modifiedAt: new Date("2025-08-02T23:14:47.272Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 315904,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 668155,
      type: "fixed",
      basisPoints: 187104,
      createdAt: new Date("2023-11-26T14:28:09.704Z"),
      modifiedAt: new Date("2025-08-30T03:28:18.067Z"),
      id: "<value>",
      metadata: {
        "key": 225415,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-19T07:07:14.338Z"),
      endsAt: new Date("2023-01-04T00:53:14.075Z"),
      maxRedemptions: 755809,
      redemptionsCount: 225677,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-07-03T14:38:48.317Z"),
      modifiedAt: new Date("2023-07-25T10:32:48.478Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 920488,
    },
    prices: [
      {
        createdAt: new Date("2024-03-22T07:46:25.773Z"),
        modifiedAt: new Date("2023-11-19T11:55:56.968Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 788995,
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