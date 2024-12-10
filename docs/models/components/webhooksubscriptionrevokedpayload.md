# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-06-14T16:54:24.317Z"),
    modifiedAt: new Date("2023-11-08T11:49:37.012Z"),
    id: "<value>",
    amount: 914399,
    currency: "Lilangeni",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2024-03-12T11:55:33.792Z"),
    currentPeriodEnd: new Date("2024-07-16T16:23:37.743Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-03-05T18:16:19.517Z"),
    endedAt: new Date("2024-04-29T04:26:26.372Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 660799,
    },
    user: {
      email: "Kamille68@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://illiterate-monocle.biz",
    },
    product: {
      createdAt: new Date("2023-08-16T23:39:48.423Z"),
      modifiedAt: new Date("2022-11-26T14:19:13.907Z"),
      id: "<value>",
      name: "<value>",
      description:
        "furthermore glaring huddle well-lit gently excluding notwithstanding whack",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 136292,
      },
      prices: [
        {
          createdAt: new Date("2023-10-10T02:26:47.325Z"),
          modifiedAt: new Date("2023-08-22T06:08:02.478Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 939096,
          maximumAmount: 129156,
          presetAmount: 73197,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-09-26T12:13:20.933Z"),
          modifiedAt: new Date("2023-10-12T20:51:35.951Z"),
          id: "<value>",
          description: "ouch apud meanwhile even for meanwhile descent",
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
          path: "/proc",
          mimeType: "<value>",
          size: 291649,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-09-01T11:10:06.607Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-22T04:13:05.621Z"),
          sizeReadable: "<value>",
          publicUrl: "https://flowery-governance.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-04-25T04:13:36.973Z"),
            modifiedAt: new Date("2022-12-27T14:26:27.740Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 540895,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-01-27T20:11:44.715Z"),
      modifiedAt: new Date("2024-08-24T11:34:16.158Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 369161,
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 856035,
      createdAt: new Date("2022-04-13T03:51:39.302Z"),
      modifiedAt: new Date("2024-04-06T00:48:03.832Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-08-07T20:38:23.153Z"),
      endsAt: new Date("2022-04-25T02:02:03.058Z"),
      maxRedemptions: 305695,
      redemptionsCount: 694292,
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