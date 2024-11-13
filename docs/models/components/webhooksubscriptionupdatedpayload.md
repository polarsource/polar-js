# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2022-01-16T16:45:02.911Z"),
    modifiedAt: new Date("2022-01-11T21:25:09.426Z"),
    id: "<value>",
    amount: 942435,
    currency: "Won",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-06-19T13:19:31.456Z"),
    currentPeriodEnd: new Date("2023-07-23T14:36:15.153Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-06-17T07:07:59.245Z"),
    endedAt: new Date("2023-05-17T23:56:02.767Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    user: {
      email: "Christopher56@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://accurate-caption.com",
    },
    product: {
      createdAt: new Date("2023-08-31T00:49:01.651Z"),
      modifiedAt: new Date("2024-02-02T12:36:51.052Z"),
      id: "<value>",
      name: "<value>",
      description:
        "vastly than mmm next baritone print athletic factorize geez careless",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 71414,
      },
      prices: [
        {
          createdAt: new Date("2022-07-31T09:26:01.957Z"),
          modifiedAt: new Date("2023-05-16T04:38:46.151Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 618082,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-08-15T14:20:54.247Z"),
          modifiedAt: new Date("2022-04-02T11:10:58.103Z"),
          id: "<value>",
          description: "proliferate oh upright as huzzah availability across",
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
          path: "/usr/obj",
          mimeType: "<value>",
          size: 888529,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-07-23T17:17:02.467Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-10-27T17:26:52.816Z"),
          sizeReadable: "<value>",
          publicUrl: "https://unknown-scratch.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-07-21T13:43:15.502Z"),
            modifiedAt: new Date("2022-02-22T16:51:45.673Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 681346,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-09-23T00:12:30.613Z"),
      modifiedAt: new Date("2022-10-13T13:05:15.971Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 590659,
      maximumAmount: 688082,
      presetAmount: 385620,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |