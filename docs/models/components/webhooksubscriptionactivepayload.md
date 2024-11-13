# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-11-01T16:04:46.969Z"),
    modifiedAt: new Date("2024-12-20T11:54:29.031Z"),
    id: "<value>",
    amount: 69919,
    currency: "Aruban Guilder",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2023-02-21T10:40:08.403Z"),
    currentPeriodEnd: new Date("2022-09-08T18:41:35.233Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-12-05T22:27:48.611Z"),
    endedAt: new Date("2022-09-13T23:26:45.333Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    user: {
      email: "Lonzo.Gottlieb@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://slimy-pacemaker.com/",
    },
    product: {
      createdAt: new Date("2022-03-13T21:30:50.627Z"),
      modifiedAt: new Date("2022-04-11T23:02:43.476Z"),
      id: "<value>",
      name: "<value>",
      description: "oval supposing drat fervently",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-11-29T16:19:41.020Z"),
          modifiedAt: new Date("2024-09-14T03:25:38.296Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 905385,
          maximumAmount: 668499,
          presetAmount: 213426,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-30T12:54:28.356Z"),
          modifiedAt: new Date("2022-05-13T06:17:57.337Z"),
          id: "<value>",
          description:
            "veto considering even upliftingly lest outside gosh optimal despite",
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 932097,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-27T21:41:18.396Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-17T16:35:31.351Z"),
          sizeReadable: "<value>",
          publicUrl: "https://black-and-white-reward.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-09-13T10:47:55.235Z"),
            modifiedAt: new Date("2024-04-28T06:03:10.412Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 66657,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-06-27T02:50:03.421Z"),
      modifiedAt: new Date("2023-11-21T13:19:25.571Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.Subscription](../../models/components/subscription.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |