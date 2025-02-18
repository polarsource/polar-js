# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2025-08-16T05:08:02.805Z"),
    modifiedAt: new Date("2025-02-11T09:16:32.311Z"),
    id: "<value>",
    amount: 622968,
    currency: "CFP Franc",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-10-28T02:02:29.593Z"),
    currentPeriodEnd: new Date("2024-06-18T14:09:32.303Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-01-15T14:16:01.354Z"),
    startedAt: new Date("2024-10-26T11:06:47.453Z"),
    endsAt: new Date("2025-12-20T00:58:21.844Z"),
    endedAt: new Date("2025-06-15T15:19:48.072Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2025-05-09T07:52:40.062Z"),
      modifiedAt: new Date("2025-03-26T08:32:25.562Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Kayleigh.Kub51@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Sweden",
      },
      taxId: [
        "do_rcn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://international-thorn.biz",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Waldo_Douglas@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-10-30T05:11:34.005Z"),
      modifiedAt: new Date("2023-08-22T02:23:53.093Z"),
      id: "<value>",
      name: "<value>",
      description: "aha longingly true amongst ick notwithstanding",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-02-26T03:10:42.176Z"),
          modifiedAt: new Date("2025-05-28T22:40:59.703Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 718879,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-03-29T12:42:59.626Z"),
          modifiedAt: new Date("2024-07-15T12:49:54.938Z"),
          id: "<value>",
          description: "black till transcend before rarely apud",
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
          path: "/Applications",
          mimeType: "<value>",
          size: 9284,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-06T04:09:31.431Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-10-30T06:52:10.521Z"),
          sizeReadable: "<value>",
          publicUrl: "https://scratchy-kettledrum.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-08-18T23:53:22.557Z"),
            modifiedAt: new Date("2025-04-13T19:53:21.496Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 297723,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-11-22T18:34:24.377Z"),
      modifiedAt: new Date("2025-05-05T20:24:14.028Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      minimumAmount: 552687,
      maximumAmount: 413768,
      presetAmount: 151486,
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 941440,
      currency: "Barbados Dollar",
      createdAt: new Date("2024-05-20T00:57:47.608Z"),
      modifiedAt: new Date("2023-05-23T01:29:58.027Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-08-29T22:15:46.090Z"),
      endsAt: new Date("2023-05-05T19:52:13.918Z"),
      maxRedemptions: 722025,
      redemptionsCount: 698117,
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