# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-07-30T15:08:11.357Z"),
    modifiedAt: new Date("2024-02-08T00:33:07.789Z"),
    id: "<value>",
    amount: 462072,
    currency: "Kwanza",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2024-03-27T00:27:03.075Z"),
    currentPeriodEnd: new Date("2023-08-22T10:14:28.976Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-08-18T13:45:43.796Z"),
    endedAt: new Date("2022-01-07T23:11:30.811Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Elwin_DAmore@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://unique-platypus.org",
    },
    product: {
      createdAt: new Date("2022-09-08T22:35:25.287Z"),
      modifiedAt: new Date("2022-01-22T11:37:01.698Z"),
      id: "<value>",
      name: "<value>",
      description:
        "busy quarrelsomely wry zowie inasmuch politely covenant precious mozzarella cricket",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-03-24T22:50:12.488Z"),
          modifiedAt: new Date("2022-12-10T20:01:46.580Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 982685,
          maximumAmount: 613334,
          presetAmount: 419747,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-31T23:13:50.155Z"),
          modifiedAt: new Date("2024-03-29T20:55:19.511Z"),
          id: "<value>",
          description: "especially bestride how exacerbate",
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
          path: "/boot",
          mimeType: "<value>",
          size: 72285,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-07-07T13:31:28.655Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-27T00:51:00.470Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-10-02T08:39:37.015Z"),
      modifiedAt: new Date("2024-05-19T10:16:04.212Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 320837,
      maximumAmount: 986116,
      presetAmount: 666499,
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