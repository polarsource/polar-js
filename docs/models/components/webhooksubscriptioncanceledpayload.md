# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2023-05-20T19:32:12.756Z"),
    modifiedAt: new Date("2024-11-25T13:04:10.611Z"),
    id: "<value>",
    amount: 534708,
    currency: "Armenian Dram",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2022-04-19T08:02:38.105Z"),
    currentPeriodEnd: new Date("2023-03-18T14:06:13.429Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-05T03:23:29.598Z"),
    endedAt: new Date("2022-01-19T16:14:20.571Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 511203,
    },
    user: {
      email: "Henriette_Robel@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://ashamed-self-confidence.info",
    },
    product: {
      createdAt: new Date("2024-01-05T13:57:54.417Z"),
      modifiedAt: new Date("2023-06-01T22:39:05.751Z"),
      id: "<value>",
      name: "<value>",
      description: "that what massive gah newsstand truly queasily switch",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-12-17T00:23:58.824Z"),
          modifiedAt: new Date("2023-07-31T20:21:49.251Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-02-07T10:09:35.758Z"),
          modifiedAt: new Date("2024-07-29T21:23:38.273Z"),
          id: "<value>",
          description: "home naturally watery before",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {},
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/rescue",
          mimeType: "<value>",
          size: 96803,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-02T04:18:11.595Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-03-09T18:45:54.640Z"),
          sizeReadable: "<value>",
          publicUrl: "https://fond-clamp.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-06-09T23:00:47.892Z"),
            modifiedAt: new Date("2023-11-25T12:16:02.725Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 773332,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-01-22T07:43:35.623Z"),
      modifiedAt: new Date("2024-02-24T18:17:35.574Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 862167,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 796513,
      type: "percentage",
      amount: 330617,
      currency: "Pa'anga",
      createdAt: new Date("2023-05-15T03:47:55.638Z"),
      modifiedAt: new Date("2022-04-12T13:59:28.660Z"),
      id: "<value>",
      metadata: {
        "key": 871969,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-05-07T07:36:48.931Z"),
      endsAt: new Date("2022-01-16T17:26:23.935Z"),
      maxRedemptions: 611485,
      redemptionsCount: 995830,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.WebhookSubscriptionCanceledPayloadType](../../models/components/webhooksubscriptioncanceledpayloadtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.Subscription](../../models/components/subscription.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |