# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2025-02-25T20:59:18.749Z"),
    modifiedAt: new Date("2025-02-13T04:24:13.906Z"),
    id: "<value>",
    amount: 115718,
    currency: "Pataca",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2024-04-08T08:14:40.781Z"),
    currentPeriodEnd: new Date("2023-04-25T19:59:09.345Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-06-23T04:38:11.873Z"),
    startedAt: new Date("2023-04-06T03:24:49.820Z"),
    endsAt: new Date("2023-07-30T22:07:34.485Z"),
    endedAt: new Date("2025-07-23T06:41:49.713Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 800937,
    },
    customer: {
      createdAt: new Date("2023-04-20T21:11:30.522Z"),
      modifiedAt: new Date("2023-09-07T13:46:41.792Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Kelton13@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Guatemala",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://glum-fledgling.net/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Eriberto_Veum@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-11-19T01:05:43.827Z"),
      modifiedAt: new Date("2023-12-11T04:50:31.711Z"),
      id: "<value>",
      name: "<value>",
      description:
        "wholly though crumble that why leading burdensome verify for",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-01-09T23:40:12.698Z"),
          modifiedAt: new Date("2023-08-31T17:49:26.889Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 576751,
          maximumAmount: 213156,
          presetAmount: 449234,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-28T15:29:47.125Z"),
          modifiedAt: new Date("2025-01-21T19:49:03.881Z"),
          id: "<value>",
          description:
            "immediately mechanically zowie given wherever jealously",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 85105,
              timeframe: "year",
            },
            activations: {
              limit: 566873,
              enableCustomerAdmin: false,
            },
            limitUsage: 216122,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/System",
          mimeType: "<value>",
          size: 929400,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-06-21T23:23:51.519Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-30T06:42:46.491Z"),
          sizeReadable: "<value>",
          publicUrl: "https://weird-yarmulke.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-06-09T06:51:23.859Z"),
            modifiedAt: new Date("2025-02-17T08:35:44.064Z"),
            id: "<value>",
            metadata: {
              "key": 803015,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 577297,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-06-05T05:18:49.224Z"),
      modifiedAt: new Date("2025-01-24T04:08:51.130Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 672505,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 533428,
      createdAt: new Date("2025-04-10T11:46:49.394Z"),
      modifiedAt: new Date("2024-02-09T23:07:56.607Z"),
      id: "<value>",
      metadata: {
        "key": 401449,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-08-18T07:04:21.930Z"),
      endsAt: new Date("2023-12-19T18:58:02.170Z"),
      maxRedemptions: 55015,
      redemptionsCount: 325527,
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