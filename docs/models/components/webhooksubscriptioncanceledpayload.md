# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-06-16T05:18:39.218Z"),
    modifiedAt: new Date("2023-09-03T05:46:16.237Z"),
    id: "<value>",
    amount: 502917,
    currency: "Riel",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2022-05-11T18:45:17.128Z"),
    currentPeriodEnd: new Date("2022-03-18T03:00:38.903Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-10-21T14:08:24.521Z"),
    endedAt: new Date("2024-12-02T16:44:09.862Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Kaleigh.Blick62@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://celebrated-bandwidth.biz",
    },
    product: {
      createdAt: new Date("2023-10-31T22:30:40.646Z"),
      modifiedAt: new Date("2024-10-28T09:44:26.940Z"),
      id: "<value>",
      name: "<value>",
      description: "miserly sesame separately except reproach once",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-03-12T04:23:02.705Z"),
          modifiedAt: new Date("2024-07-30T18:07:55.784Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 888644,
          maximumAmount: 309449,
          presetAmount: 357760,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-03-20T13:22:59.184Z"),
          modifiedAt: new Date("2024-10-11T04:41:09.823Z"),
          id: "<value>",
          type: "articles",
          description: "fatal waft supposing equally versus markup",
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
          path: "/proc",
          mimeType: "<value>",
          size: 190139,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-15T05:58:11.260Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-11-22T09:26:52.208Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-04-05T10:17:53.045Z"),
      modifiedAt: new Date("2024-04-25T10:47:31.841Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
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