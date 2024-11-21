# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2023-12-18T22:25:43.751Z"),
    modifiedAt: new Date("2023-04-27T16:23:16.148Z"),
    id: "<value>",
    amount: 742547,
    currency: "Azerbaijanian Manat",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2022-05-22T22:59:35.790Z"),
    currentPeriodEnd: new Date("2024-06-08T19:50:25.987Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-03-09T08:03:15.291Z"),
    endedAt: new Date("2024-11-08T20:46:06.895Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Dominic.Lindgren@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://tragic-editor.biz/",
    },
    product: {
      createdAt: new Date("2024-09-25T04:15:37.769Z"),
      modifiedAt: new Date("2022-07-07T22:13:16.221Z"),
      id: "<value>",
      name: "<value>",
      description: "times overwork too milky solidly oh for",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2022-07-06T11:25:02.224Z"),
          modifiedAt: new Date("2022-10-15T09:56:03.023Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 858169,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-09-01T06:40:45.626Z"),
          modifiedAt: new Date("2023-11-22T05:27:14.477Z"),
          id: "<value>",
          description:
            "on during across alongside reconsideration generally tremendously new",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            note: "<value>",
          },
          isTaxApplicable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/sbin",
          mimeType: "<value>",
          size: 303222,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-11-09T11:10:59.812Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-02-01T21:53:59.428Z"),
          sizeReadable: "<value>",
          publicUrl: "https://crushing-overcoat.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-05-30T14:03:31.641Z"),
            modifiedAt: new Date("2024-05-09T11:46:57.173Z"),
            id: "<value>",
            metadata: {
              "key": 418870,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 176942,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-01-01T00:27:16.216Z"),
      modifiedAt: new Date("2022-11-09T07:17:45.765Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 367728,
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 415763,
      currency: "Jamaican Dollar",
      createdAt: new Date("2022-11-08T09:32:49.355Z"),
      modifiedAt: new Date("2023-09-04T06:17:32.428Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-01-04T15:31:16.562Z"),
      endsAt: new Date("2024-12-30T13:22:32.320Z"),
      maxRedemptions: 945277,
      redemptionsCount: 843359,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionRevokedPayloadType](../../models/components/webhooksubscriptionrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |