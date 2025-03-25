# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-09-24T22:27:35.031Z"),
    modifiedAt: new Date("2025-07-23T14:22:18.830Z"),
    id: "<value>",
    amount: 350202,
    currency: "Euro",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2024-02-21T02:44:46.039Z"),
    currentPeriodEnd: new Date("2024-09-18T10:03:22.825Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-12-13T23:26:30.191Z"),
    startedAt: new Date("2023-01-02T17:56:36.906Z"),
    endsAt: new Date("2023-06-09T09:55:13.803Z"),
    endedAt: new Date("2025-05-03T21:44:08.112Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-08-11T13:13:07.788Z"),
      modifiedAt: new Date("2025-12-08T19:51:14.504Z"),
      metadata: {
        "key": 601944,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-03-02T20:38:32.287Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Tyree8@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-02-24T00:23:58.036Z"),
      modifiedAt: new Date("2025-10-20T01:37:25.539Z"),
      id: "<value>",
      name: "<value>",
      description: "aha coincide oh correctly sedately",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 230594,
      },
      prices: [
        {
          createdAt: new Date("2023-11-17T15:47:00.809Z"),
          modifiedAt: new Date("2023-09-27T14:32:12.836Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-02T19:56:17.254Z"),
          modifiedAt: new Date("2025-07-03T06:10:20.109Z"),
          id: "<value>",
          description: "wide solemnly lest onto",
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
          path: "/opt",
          mimeType: "<value>",
          size: 102019,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-13T11:35:30.480Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-02-15T01:12:10.982Z"),
          sizeReadable: "<value>",
          publicUrl: "https://educated-cappelletti.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-13T00:14:07.257Z"),
            modifiedAt: new Date("2023-12-17T12:12:43.741Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 539537,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 538368,
      currency: "Mauritius Rupee",
      createdAt: new Date("2023-09-04T08:32:34.245Z"),
      modifiedAt: new Date("2025-07-18T02:56:07.362Z"),
      id: "<value>",
      metadata: {
        "key": 713246,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-12T02:57:22.912Z"),
      endsAt: new Date("2024-04-14T07:20:14.969Z"),
      maxRedemptions: 881067,
      redemptionsCount: 7281,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-12-08T08:21:53.641Z"),
      modifiedAt: new Date("2023-09-30T02:40:00.548Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 318403,
    },
    prices: [
      {
        createdAt: new Date("2025-05-14T18:48:08.000Z"),
        modifiedAt: new Date("2025-06-28T21:29:27.010Z"),
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |