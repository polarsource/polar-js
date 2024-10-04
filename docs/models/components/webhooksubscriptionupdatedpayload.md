# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2022-12-21T04:36:20.250Z"),
    modifiedAt: new Date("2022-03-25T09:46:45.207Z"),
    id: "<value>",
    amount: 823292,
    currency: "Saudi Riyal",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2023-01-07T05:24:44.232Z"),
    currentPeriodEnd: new Date("2024-10-22T16:13:49.873Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-07-03T20:33:44.163Z"),
    endedAt: new Date("2022-05-02T21:04:54.220Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Ford25@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://deafening-entry.com/",
    },
    product: {
      createdAt: new Date("2023-06-15T01:48:27.572Z"),
      modifiedAt: new Date("2024-11-28T22:17:24.181Z"),
      id: "<value>",
      name: "<value>",
      description: "happily woot snack as ugh",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-04-11T01:56:01.447Z"),
          modifiedAt: new Date("2024-04-07T12:35:14.352Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-17T19:03:37.149Z"),
          modifiedAt: new Date("2022-10-22T06:11:31.101Z"),
          id: "<value>",
          description:
            "stealthily forage drat contrail nervous who across provided magnificent stealthily",
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
          path: "/var/tmp",
          mimeType: "<value>",
          size: 790733,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-13T01:49:16.383Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-02-26T15:09:11.481Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-12-22T21:21:58.162Z"),
      modifiedAt: new Date("2023-07-22T04:52:15.720Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 662228,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |