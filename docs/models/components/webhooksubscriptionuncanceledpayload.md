# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-01-21T19:35:29.651Z"),
    modifiedAt: new Date("2025-11-22T12:12:13.692Z"),
    id: "<value>",
    amount: 518964,
    currency: "Aruban Guilder",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-04-28T00:24:53.119Z"),
    currentPeriodEnd: new Date("2025-06-29T00:18:29.362Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-08-05T21:45:41.713Z"),
    startedAt: new Date("2023-04-25T19:27:22.637Z"),
    endsAt: new Date("2023-03-04T08:52:02.385Z"),
    endedAt: new Date("2025-03-09T11:58:58.390Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-08-31T17:49:26.889Z"),
      modifiedAt: new Date("2025-02-11T07:57:22.128Z"),
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
      deletedAt: new Date("2024-05-07T08:39:31.060Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Elizabeth36@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-02T11:00:30.084Z"),
      modifiedAt: new Date("2025-07-15T05:01:41.750Z"),
      id: "<value>",
      name: "<value>",
      description: "hungrily mothball yowza after",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 769922,
      },
      prices: [
        {
          createdAt: new Date("2023-02-01T21:48:33.617Z"),
          modifiedAt: new Date("2023-05-07T08:21:22.430Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-07T07:48:10.250Z"),
          modifiedAt: new Date("2024-09-13T07:01:08.248Z"),
          id: "<value>",
          description: "yet minority persecute hoick",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            note: "<value>",
          },
          isTaxApplicable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/home/user",
          mimeType: "<value>",
          size: 321889,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-02T07:06:59.765Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-23T18:40:43.978Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bulky-daughter.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-19T20:13:53.893Z"),
            modifiedAt: new Date("2023-06-08T18:49:15.844Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 342655,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 58056,
      currency: "Congolese Franc",
      createdAt: new Date("2024-04-05T07:32:36.730Z"),
      modifiedAt: new Date("2025-01-30T02:03:35.991Z"),
      id: "<value>",
      metadata: {
        "key": 5205,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-05-19T10:43:02.366Z"),
      endsAt: new Date("2024-01-03T21:55:52.769Z"),
      maxRedemptions: 679716,
      redemptionsCount: 32673,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-06-13T17:09:10.644Z"),
      modifiedAt: new Date("2023-07-24T21:59:04.978Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 277066,
      maximumAmount: 135351,
      presetAmount: 930296,
    },
    prices: [
      {
        createdAt: new Date("2023-12-03T00:47:26.379Z"),
        modifiedAt: new Date("2025-06-28T11:59:19.022Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.uncanceled                                            |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |