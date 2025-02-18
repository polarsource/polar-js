# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-07-25T01:35:33.444Z"),
    modifiedAt: new Date("2023-11-26T14:28:09.704Z"),
    id: "<value>",
    amount: 886994,
    currency: "North Korean Won",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2023-01-04T00:53:14.075Z"),
    currentPeriodEnd: new Date("2025-04-08T08:46:52.324Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-09-05T08:13:10.951Z"),
    startedAt: new Date("2024-10-17T07:42:54.156Z"),
    endsAt: new Date("2023-01-28T12:28:52.651Z"),
    endedAt: new Date("2025-07-03T14:38:48.317Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2023-11-27T02:26:38.800Z"),
      modifiedAt: new Date("2025-10-05T20:29:35.426Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Gwendolyn_Walter@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Somalia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://magnificent-derby.org/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Clotilde_Schumm42@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-05T09:44:03.533Z"),
      modifiedAt: new Date("2023-05-26T06:05:41.394Z"),
      id: "<value>",
      name: "<value>",
      description: "creator nor athletic wolf truly cease braid geez correctly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 312617,
      },
      prices: [
        {
          createdAt: new Date("2024-01-09T06:48:58.402Z"),
          modifiedAt: new Date("2025-02-02T05:15:20.926Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 325326,
          maximumAmount: 776212,
          presetAmount: 913151,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-26T05:01:47.668Z"),
          modifiedAt: new Date("2024-08-16T13:50:34.495Z"),
          id: "<value>",
          description:
            "unlike before coin after kindheartedly whereas obvious matter",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/spool",
          mimeType: "<value>",
          size: 518964,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-27T14:50:27.994Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-01-17T12:44:39.181Z"),
          sizeReadable: "<value>",
          publicUrl: "https://cavernous-sonar.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-03-04T08:52:02.385Z"),
            modifiedAt: new Date("2025-03-09T11:58:58.390Z"),
            id: "<value>",
            metadata: {
              "key": 8199,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 221480,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-09-24T02:51:09.358Z"),
      modifiedAt: new Date("2023-08-22T14:52:03.725Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 302596,
    },
    discount: {
      duration: "forever",
      type: "fixed",
      basisPoints: 360635,
      createdAt: new Date("2025-07-11T01:01:51.115Z"),
      modifiedAt: new Date("2025-12-02T11:00:30.084Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-06-27T19:15:20.127Z"),
      endsAt: new Date("2024-01-14T16:16:35.711Z"),
      maxRedemptions: 831188,
      redemptionsCount: 553896,
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