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
    createdAt: new Date("2023-11-02T13:50:07.480Z"),
    modifiedAt: new Date("2023-03-22T05:45:09.123Z"),
    id: "<value>",
    amount: 887523,
    currency: "Ouguiya",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-04-11T09:26:40.257Z"),
    currentPeriodEnd: new Date("2023-08-24T15:56:27.872Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-12-19T00:35:32.011Z"),
    endedAt: new Date("2022-09-01T09:43:12.235Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Ryleigh91@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://impressionable-discourse.org",
    },
    product: {
      createdAt: new Date("2023-02-13T18:13:00.610Z"),
      modifiedAt: new Date("2022-11-24T13:29:30.071Z"),
      id: "<value>",
      name: "<value>",
      description: "however emergent coolly faithfully mmm",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-08-01T23:51:21.213Z"),
          modifiedAt: new Date("2022-05-16T19:43:37.122Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 294711,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-06-06T14:34:08.591Z"),
          modifiedAt: new Date("2023-11-08T03:51:26.863Z"),
          id: "<value>",
          description: "aha tousle sashay screw",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 903461,
              timeframe: "year",
            },
            activations: {
              limit: 914590,
              enableUserAdmin: false,
            },
            limitUsage: 84682,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/mail",
          mimeType: "<value>",
          size: 141215,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-01T05:40:56.566Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-14T17:29:23.813Z"),
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-03-18T07:55:59.360Z"),
            modifiedAt: new Date("2024-07-09T01:28:15.858Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 570473,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-10-14T09:26:39.208Z"),
      modifiedAt: new Date("2024-09-17T01:03:46.046Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 564777,
      maximumAmount: 411312,
      presetAmount: 559499,
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |