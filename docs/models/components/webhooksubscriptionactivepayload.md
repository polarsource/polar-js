# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2023-04-04T21:52:52.496Z"),
    modifiedAt: new Date("2025-06-06T08:49:54.446Z"),
    id: "<value>",
    amount: 904944,
    currency: "Kip",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-08-29T21:44:05.572Z"),
    currentPeriodEnd: new Date("2023-06-13T17:11:29.127Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-10-20T20:55:40.763Z"),
    startedAt: new Date("2023-08-05T12:05:21.716Z"),
    endsAt: new Date("2023-03-07T14:11:50.943Z"),
    endedAt: new Date("2023-11-28T05:15:37.314Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 330725,
    },
    customer: {
      createdAt: new Date("2025-07-02T11:49:42.061Z"),
      modifiedAt: new Date("2023-10-30T18:58:57.422Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      externalId: "<id>",
      email: "Javier_Crist@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Romania",
      },
      taxId: [
        "rs_pib",
      ],
      organizationId: "<value>",
      avatarUrl: "https://paltry-reporter.info/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Brianne.Smitham@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-05-09T08:31:13.630Z"),
      modifiedAt: new Date("2024-03-26T19:49:06.695Z"),
      id: "<value>",
      name: "<value>",
      description:
        "godfather truthfully meh suspiciously youthfully frenetically eek since",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 458279,
      },
      prices: [
        {
          createdAt: new Date("2023-06-29T17:58:17.224Z"),
          modifiedAt: new Date("2024-02-20T15:25:02.227Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 831304,
          maximumAmount: 162849,
          presetAmount: 751906,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-09-03T04:38:28.165Z"),
          modifiedAt: new Date("2025-11-27T19:05:06.518Z"),
          id: "<value>",
          description: "yum octave puny",
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
          path: "/etc/namedb",
          mimeType: "<value>",
          size: 161218,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-13T00:02:16.989Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-29T12:38:04.972Z"),
          sizeReadable: "<value>",
          publicUrl: "https://taut-tarragon.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-05T21:11:09.859Z"),
            modifiedAt: new Date("2023-12-09T00:42:10.762Z"),
            id: "<value>",
            metadata: {
              "key": 174082,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 476540,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-03-10T21:56:42.620Z"),
      modifiedAt: new Date("2024-04-19T20:35:52.502Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 136043,
    },
    discount: {
      duration: "once",
      durationInMonths: 734296,
      type: "percentage",
      amount: 584483,
      currency: "Bahraini Dinar",
      createdAt: new Date("2024-09-12T14:57:06.534Z"),
      modifiedAt: new Date("2023-03-28T20:15:02.629Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-01-22T10:41:17.565Z"),
      endsAt: new Date("2023-09-21T15:17:36.784Z"),
      maxRedemptions: 594648,
      redemptionsCount: 928643,
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