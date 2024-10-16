# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2022-02-26T16:47:59.921Z"),
    modifiedAt: new Date("2022-07-01T20:08:02.445Z"),
    id: "<value>",
    amount: 669678,
    currency: "Guarani",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2022-11-04T19:37:35.548Z"),
    currentPeriodEnd: new Date("2023-09-02T01:32:00.618Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-12-04T05:53:21.167Z"),
    endedAt: new Date("2024-01-30T15:45:00.257Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Nolan_Nikolaus@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://round-custody.net/",
    },
    product: {
      createdAt: new Date("2024-10-08T19:25:01.027Z"),
      modifiedAt: new Date("2024-10-28T15:58:42.928Z"),
      id: "<value>",
      name: "<value>",
      description: "bliss oddly orderly awful mmm within what rust deduction",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-02-22T06:19:27.101Z"),
          modifiedAt: new Date("2023-01-05T09:40:40.960Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 881238,
          maximumAmount: 202737,
          presetAmount: 163653,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-08-02T00:05:06.700Z"),
          modifiedAt: new Date("2023-09-20T04:56:13.484Z"),
          id: "<value>",
          description: "punctually sheepishly graffiti minus furthermore",
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
          path: "/usr/libdata",
          mimeType: "<value>",
          size: 744435,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-11T04:09:29.451Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-05-15T09:10:02.869Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-11-24T02:16:01.160Z"),
      modifiedAt: new Date("2022-10-19T05:37:10.667Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 848972,
      maximumAmount: 859375,
      presetAmount: 15344,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionRevokedPayloadType](../../models/components/webhooksubscriptionrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |