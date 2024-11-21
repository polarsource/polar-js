# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2023-11-01T13:24:54.291Z"),
    modifiedAt: new Date("2024-07-12T10:46:30.365Z"),
    id: "<value>",
    amount: 278654,
    currency: "Quetzal",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2022-09-10T22:04:09.629Z"),
    currentPeriodEnd: new Date("2022-08-30T23:13:41.963Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-06-18T01:18:49.622Z"),
    endedAt: new Date("2024-05-24T16:25:23.576Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Hillary67@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://lined-brush.net",
    },
    product: {
      createdAt: new Date("2023-10-22T13:03:47.869Z"),
      modifiedAt: new Date("2022-02-06T04:23:11.388Z"),
      id: "<value>",
      name: "<value>",
      description:
        "beside quaver inhibit doubter ick solemnly nicely commonly wherever",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 27651,
      },
      prices: [
        {
          createdAt: new Date("2024-01-10T07:55:53.988Z"),
          modifiedAt: new Date("2023-08-15T21:24:17.665Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 789654,
          maximumAmount: 962380,
          presetAmount: 620966,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-07T16:35:33.165Z"),
          modifiedAt: new Date("2022-02-04T18:02:25.987Z"),
          id: "<value>",
          description: "concerning openly although vestment monasticism",
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
          path: "/opt/share",
          mimeType: "<value>",
          size: 671066,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-11-26T06:17:33.278Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-03-18T03:37:28.338Z"),
          sizeReadable: "<value>",
          publicUrl: "https://distant-lamp.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-06-16T23:24:38.141Z"),
            modifiedAt: new Date("2024-04-04T07:16:34.900Z"),
            id: "<value>",
            metadata: {
              "key": 993026,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 57238,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-12-17T08:51:22.729Z"),
      modifiedAt: new Date("2022-01-07T19:48:01.441Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 519466,
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      durationInMonths: 877279,
      type: "percentage",
      amount: 263502,
      currency: "Guinea Franc",
      createdAt: new Date("2022-08-09T02:29:28.009Z"),
      modifiedAt: new Date("2022-10-18T01:10:10.562Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-11-30T23:44:32.134Z"),
      endsAt: new Date("2022-10-14T18:21:15.353Z"),
      maxRedemptions: 539732,
      redemptionsCount: 860632,
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