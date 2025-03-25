# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-09-05T08:13:10.951Z"),
    modifiedAt: new Date("2024-10-17T07:42:54.156Z"),
    id: "<value>",
    amount: 25109,
    currency: "Manat",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2023-11-27T02:26:38.800Z"),
    currentPeriodEnd: new Date("2025-10-05T20:29:35.426Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-10-15T19:48:15.809Z"),
    startedAt: new Date("2024-07-05T19:30:26.488Z"),
    endsAt: new Date("2024-03-22T07:46:25.773Z"),
    endedAt: new Date("2023-11-19T11:55:56.968Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-04-15T01:22:04.252Z"),
      modifiedAt: new Date("2024-07-30T14:43:18.489Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2024-06-25T04:13:58.670Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Theron81@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-04-13T02:37:02.963Z"),
      modifiedAt: new Date("2023-01-16T02:31:09.189Z"),
      id: "<value>",
      name: "<value>",
      description:
        "famously arbitrate lend sometimes roughly mmm capitalise sheathe seal fen",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-04-30T17:28:03.068Z"),
          modifiedAt: new Date("2025-09-27T19:30:45.650Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 105118,
          maximumAmount: 541585,
          presetAmount: 627779,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-06-26T11:43:18.514Z"),
          modifiedAt: new Date("2025-05-07T03:48:03.738Z"),
          id: "<value>",
          description: "frivolous coexist suddenly gee drat phew deliberately",
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
          path: "/lib",
          mimeType: "<value>",
          size: 200824,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-05T15:23:23.139Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-21T19:35:29.651Z"),
          sizeReadable: "<value>",
          publicUrl: "https://minty-attraction.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-04-28T00:24:53.119Z"),
            modifiedAt: new Date("2025-06-29T00:18:29.362Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 104754,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 8199,
      currency: "Djibouti Franc",
      createdAt: new Date("2025-02-11T07:57:22.128Z"),
      modifiedAt: new Date("2023-06-16T17:54:46.951Z"),
      id: "<value>",
      metadata: {
        "key": 213156,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-05-07T08:39:31.060Z"),
      endsAt: new Date("2025-08-08T16:41:46.384Z"),
      maxRedemptions: 302596,
      redemptionsCount: 685973,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-01-31T06:08:34.343Z"),
      modifiedAt: new Date("2025-07-11T01:01:51.115Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 845082,
      maximumAmount: 162228,
      presetAmount: 345509,
    },
    prices: [
      {
        createdAt: new Date("2025-04-30T16:47:28.347Z"),
        modifiedAt: new Date("2025-05-02T10:48:39.763Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
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