# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-01-19T11:56:59.634Z"),
    modifiedAt: new Date("2024-07-09T07:50:59.473Z"),
    id: "<value>",
    amount: 164585,
    currency: "Ouguiya",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-07-14T07:13:26.291Z"),
    currentPeriodEnd: new Date("2024-09-01T06:14:13.897Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-09-18T22:39:55.324Z"),
    endedAt: new Date("2022-03-25T21:43:26.476Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Hattie.Lesch@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://unconscious-eyebrow.net/",
    },
    product: {
      createdAt: new Date("2022-01-06T08:39:30.649Z"),
      modifiedAt: new Date("2024-11-06T07:58:52.676Z"),
      id: "<value>",
      name: "<value>",
      description: "yum override knit",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-08-15T23:25:12.921Z"),
          modifiedAt: new Date("2024-01-17T01:47:37.881Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 772987,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-24T03:44:15.947Z"),
          modifiedAt: new Date("2024-01-30T02:00:47.187Z"),
          id: "<value>",
          type: "discord",
          description: "lest gadzooks unless",
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
          path: "/opt/bin",
          mimeType: "<value>",
          size: 761807,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-14T20:02:24.167Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-03T17:40:05.617Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-04-23T03:18:32.830Z"),
      modifiedAt: new Date("2023-08-27T12:09:55.533Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
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