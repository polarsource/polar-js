# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-12-20T15:19:35.871Z"),
    modifiedAt: new Date("2025-01-27T16:14:29.110Z"),
    id: "<value>",
    amount: 495700,
    currency: "Hryvnia",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2024-09-08T07:45:59.018Z"),
    currentPeriodEnd: new Date("2023-10-19T06:54:16.820Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-11-17T19:03:11.224Z"),
    startedAt: new Date("2025-12-23T14:41:40.189Z"),
    endsAt: new Date("2025-07-01T12:24:30.142Z"),
    endedAt: new Date("2024-02-06T14:02:45.663Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-03-02T23:38:16.866Z"),
      modifiedAt: new Date("2023-11-18T13:05:27.659Z"),
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
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Elena17@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-02-02T06:15:52.112Z"),
      modifiedAt: new Date("2023-04-21T16:04:48.222Z"),
      id: "<value>",
      name: "<value>",
      description: "ugh per though scratchy versus mould",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-06-29T09:44:33.231Z"),
          modifiedAt: new Date("2023-11-02T13:19:45.928Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-24T01:39:48.783Z"),
          modifiedAt: new Date("2024-04-03T23:48:44.294Z"),
          id: "<value>",
          description: "happily short-term galoshes",
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
          path: "/Network",
          mimeType: "<value>",
          size: 515854,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-01-20T16:36:26.954Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-12T08:41:21.960Z"),
          sizeReadable: "<value>",
          publicUrl: "https://hurtful-stump.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-27T22:49:02.164Z"),
            modifiedAt: new Date("2024-01-03T21:31:22.687Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 287797,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-08-30T03:28:18.067Z"),
      modifiedAt: new Date("2024-05-20T03:04:11.342Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 321438,
      maximumAmount: 2770,
      presetAmount: 755809,
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 834499,
      currency: "Yuan Renminbi",
      createdAt: new Date("2023-01-06T05:25:38.671Z"),
      modifiedAt: new Date("2023-11-27T02:26:38.800Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-15T19:48:15.809Z"),
      endsAt: new Date("2024-07-05T19:30:26.488Z"),
      maxRedemptions: 407230,
      redemptionsCount: 294249,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.uncanceled                                            |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |