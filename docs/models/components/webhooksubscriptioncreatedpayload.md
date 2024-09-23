# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-09T14:25:36.451Z"),
    modifiedAt: new Date("2023-01-08T06:10:49.913Z"),
    id: "<value>",
    amount: 637969,
    currency: "Malaysian Ringgit",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-12-09T01:43:26.354Z"),
    currentPeriodEnd: new Date("2024-10-28T06:45:26.918Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-23T21:28:43.149Z"),
    endedAt: new Date("2023-11-05T08:19:22.907Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Vanessa.Schmitt42@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2022-10-20T14:32:02.541Z"),
      modifiedAt: new Date("2024-05-17T10:23:56.087Z"),
      id: "<value>",
      name: "<value>",
      description: "Pre-emptive grid-enabled Graphical User Interface",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-08-27T10:29:36.021Z"),
          modifiedAt: new Date("2022-02-15T07:34:29.918Z"),
          id: "<value>",
          isArchived: false,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-08T17:54:36.244Z"),
          modifiedAt: new Date("2024-09-24T19:03:08.378Z"),
          id: "<value>",
          description: "Persevering disintermediate extranet",
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
          path: "/usr/src",
          mimeType: "<value>",
          size: 491784,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-05-24T16:52:52.632Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-09-30T06:35:01.392Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-05-23T11:55:09.881Z"),
      modifiedAt: new Date("2024-09-30T23:48:11.129Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 668783,
      maximumAmount: 72473,
      presetAmount: 5494,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |