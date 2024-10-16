# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2022-03-15T09:25:01.845Z"),
    modifiedAt: new Date("2023-05-17T22:14:01.048Z"),
    id: "<value>",
    amount: 411009,
    currency: "Kyat",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-11-08T19:29:39.108Z"),
    currentPeriodEnd: new Date("2022-05-25T23:19:35.845Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-04-19T06:24:50.359Z"),
    endedAt: new Date("2024-09-04T23:51:10.342Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Cordie.Beier@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://sinful-traditionalism.info",
    },
    product: {
      createdAt: new Date("2023-11-20T01:54:46.683Z"),
      modifiedAt: new Date("2022-03-07T20:02:10.765Z"),
      id: "<value>",
      name: "<value>",
      description: "after over round despite consequently ew",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-04-28T23:30:02.301Z"),
          modifiedAt: new Date("2024-11-16T05:43:50.992Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 678636,
          maximumAmount: 953960,
          presetAmount: 151023,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-07T00:08:29.443Z"),
          modifiedAt: new Date("2024-10-15T22:27:51.866Z"),
          id: "<value>",
          description:
            "norm procrastinate under on ick lovingly paintwork versus",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            paidArticles: false,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/private/var",
          mimeType: "<value>",
          size: 485972,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-15T17:02:16.943Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-28T02:55:43.193Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-04-01T10:18:17.294Z"),
      modifiedAt: new Date("2024-08-18T17:37:40.864Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 489731,
      maximumAmount: 652552,
      presetAmount: 295537,
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