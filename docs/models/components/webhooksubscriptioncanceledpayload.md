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
      "key": 7961,
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
        "key": 150283,
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
          createdAt: new Date("2025-02-05T07:17:16.459Z"),
          modifiedAt: new Date("2024-03-04T03:58:56.268Z"),
          id: "<value>",
          description: "bitterly doorpost duh silk intrepid before whoever",
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
          path: "/opt",
          mimeType: "<value>",
          size: 894838,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-06-17T23:06:14.420Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-15T23:34:29.776Z"),
          sizeReadable: "<value>",
          publicUrl: "https://watery-information.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-12-07T11:06:48.742Z"),
            modifiedAt: new Date("2024-10-26T17:10:48.262Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 445789,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "fixed",
      basisPoints: 36744,
      createdAt: new Date("2023-08-18T11:10:11.730Z"),
      modifiedAt: new Date("2024-04-05T14:41:27.822Z"),
      id: "<value>",
      metadata: {
        "key": 260674,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-04-11T00:37:23.822Z"),
      endsAt: new Date("2024-11-27T01:31:51.658Z"),
      maxRedemptions: 239966,
      redemptionsCount: 453761,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-02-28T12:31:39.739Z"),
      modifiedAt: new Date("2024-07-03T16:29:57.104Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 452752,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    prices: [
      {
        createdAt: new Date("2025-05-18T13:12:28.171Z"),
        modifiedAt: new Date("2024-10-27T01:24:04.198Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
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