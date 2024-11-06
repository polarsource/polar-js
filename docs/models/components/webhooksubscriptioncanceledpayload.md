# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-07-22T10:55:03.530Z"),
    modifiedAt: new Date("2024-10-03T13:31:02.987Z"),
    id: "<value>",
    amount: 366130,
    currency: "Congolese Franc",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2024-08-28T19:32:15.730Z"),
    currentPeriodEnd: new Date("2022-11-24T03:54:23.518Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-04-08T04:12:08.099Z"),
    endedAt: new Date("2024-08-20T17:29:24.705Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Ignatius_Jast-Marvin22@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://strident-countess.biz",
    },
    product: {
      createdAt: new Date("2022-01-10T13:24:18.025Z"),
      modifiedAt: new Date("2023-02-26T18:38:22.806Z"),
      id: "<value>",
      name: "<value>",
      description:
        "modulo boyfriend miserable actually truthfully spear yuck ultimately whether misspend",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-03-14T06:04:36.588Z"),
          modifiedAt: new Date("2023-04-06T00:36:00.465Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 660201,
          maximumAmount: 988035,
          presetAmount: 384084,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-25T13:14:09.111Z"),
          modifiedAt: new Date("2023-05-24T06:35:11.657Z"),
          id: "<value>",
          description: "meaty outdo palatable qua inventory expensive",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 517327,
              timeframe: "month",
            },
            activations: {
              limit: 552292,
              enableUserAdmin: false,
            },
            limitUsage: 405679,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/namedb",
          mimeType: "<value>",
          size: 868057,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-05-04T02:40:37.506Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-06-02T20:34:13.519Z"),
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-02-13T04:39:14.167Z"),
            modifiedAt: new Date("2024-07-29T01:46:42.865Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 891709,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-05-21T21:06:16.049Z"),
      modifiedAt: new Date("2023-03-07T22:19:42.398Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 126154,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.WebhookSubscriptionCanceledPayloadType](../../models/components/webhooksubscriptioncanceledpayloadtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |