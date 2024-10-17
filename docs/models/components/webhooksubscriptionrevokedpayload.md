# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2023-12-03T17:40:05.617Z"),
    modifiedAt: new Date("2024-10-11T22:54:06.249Z"),
    id: "<value>",
    amount: 435345,
    currency: "Kyat",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2022-08-22T03:03:24.232Z"),
    currentPeriodEnd: new Date("2024-01-27T04:39:38.483Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-10-08T19:25:01.027Z"),
    endedAt: new Date("2024-10-28T15:58:42.928Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Kameron.Koch70@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://helpless-fledgling.com/",
    },
    product: {
      createdAt: new Date("2024-07-25T14:24:23.868Z"),
      modifiedAt: new Date("2024-01-03T06:57:33.906Z"),
      id: "<value>",
      name: "<value>",
      description: "like um clonk",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-08-13T14:34:33.232Z"),
          modifiedAt: new Date("2023-08-29T16:35:03.394Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 201848,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-09-09T05:02:05.909Z"),
          modifiedAt: new Date("2024-12-09T01:24:16.778Z"),
          id: "<value>",
          description: "deed second geez",
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
          path: "/opt/sbin",
          mimeType: "<value>",
          size: 380715,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-05T09:40:40.960Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-23T20:04:23.090Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-06-29T08:44:46.296Z"),
      modifiedAt: new Date("2022-03-25T07:10:48.505Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 924861,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionRevokedPayloadType](../../models/components/webhooksubscriptionrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |