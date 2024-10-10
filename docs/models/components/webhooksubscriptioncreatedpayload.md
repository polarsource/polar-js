# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-09-07T22:47:45.911Z"),
    modifiedAt: new Date("2022-11-26T04:15:12.658Z"),
    id: "<value>",
    amount: 194538,
    currency: "Riel",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-04-24T17:55:23.603Z"),
    currentPeriodEnd: new Date("2024-02-24T00:26:10.360Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-20T15:30:19.147Z"),
    endedAt: new Date("2022-12-27T02:58:25.134Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Destinee.Farrell@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://unconscious-cow.com/",
    },
    product: {
      createdAt: new Date("2022-03-25T07:10:48.505Z"),
      modifiedAt: new Date("2024-10-10T15:31:17.507Z"),
      id: "<value>",
      name: "<value>",
      description: "good-natured furthermore incidentally pacemaker",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-05-20T04:35:09.735Z"),
          modifiedAt: new Date("2024-05-14T06:50:38.439Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 774664,
          maximumAmount: 404610,
          presetAmount: 539394,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-09-03T18:31:34.012Z"),
          modifiedAt: new Date("2024-04-16T03:53:33.652Z"),
          id: "<value>",
          type: "downloadables",
          description: "aggravating blah minor fishery really even yum moral",
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
          path: "/srv",
          mimeType: "<value>",
          size: 139067,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-18T15:00:06.389Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-10-13T13:49:23.922Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2023-04-21T12:43:04.324Z"),
      modifiedAt: new Date("2023-12-18T11:55:53.035Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      priceAmount: 617330,
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