# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2023-11-11T04:17:24.386Z"),
    modifiedAt: new Date("2022-11-05T08:00:43.230Z"),
    id: "<value>",
    amount: 588513,
    currency: "Kenyan Shilling",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2024-01-14T18:49:36.050Z"),
    currentPeriodEnd: new Date("2024-11-11T12:57:03.441Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-06-15T12:31:01.479Z"),
    endedAt: new Date("2024-05-20T09:25:06.072Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Toby12@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://livid-marksman.net/",
    },
    product: {
      createdAt: new Date("2023-05-05T11:13:51.388Z"),
      modifiedAt: new Date("2022-01-07T00:19:19.316Z"),
      id: "<value>",
      name: "<value>",
      description: "successfully essential encode accept",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-05-23T16:24:30.904Z"),
          modifiedAt: new Date("2022-08-14T06:42:01.422Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 951663,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-02-03T22:10:59.111Z"),
          modifiedAt: new Date("2024-05-01T08:47:57.109Z"),
          id: "<value>",
          type: "ads",
          description:
            "versus ugly curly membership equate phew utter hungrily",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/src",
          mimeType: "<value>",
          size: 149214,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-22T04:46:16.477Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-04-25T19:18:20.930Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-10-08T10:08:37.588Z"),
      modifiedAt: new Date("2023-03-11T03:03:15.359Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 423692,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |