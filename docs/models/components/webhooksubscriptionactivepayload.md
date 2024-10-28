# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-07-16T21:37:42.229Z"),
    modifiedAt: new Date("2024-09-18T10:12:41.084Z"),
    id: "<value>",
    amount: 197633,
    currency: "Iranian Rial",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-10-06T20:42:43.162Z"),
    currentPeriodEnd: new Date("2023-07-21T18:40:18.501Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-04-25T12:36:59.831Z"),
    endedAt: new Date("2024-02-25T18:58:43.313Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Harvey_Mante@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://limp-stump.info/",
    },
    product: {
      createdAt: new Date("2024-08-28T06:27:33.846Z"),
      modifiedAt: new Date("2022-02-14T20:16:34.894Z"),
      id: "<value>",
      name: "<value>",
      description: "crest yum versus wedge lock",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-01-05T03:08:39.093Z"),
          modifiedAt: new Date("2024-07-14T07:58:13.561Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 939456,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-07-15T05:59:42.148Z"),
          modifiedAt: new Date("2022-03-31T05:08:04.982Z"),
          id: "<value>",
          type: "ads",
          description:
            "ostrich at sit heartfelt filthy abnormally gee convalesce",
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
          path: "/private",
          mimeType: "<value>",
          size: 369976,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-03-09T06:44:50.644Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-12-06T22:09:36.543Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-05-29T02:01:29.899Z"),
      modifiedAt: new Date("2023-06-09T02:59:50.162Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 184149,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |