# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-04-21T01:59:26.650Z"),
    modifiedAt: new Date("2024-09-22T15:13:56.903Z"),
    id: "<value>",
    amount: 467109,
    currency: "Sudanese Pound",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2024-01-05T23:44:25.788Z"),
    currentPeriodEnd: new Date("2024-10-29T15:27:04.484Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2025-04-30T10:48:39.079Z"),
    endedAt: new Date("2023-03-25T10:55:20.447Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2024-12-29T22:18:25.349Z"),
      modifiedAt: new Date("2025-03-20T06:56:16.111Z"),
      id: "<value>",
      metadata: {
        "key": 982804,
      },
      email: "Bridgette54@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "British Indian Ocean Territory (Chagos Archipelago)",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://exhausted-mozzarella.name/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Jena47@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-07-02T11:07:10.887Z"),
      modifiedAt: new Date("2024-08-06T00:52:08.467Z"),
      id: "<value>",
      name: "<value>",
      description:
        "undergo beside confusion chainstay provided furthermore phew hm softly",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-12-02T01:00:40.535Z"),
          modifiedAt: new Date("2025-01-30T22:38:35.808Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 22018,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-07-29T08:16:06.752Z"),
          modifiedAt: new Date("2024-05-11T19:42:35.257Z"),
          id: "<value>",
          description: "verify past meh viability victoriously ha",
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
          path: "/usr/ports",
          mimeType: "<value>",
          size: 228481,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-11T13:54:59.030Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-10-03T16:55:27.960Z"),
          sizeReadable: "<value>",
          publicUrl: "https://rotating-guidance.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-18T02:26:54.532Z"),
            modifiedAt: new Date("2023-04-29T04:52:40.857Z"),
            id: "<value>",
            metadata: {
              "key": 447678,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 752211,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-06-14T11:52:00.847Z"),
      modifiedAt: new Date("2025-10-17T07:28:48.905Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 365473,
      createdAt: new Date("2025-02-03T21:57:43.798Z"),
      modifiedAt: new Date("2023-10-28T23:39:35.956Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-05-16T16:29:20.566Z"),
      endsAt: new Date("2023-08-01T16:05:42.769Z"),
      maxRedemptions: 330837,
      redemptionsCount: 825303,
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