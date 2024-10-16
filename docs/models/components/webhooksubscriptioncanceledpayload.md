# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2023-11-28T05:20:13.228Z"),
    modifiedAt: new Date("2023-07-16T02:59:18.334Z"),
    id: "<value>",
    amount: 159846,
    currency: "Rwanda Franc",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-07-22T07:00:34.163Z"),
    currentPeriodEnd: new Date("2024-01-17T12:18:48.322Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-04-01T14:34:31.000Z"),
    endedAt: new Date("2023-09-12T15:43:53.558Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Lulu_Schulist99@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://dependent-negotiation.info/",
    },
    product: {
      createdAt: new Date("2024-09-20T21:54:34.005Z"),
      modifiedAt: new Date("2022-03-28T23:23:12.546Z"),
      id: "<value>",
      name: "<value>",
      description: "utter hungrily gripper jut underneath reel why above hm",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-12-14T02:17:32.598Z"),
          modifiedAt: new Date("2023-12-08T13:36:27.254Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 864630,
          maximumAmount: 6773,
          presetAmount: 27735,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-12-21T15:53:12.734Z"),
          modifiedAt: new Date("2023-01-27T20:37:43.594Z"),
          id: "<value>",
          type: "ads",
          description:
            "prejudge oof awkwardly inasmuch wholly providence inside which along",
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
          path: "/boot/defaults",
          mimeType: "<value>",
          size: 616016,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-05-23T09:25:40.012Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-28T07:19:49.051Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-09-09T12:41:53.591Z"),
      modifiedAt: new Date("2023-03-20T23:08:02.167Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 106639,
      maximumAmount: 413871,
      presetAmount: 840168,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.WebhookSubscriptionCanceledPayloadType](../../models/components/webhooksubscriptioncanceledpayloadtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |