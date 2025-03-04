# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-10-16T21:08:46.705Z"),
    modifiedAt: new Date("2024-12-12T14:22:49.263Z"),
    id: "<value>",
    amount: 554429,
    currency: "Russian Ruble",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2025-06-09T03:43:29.159Z"),
    currentPeriodEnd: new Date("2025-06-07T12:33:24.067Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-02-21T19:22:05.875Z"),
    startedAt: new Date("2024-08-16T23:04:53.906Z"),
    endsAt: new Date("2025-01-07T21:27:35.981Z"),
    endedAt: new Date("2023-04-06T05:17:56.944Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2024-10-27T16:07:27.375Z"),
      modifiedAt: new Date("2025-10-29T02:01:56.697Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      externalId: "<id>",
      email: "Lisette53@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Senegal",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://mammoth-duster.biz",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Humberto86@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-03-29T04:13:17.980Z"),
      modifiedAt: new Date("2023-01-26T08:22:08.699Z"),
      id: "<value>",
      name: "<value>",
      description: "unto ick hurtful",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-01-03T21:31:22.687Z"),
          modifiedAt: new Date("2025-01-02T07:08:19.179Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-26T14:28:09.704Z"),
          modifiedAt: new Date("2025-08-30T03:28:18.067Z"),
          id: "<value>",
          description:
            "although psst superficial enthusiastically but jealously",
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
          size: 719575,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-06-24T20:44:45.993Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-09T11:55:43.052Z"),
          sizeReadable: "<value>",
          publicUrl: "https://any-molasses.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-08T10:04:44.270Z"),
            modifiedAt: new Date("2024-08-16T10:43:42.195Z"),
            id: "<value>",
            metadata: {
              "key": 476644,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 971393,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-09-23T21:00:39.775Z"),
      modifiedAt: new Date("2023-09-17T06:35:06.033Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 762233,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 589124,
      type: "percentage",
      amount: 12210,
      currency: "Belize Dollar",
      createdAt: new Date("2025-01-20T02:57:30.792Z"),
      modifiedAt: new Date("2024-04-01T10:43:53.018Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-04-15T01:44:07.536Z"),
      endsAt: new Date("2025-02-20T10:39:54.364Z"),
      maxRedemptions: 566160,
      redemptionsCount: 119903,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |