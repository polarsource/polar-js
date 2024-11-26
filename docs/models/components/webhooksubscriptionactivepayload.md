# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-01-05T04:06:45.165Z"),
    modifiedAt: new Date("2024-05-20T00:02:58.462Z"),
    id: "<value>",
    amount: 408913,
    currency: "Guinea Franc",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-08-12T00:35:57.398Z"),
    currentPeriodEnd: new Date("2022-11-19T02:09:16.945Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-02-26T04:08:50.752Z"),
    endedAt: new Date("2023-05-31T11:53:32.749Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Eladio31@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://happy-go-lucky-pupil.com",
    },
    product: {
      createdAt: new Date("2022-09-12T21:48:55.870Z"),
      modifiedAt: new Date("2022-08-19T01:15:21.496Z"),
      id: "<value>",
      name: "<value>",
      description:
        "known upside-down inspect embarrassment wring excepting lined hastily",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 671561,
      },
      prices: [
        {
          createdAt: new Date("2022-11-30T22:04:47.090Z"),
          modifiedAt: new Date("2022-02-14T07:51:45.628Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 843132,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-10-24T13:04:44.480Z"),
          modifiedAt: new Date("2024-04-23T05:52:51.473Z"),
          id: "<value>",
          description: "mmm luck oh fussy graft astride ascertain mainstream",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryId: "<value>",
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "maintain",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/spool",
          mimeType: "<value>",
          size: 620966,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-05-09T03:26:26.188Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-10-07T16:35:33.165Z"),
          sizeReadable: "<value>",
          publicUrl: "https://grown-bench.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-08-21T04:25:21.569Z"),
            modifiedAt: new Date("2024-05-07T15:08:34.450Z"),
            id: "<value>",
            metadata: {
              "key": 369207,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 844394,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-12-12T17:13:53.718Z"),
      modifiedAt: new Date("2022-08-06T22:31:18.612Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 879491,
      maximumAmount: 271087,
      presetAmount: 555315,
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 488203,
      currency: "Algerian Dinar",
      createdAt: new Date("2022-02-12T14:32:02.870Z"),
      modifiedAt: new Date("2024-02-27T05:59:10.672Z"),
      id: "<value>",
      metadata: {
        "key": 172302,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-11-04T23:29:44.200Z"),
      endsAt: new Date("2023-06-20T11:03:37.052Z"),
      maxRedemptions: 562959,
      redemptionsCount: 962224,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.WebhookSubscriptionActivePayloadType](../../models/components/webhooksubscriptionactivepayloadtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.Subscription](../../models/components/subscription.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |