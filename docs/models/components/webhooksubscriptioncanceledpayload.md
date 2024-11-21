# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2022-10-22T03:27:09.180Z"),
    modifiedAt: new Date("2022-01-28T06:52:10.820Z"),
    id: "<value>",
    amount: 276086,
    currency: "CFA Franc BEAC",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2022-07-10T09:38:33.519Z"),
    currentPeriodEnd: new Date("2024-02-14T02:44:27.976Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-12-08T15:22:09.808Z"),
    endedAt: new Date("2023-10-07T18:53:01.108Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Otis31@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://sweet-marimba.info",
    },
    product: {
      createdAt: new Date("2023-11-09T20:03:10.103Z"),
      modifiedAt: new Date("2022-07-24T03:40:16.074Z"),
      id: "<value>",
      name: "<value>",
      description: "deplore whenever self-reliant if",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2022-01-26T22:48:01.116Z"),
          modifiedAt: new Date("2023-04-26T19:37:47.188Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 190003,
          maximumAmount: 597092,
          presetAmount: 746187,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-05-12T05:44:05.394Z"),
          modifiedAt: new Date("2022-10-07T04:35:39.202Z"),
          id: "<value>",
          description: "so yuck except with but probe spirit blah following",
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
          path: "/System",
          mimeType: "<value>",
          size: 980988,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-28T06:01:39.364Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-09-04T21:23:13.781Z"),
          sizeReadable: "<value>",
          publicUrl: "https://discrete-sanity.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-08-15T14:15:58.232Z"),
            modifiedAt: new Date("2023-03-10T16:25:20.394Z"),
            id: "<value>",
            metadata: {
              "key": 974618,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 583602,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-09-21T23:39:35.603Z"),
      modifiedAt: new Date("2024-09-08T10:30:22.665Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 455838,
      maximumAmount: 682564,
      presetAmount: 677807,
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 822895,
      currency: "Singapore Dollar",
      createdAt: new Date("2024-02-16T21:07:47.311Z"),
      modifiedAt: new Date("2024-10-14T06:11:05.299Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-05-28T01:39:32.870Z"),
      endsAt: new Date("2024-01-10T14:23:44.216Z"),
      maxRedemptions: 974576,
      redemptionsCount: 853453,
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