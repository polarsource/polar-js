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
    createdAt: new Date("2023-04-07T17:10:31.500Z"),
    modifiedAt: new Date("2024-10-12T04:29:51.761Z"),
    id: "<value>",
    amount: 661764,
    currency: "Taka",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2024-12-18T05:29:23.891Z"),
    currentPeriodEnd: new Date("2022-01-15T23:11:30.521Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-11-02T22:48:20.467Z"),
    endedAt: new Date("2024-03-04T02:10:54.750Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Rylee29@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://narrow-cappelletti.name",
    },
    product: {
      createdAt: new Date("2023-11-24T13:36:23.997Z"),
      modifiedAt: new Date("2024-11-13T16:19:02.583Z"),
      id: "<value>",
      name: "<value>",
      description: "ambitious despite via serve awkwardly uselessly testify",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2022-10-30T18:25:07.122Z"),
          modifiedAt: new Date("2023-02-02T12:16:29.844Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 776750,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-01-23T14:41:40.360Z"),
          modifiedAt: new Date("2024-12-26T09:53:59.176Z"),
          id: "<value>",
          description:
            "unless save unlawful vague override shakily rewarding woot",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var",
          mimeType: "<value>",
          size: 503528,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-11-12T10:36:59.251Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-01T22:55:43.947Z"),
          sizeReadable: "<value>",
          publicUrl: "https://broken-wear.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-08T14:30:14.002Z"),
            modifiedAt: new Date("2023-06-09T17:38:07.580Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
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
          order: 722151,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-12-21T12:53:01.858Z"),
      modifiedAt: new Date("2024-07-15T12:42:19.873Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 534509,
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      durationInMonths: 879418,
      type: "fixed",
      amount: 500537,
      currency: "Dominican Peso",
      createdAt: new Date("2023-01-05T12:22:13.029Z"),
      modifiedAt: new Date("2022-07-28T12:36:44.736Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-09-19T08:40:07.794Z"),
      endsAt: new Date("2024-03-14T03:58:08.482Z"),
      maxRedemptions: 98250,
      redemptionsCount: 366117,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |