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
    priceId: "<value>",
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
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Priscilla.Miller@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-19T00:19:02.766Z"),
      modifiedAt: new Date("2024-04-14T19:45:40.185Z"),
      id: "<value>",
      name: "<value>",
      description: "vivaciously lava bah biodegradable",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 1502.83,
      },
      prices: [
        {
          createdAt: new Date("2023-12-29T23:45:28.455Z"),
          modifiedAt: new Date("2023-04-25T11:16:57.177Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 649331,
          maximumAmount: 320079,
          presetAmount: 724540,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-02-05T07:17:16.459Z"),
          modifiedAt: new Date("2024-03-04T03:58:56.268Z"),
          metadata: {
            "key": 3052.26,
          },
          description: "kiddingly and loftily",
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
          path: "/opt/bin",
          mimeType: "<value>",
          size: 747003,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-07T08:29:01.361Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-30T12:41:38.533Z"),
          sizeReadable: "<value>",
          publicUrl: "https://reckless-pigsty.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-07-21T02:26:07.042Z"),
            modifiedAt: new Date("2025-04-27T01:55:31.446Z"),
            id: "<value>",
            metadata: {
              "key": 204532,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 509086,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 799227,
      type: "percentage",
      basisPoints: 274471,
      createdAt: new Date("2024-07-15T20:55:25.309Z"),
      modifiedAt: new Date("2025-11-09T09:42:15.321Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-07T21:23:06.391Z"),
      endsAt: new Date("2023-07-19T10:40:04.572Z"),
      maxRedemptions: 938312,
      redemptionsCount: 927407,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-06-17T23:06:14.420Z"),
      modifiedAt: new Date("2023-06-15T23:34:29.776Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2023-10-03T01:23:28.065Z"),
        modifiedAt: new Date("2023-10-09T17:02:50.764Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 987811,
        maximumAmount: 445789,
        presetAmount: 579317,
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |