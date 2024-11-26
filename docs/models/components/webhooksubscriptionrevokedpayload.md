# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-06-20T21:24:41.888Z"),
    modifiedAt: new Date("2024-04-13T15:31:57.389Z"),
    id: "<value>",
    amount: 708833,
    currency: "Vatu",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2024-01-10T14:23:44.216Z"),
    currentPeriodEnd: new Date("2024-12-04T03:13:51.971Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-07-24T09:12:46.368Z"),
    endedAt: new Date("2023-12-18T22:25:43.751Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 742547,
    },
    user: {
      email: "Alba39@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://meager-draw.com/",
    },
    product: {
      createdAt: new Date("2023-08-17T02:13:31.093Z"),
      modifiedAt: new Date("2022-01-07T21:20:12.170Z"),
      id: "<value>",
      name: "<value>",
      description: "anti powerfully bludgeon extricate",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-01-11T12:15:15.629Z"),
          modifiedAt: new Date("2024-05-21T09:32:41.715Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-20T06:57:07.830Z"),
          modifiedAt: new Date("2024-02-05T17:41:38.707Z"),
          id: "<value>",
          description:
            "reward ack polite that whose yowza icebreaker truthfully opera",
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
          path: "/Users",
          mimeType: "<value>",
          size: 643689,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-18T05:00:51.297Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-01-23T12:47:00.295Z"),
          sizeReadable: "<value>",
          publicUrl: "https://international-edge.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-10-04T02:51:01.618Z"),
            modifiedAt: new Date("2024-06-15T05:16:58.669Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 285971,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-12-16T19:44:40.318Z"),
      modifiedAt: new Date("2022-09-27T13:10:46.158Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      durationInMonths: 984631,
      type: "percentage",
      basisPoints: 858144,
      createdAt: new Date("2022-11-29T07:57:21.492Z"),
      modifiedAt: new Date("2024-11-09T11:10:59.812Z"),
      id: "<value>",
      metadata: {
        "key": 99549,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-06-20T00:38:57.696Z"),
      endsAt: new Date("2023-11-26T06:19:18.187Z"),
      maxRedemptions: 757185,
      redemptionsCount: 54726,
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