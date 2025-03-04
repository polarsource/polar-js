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
      externalId: "<id>",
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
            prefix: "<value>",
            expires: {
              ttl: 6203,
              timeframe: "year",
            },
            activations: {
              limit: 532092,
              enableCustomerAdmin: false,
            },
            limitUsage: 942780,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/tmp",
          mimeType: "<value>",
          size: 714300,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-25T06:38:15.965Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-29T18:00:24.289Z"),
          sizeReadable: "<value>",
          publicUrl: "https://ugly-rim.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-06T19:28:31.689Z"),
            modifiedAt: new Date("2023-05-18T04:15:08.103Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 780885,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-03-29T11:45:32.202Z"),
      modifiedAt: new Date("2023-06-16T00:41:16.617Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 963470,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 75610,
      type: "fixed",
      amount: 129619,
      currency: "UAE Dirham",
      createdAt: new Date("2024-08-29T22:15:46.090Z"),
      modifiedAt: new Date("2023-05-05T19:52:13.918Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-02-04T03:15:11.328Z"),
      endsAt: new Date("2023-07-13T06:15:38.872Z"),
      maxRedemptions: 941743,
      redemptionsCount: 721044,
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