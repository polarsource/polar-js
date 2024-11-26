# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2022-05-10T11:56:00.057Z"),
    modifiedAt: new Date("2022-07-19T18:24:46.859Z"),
    id: "<value>",
    amount: 710205,
    currency: "Pataca",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2023-10-03T00:29:09.828Z"),
    currentPeriodEnd: new Date("2023-04-29T19:46:45.023Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-01-06T11:43:34.285Z"),
    endedAt: new Date("2022-11-26T06:17:33.278Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 308016,
    },
    user: {
      email: "Joey.Barton@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://bad-cod.biz",
    },
    product: {
      createdAt: new Date("2022-01-07T19:48:01.441Z"),
      modifiedAt: new Date("2023-07-24T08:02:21.411Z"),
      id: "<value>",
      name: "<value>",
      description:
        "equally filthy past beneath humiliating knit weatherize moral",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 976771,
      },
      prices: [
        {
          createdAt: new Date("2024-02-25T14:49:29.759Z"),
          modifiedAt: new Date("2024-12-03T08:49:56.716Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 390729,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-08T03:34:20.613Z"),
          modifiedAt: new Date("2022-12-05T19:46:35.337Z"),
          id: "<value>",
          description:
            "regarding boohoo royal machine eyebrow along dead pfft reassemble heighten",
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
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 159487,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-07-15T09:20:19.722Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-28T11:10:24.984Z"),
          sizeReadable: "<value>",
          publicUrl: "https://portly-wear.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-10-18T21:15:58.709Z"),
            modifiedAt: new Date("2022-08-05T09:16:19.778Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 496800,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-08-15T14:15:58.232Z"),
      modifiedAt: new Date("2023-03-10T16:25:20.394Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 609610,
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      type: "percentage",
      basisPoints: 895473,
      createdAt: new Date("2023-05-15T14:21:07.817Z"),
      modifiedAt: new Date("2024-01-19T02:10:11.377Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-11-21T21:55:40.029Z"),
      endsAt: new Date("2022-06-28T23:02:57.634Z"),
      maxRedemptions: 568794,
      redemptionsCount: 36075,
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