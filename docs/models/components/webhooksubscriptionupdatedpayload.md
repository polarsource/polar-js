# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-01-20T19:14:35.379Z"),
    modifiedAt: new Date("2024-10-04T18:43:22.566Z"),
    id: "<value>",
    amount: 34070,
    currency: "Sudanese Pound",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-07-14T23:01:43.155Z"),
    currentPeriodEnd: new Date("2023-06-14T22:27:39.245Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-07-14T02:24:25.197Z"),
    endedAt: new Date("2022-06-03T18:52:21.655Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Florine.Mraz92@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2023-11-23T10:25:56.996Z"),
      modifiedAt: new Date("2022-11-06T23:44:25.988Z"),
      id: "<value>",
      name: "<value>",
      description: "Quality-focused encompassing array",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      type: "individual",
      isHighlighted: false,
      prices: [],
      benefits: [
        {
          createdAt: new Date("2024-11-21T15:56:30.007Z"),
          modifiedAt: new Date("2023-10-04T19:26:53.921Z"),
          id: "<value>",
          type: "articles",
          description: "Exclusive dedicated complexity",
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
          path: "/usr/share",
          mimeType: "<value>",
          size: 637856,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-24T02:43:59.783Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-13T18:35:55.347Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-07-23T07:51:45.495Z"),
      modifiedAt: new Date("2024-02-16T22:50:28.568Z"),
      id: "<value>",
      priceCurrency: "<value>",
      isArchived: false,
      priceAmount: 532669,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |