# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-20T04:29:31.559Z"),
    modifiedAt: new Date("2023-03-17T08:26:07.884Z"),
    id: "<value>",
    amount: 87393,
    currency: "Canadian Dollar",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-12-28T09:14:27.366Z"),
    currentPeriodEnd: new Date("2024-04-23T12:04:17.140Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-01T19:19:11.121Z"),
    endedAt: new Date("2023-08-24T10:15:12.130Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Kennedy_Runolfsson21@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://gracious-illusion.com",
    },
    product: {
      createdAt: new Date("2023-04-09T12:59:09.276Z"),
      modifiedAt: new Date("2024-10-29T06:23:43.138Z"),
      id: "<value>",
      name: "<value>",
      description:
        "enraged proofread blah wallaby grandiose deliberately hype tusk",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 172329,
      },
      prices: [
        {
          createdAt: new Date("2022-05-21T10:45:22.173Z"),
          modifiedAt: new Date("2023-02-02T05:55:21.427Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 434851,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-31T05:51:37.577Z"),
          modifiedAt: new Date("2024-06-02T04:49:52.259Z"),
          id: "<value>",
          description:
            "triumphantly terribly thankfully jovially duh knowingly mmm despite digestive",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 863685,
              timeframe: "day",
            },
            activations: {
              limit: 112839,
              enableUserAdmin: false,
            },
            limitUsage: 115700,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/tmp",
          mimeType: "<value>",
          size: 517190,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-17T07:42:16.227Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-05-28T22:32:34.498Z"),
          sizeReadable: "<value>",
          publicUrl: "https://black-bracelet.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-10-30T16:04:35.456Z"),
            modifiedAt: new Date("2023-12-31T18:24:30.633Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 356958,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-10-01T15:47:39.560Z"),
      modifiedAt: new Date("2022-12-16T08:57:46.499Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 641948,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 626437,
      createdAt: new Date("2023-09-25T21:50:23.276Z"),
      modifiedAt: new Date("2022-07-25T05:59:40.299Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-09-16T17:06:57.838Z"),
      endsAt: new Date("2024-05-24T15:43:43.985Z"),
      maxRedemptions: 778955,
      redemptionsCount: 939396,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |