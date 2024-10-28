# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2022-07-29T18:18:20.436Z"),
    modifiedAt: new Date("2022-11-19T06:41:38.705Z"),
    id: "<value>",
    amount: 534734,
    currency: "Naira",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2022-07-11T02:37:33.682Z"),
    currentPeriodEnd: new Date("2024-03-26T09:56:20.287Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-05-07T03:52:19.100Z"),
    endedAt: new Date("2024-10-02T20:36:49.150Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Berta_Pagac@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://odd-scout.biz/",
    },
    product: {
      createdAt: new Date("2024-08-17T23:34:09.972Z"),
      modifiedAt: new Date("2022-12-02T09:15:42.253Z"),
      id: "<value>",
      name: "<value>",
      description: "celebrate liberalize yuck regarding",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-03-24T10:54:04.717Z"),
          modifiedAt: new Date("2023-07-26T12:45:38.576Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 469731,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-11-20T07:02:04.141Z"),
          modifiedAt: new Date("2024-03-31T06:44:53.428Z"),
          id: "<value>",
          type: "articles",
          description: "vice massage academics victorious while",
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
          path: "/var/yp",
          mimeType: "<value>",
          size: 642928,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-06T12:49:01.406Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-03-01T08:59:39.201Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-06-10T13:45:05.270Z"),
      modifiedAt: new Date("2022-05-30T20:19:49.504Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
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