# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-09-19T14:32:18.040Z"),
    modifiedAt: new Date("2024-09-13T21:57:59.380Z"),
    id: "<value>",
    amount: 202372,
    currency: "Guyana Dollar",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2023-06-14T03:43:07.211Z"),
    currentPeriodEnd: new Date("2023-06-29T17:58:17.224Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-02-20T15:25:02.227Z"),
    startedAt: new Date("2025-03-30T02:29:26.135Z"),
    endsAt: new Date("2025-06-30T02:36:41.216Z"),
    endedAt: new Date("2023-06-28T11:34:52.703Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2025-09-03T04:38:28.165Z"),
      modifiedAt: new Date("2025-11-27T19:05:06.518Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Polly_Dietrich93@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Spain",
      },
      taxId: [
        "li_uid",
      ],
      organizationId: "<value>",
      avatarUrl: "https://optimistic-ethyl.name",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Charlotte_Purdy@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-06-04T21:07:29.157Z"),
      modifiedAt: new Date("2023-06-26T16:41:01.976Z"),
      id: "<value>",
      name: "<value>",
      description: "strong down until",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-01-20T22:01:23.156Z"),
          modifiedAt: new Date("2024-01-22T10:41:17.565Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 928643,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-04-21T00:39:36.408Z"),
          modifiedAt: new Date("2025-11-08T04:17:32.551Z"),
          id: "<value>",
          description:
            "frugal out phew viciously scorn silk meaningfully likewise",
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
          path: "/var/tmp",
          mimeType: "<value>",
          size: 367747,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-11-18T07:59:54.568Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-13T15:44:37.740Z"),
          sizeReadable: "<value>",
          publicUrl: "https://dismal-submitter.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-12-17T20:16:52.685Z"),
            modifiedAt: new Date("2023-07-22T23:01:38.504Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 46538,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-11-20T18:53:01.615Z"),
      modifiedAt: new Date("2023-06-11T09:12:10.015Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 627917,
      type: "percentage",
      amount: 485097,
      currency: "Rial Omani",
      createdAt: new Date("2025-03-17T00:12:28.102Z"),
      modifiedAt: new Date("2025-03-19T17:13:45.452Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-04-20T11:58:55.097Z"),
      endsAt: new Date("2024-02-03T13:43:27.274Z"),
      maxRedemptions: 61197,
      redemptionsCount: 382990,
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