# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-09-05T07:59:50.566Z"),
    modifiedAt: new Date("2022-04-03T13:03:56.657Z"),
    id: "<value>",
    amount: 165483,
    currency: "Norwegian Krone",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-10-22T07:12:05.980Z"),
    currentPeriodEnd: new Date("2022-06-05T14:48:44.098Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-10-12T06:34:08.121Z"),
    endedAt: new Date("2023-04-14T11:56:41.335Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Daniela32@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://knotty-deduction.biz",
    },
    product: {
      createdAt: new Date("2024-04-30T20:40:52.185Z"),
      modifiedAt: new Date("2022-10-27T14:11:26.569Z"),
      id: "<value>",
      name: "<value>",
      description: "indeed respray coagulate submissive ridge veg",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2022-02-28T19:32:56.713Z"),
          modifiedAt: new Date("2023-10-06T21:17:53.356Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 772604,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-02-03T04:42:22.826Z"),
          modifiedAt: new Date("2023-03-23T00:19:05.206Z"),
          id: "<value>",
          description: "incidentally whereas beneath",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/lib",
          mimeType: "<value>",
          size: 96711,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-22T00:07:20.834Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-02-02T10:37:12.717Z"),
          sizeReadable: "<value>",
          publicUrl: "https://rich-slime.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-28T02:36:07.300Z"),
            modifiedAt: new Date("2023-09-06T06:56:35.986Z"),
            id: "<value>",
            metadata: {
              "key": 91270,
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
          order: 600471,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-08-08T20:50:48.170Z"),
      modifiedAt: new Date("2022-12-10T03:45:10.746Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 576595,
      maximumAmount: 426571,
      presetAmount: 876262,
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 589098,
      currency: "Netherlands Antillian Guilder",
      createdAt: new Date("2024-11-09T12:17:45.431Z"),
      modifiedAt: new Date("2024-08-19T20:52:25.676Z"),
      id: "<value>",
      metadata: {
        "key": 17029,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-19T06:17:35.418Z"),
      endsAt: new Date("2024-12-08T18:15:50.864Z"),
      maxRedemptions: 681331,
      redemptionsCount: 160988,
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