# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2022-05-03T03:10:03.746Z"),
    modifiedAt: new Date("2024-10-13T07:18:44.318Z"),
    id: "<value>",
    amount: 218555,
    currency: "Euro",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-09-02T01:59:47.325Z"),
    currentPeriodEnd: new Date("2023-02-05T12:14:52.685Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-03-21T02:46:56.469Z"),
    endedAt: new Date("2022-07-05T00:05:08.045Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Henderson_Christiansen96@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://triangular-finer.name",
    },
    product: {
      createdAt: new Date("2022-04-09T05:37:51.811Z"),
      modifiedAt: new Date("2023-01-05T09:56:17.090Z"),
      id: "<value>",
      name: "<value>",
      description: "a er affectionate unlike",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-04-09T16:23:40.595Z"),
          modifiedAt: new Date("2024-12-26T22:45:57.487Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-03-04T10:48:40.423Z"),
          modifiedAt: new Date("2024-01-08T16:17:32.860Z"),
          id: "<value>",
          description: "than mooch meh gosh past mmm but well-off",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 928637,
              timeframe: "month",
            },
            activations: {
              limit: 601880,
              enableUserAdmin: false,
            },
            limitUsage: 962248,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/bin",
          mimeType: "<value>",
          size: 630837,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-27T22:20:58.886Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-13T19:33:41.074Z"),
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-17T07:55:12.504Z"),
            modifiedAt: new Date("2023-05-25T18:09:04.297Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 54128,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-08-16T15:42:57.192Z"),
      modifiedAt: new Date("2024-12-26T02:26:25.100Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 459436,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |