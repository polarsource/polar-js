# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2023-12-26T03:47:13.190Z"),
    modifiedAt: new Date("2023-07-02T06:21:44.983Z"),
    id: "<value>",
    amount: 341772,
    currency: "Colombian Peso",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-06-12T17:28:17.909Z"),
    currentPeriodEnd: new Date("2022-01-17T18:22:37.801Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-18T03:44:36.212Z"),
    endedAt: new Date("2023-11-09T19:57:09.022Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Shea24@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://rusty-newsprint.name",
    },
    product: {
      createdAt: new Date("2023-12-14T07:10:12.997Z"),
      modifiedAt: new Date("2022-01-02T23:03:39.516Z"),
      id: "<value>",
      name: "<value>",
      description: "hm coolly submitter yahoo what",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-01-19T11:56:59.634Z"),
          modifiedAt: new Date("2024-07-09T07:50:59.473Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 164585,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-27T18:49:41.103Z"),
          modifiedAt: new Date("2024-11-25T09:37:16.236Z"),
          id: "<value>",
          description:
            "provided uh-huh and govern pfft duh phooey cheerfully reclassify",
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
          path: "/home",
          mimeType: "<value>",
          size: 810142,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-11-04T19:37:35.548Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-02T01:32:00.618Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-01-30T15:45:00.257Z"),
      modifiedAt: new Date("2023-02-16T17:45:29.595Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 761807,
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