# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2023-07-20T00:58:40.878Z"),
    modifiedAt: new Date("2023-06-19T07:49:43.108Z"),
    id: "<value>",
    amount: 718730,
    currency: "Baht",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-04-24T13:59:45.564Z"),
    currentPeriodEnd: new Date("2023-02-17T02:31:29.573Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-02-07T00:55:32.603Z"),
    endedAt: new Date("2022-09-17T13:29:52.910Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 876944,
    },
    user: {
      email: "Maybell.Daugherty98@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://troubled-duffel.biz/",
    },
    product: {
      createdAt: new Date("2024-05-06T21:17:14.746Z"),
      modifiedAt: new Date("2024-03-06T08:55:14.766Z"),
      id: "<value>",
      name: "<value>",
      description: "vaguely vibraphone perky",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-07-08T21:08:29.769Z"),
          modifiedAt: new Date("2022-12-15T21:39:10.857Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 288523,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-24T09:07:04.039Z"),
          modifiedAt: new Date("2024-07-14T14:46:19.316Z"),
          id: "<value>",
          description: "transparency bump headline ha academics reassuringly",
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
          path: "/media",
          mimeType: "<value>",
          size: 69879,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-04-24T17:12:35.341Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-03-15T03:20:48.152Z"),
          sizeReadable: "<value>",
          publicUrl: "https://functional-collectivization.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-01-25T17:10:29.427Z"),
            modifiedAt: new Date("2023-06-27T19:14:57.655Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 145952,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-08-15T18:14:34.029Z"),
      modifiedAt: new Date("2023-11-29T19:36:58.004Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 378983,
      maximumAmount: 784480,
      presetAmount: 657895,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.WebhookSubscriptionCanceledPayloadType](../../models/components/webhooksubscriptioncanceledpayloadtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.Subscription](../../models/components/subscription.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |