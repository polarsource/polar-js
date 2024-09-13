# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-03-29T17:55:37.250Z"),
    modifiedAt: new Date("2022-02-24T02:04:28.850Z"),
    id: "<value>",
    status: "active",
    currentPeriodStart: new Date("2022-11-18T00:08:26.950Z"),
    currentPeriodEnd: new Date("2024-04-07T14:18:46.539Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-02-23T16:44:36.773Z"),
    endedAt: new Date("2022-02-05T08:54:59.720Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Jacquelyn.DAmore66@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2024-06-14T19:17:17.033Z"),
      modifiedAt: new Date("2023-08-22T07:48:59.376Z"),
      id: "<value>",
      name: "<value>",
      description: "Multi-layered maximized structure",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      type: "business",
      isHighlighted: false,
      prices: [
        {
          createdAt: new Date("2023-09-23T06:50:48.665Z"),
          modifiedAt: new Date("2023-03-26T01:26:17.107Z"),
          id: "<value>",
          priceAmount: 421819,
          priceCurrency: "<value>",
          isArchived: false,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-20T03:21:03.976Z"),
          modifiedAt: new Date("2023-01-27T11:59:02.339Z"),
          id: "<value>",
          description: "Team-oriented zero administration policy",
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
          path: "/usr/share",
          mimeType: "<value>",
          size: 5152,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-06-21T16:36:48.015Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-31T19:07:40.846Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-10-04T18:43:22.566Z"),
      modifiedAt: new Date("2022-02-07T08:11:50.595Z"),
      id: "<value>",
      priceAmount: 710456,
      priceCurrency: "<value>",
      isArchived: false,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |