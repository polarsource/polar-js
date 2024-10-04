# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-06-21T17:20:55.705Z"),
    modifiedAt: new Date("2023-11-30T15:02:56.763Z"),
    id: "<value>",
    amount: 587824,
    currency: "Moldovan Leu",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2024-10-08T00:41:43.929Z"),
    currentPeriodEnd: new Date("2023-08-28T15:19:37.990Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-10-04T22:53:14.732Z"),
    endedAt: new Date("2024-06-02T17:50:16.383Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Stacey_Heathcote@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://crooked-mortise.info/",
    },
    product: {
      createdAt: new Date("2023-04-10T08:47:51.620Z"),
      modifiedAt: new Date("2023-07-11T21:53:22.945Z"),
      id: "<value>",
      name: "<value>",
      description:
        "advertisement after pushy during acidly patroller yet noisily",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-11-20T08:32:51.731Z"),
          modifiedAt: new Date("2022-01-01T08:03:47.357Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-06-30T09:14:54.880Z"),
          modifiedAt: new Date("2023-09-17T06:38:25.784Z"),
          id: "<value>",
          description:
            "likewise which always designation um charming inside at collaboration if",
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
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 375675,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-04-14T22:34:09.472Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-14T20:02:24.167Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-10-11T22:54:06.249Z"),
      modifiedAt: new Date("2023-04-23T03:18:32.830Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 550645,
      maximumAmount: 189117,
      presetAmount: 693432,
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