# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-05-06T06:29:10.335Z"),
    modifiedAt: new Date("2024-03-24T10:54:04.717Z"),
    id: "<value>",
    amount: 521471,
    currency: "Kuwaiti Dinar",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2022-11-20T07:02:04.141Z"),
    currentPeriodEnd: new Date("2024-03-31T06:44:53.428Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-10-23T18:03:37.523Z"),
    endedAt: new Date("2022-10-30T19:24:48.529Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Price_Hoppe@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://muddy-doorpost.biz/",
    },
    product: {
      createdAt: new Date("2023-06-20T06:28:18.243Z"),
      modifiedAt: new Date("2023-07-03T19:12:50.569Z"),
      id: "<value>",
      name: "<value>",
      description: "lest lovable wriggler upward whoa",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 654833,
      },
      prices: [
        {
          createdAt: new Date("2024-11-03T20:41:32.976Z"),
          modifiedAt: new Date("2022-12-07T04:29:21.475Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 175010,
          maximumAmount: 907566,
          presetAmount: 483254,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-10-21T12:24:46.268Z"),
          modifiedAt: new Date("2024-05-22T22:32:55.689Z"),
          id: "<value>",
          description: "drat until converse than a unnecessarily sneak",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 610598,
              timeframe: "year",
            },
            activations: {
              limit: 253564,
              enableUserAdmin: false,
            },
            limitUsage: 684348,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/sys",
          mimeType: "<value>",
          size: 896483,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-11T08:49:36.926Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-05-27T03:30:02.459Z"),
          sizeReadable: "<value>",
          publicUrl: "https://honorable-viability.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-11-20T08:22:50.535Z"),
            modifiedAt: new Date("2024-02-06T16:09:13.076Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 412364,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-12-13T21:51:57.448Z"),
      modifiedAt: new Date("2022-04-03T22:36:08.417Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 665969,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |