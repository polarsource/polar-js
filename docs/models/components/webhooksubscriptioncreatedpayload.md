# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-08-03T12:20:45.785Z"),
    modifiedAt: new Date("2022-03-13T09:32:54.501Z"),
    id: "<value>",
    amount: 448924,
    currency: "New Zealand Dollar",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-04-24T18:30:17.394Z"),
    currentPeriodEnd: new Date("2022-10-07T17:52:57.869Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-07-08T09:04:33.014Z"),
    endedAt: new Date("2022-09-14T19:42:35.208Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    user: {
      email: "Cale.Parker24@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://scientific-vision.net",
    },
    product: {
      createdAt: new Date("2023-04-08T10:03:51.865Z"),
      modifiedAt: new Date("2022-09-27T02:40:17.105Z"),
      id: "<value>",
      name: "<value>",
      description:
        "yuck because neglected delete versus suspiciously mozzarella",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 384949,
      },
      prices: [
        {
          createdAt: new Date("2023-10-29T10:39:00.012Z"),
          modifiedAt: new Date("2023-08-11T05:56:46.917Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 307906,
          maximumAmount: 83602,
          presetAmount: 122604,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-03-22T03:07:22.809Z"),
          modifiedAt: new Date("2023-05-12T13:10:25.231Z"),
          id: "<value>",
          description:
            "mortar what sans during continually impossible until so elver very",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryId: "<value>",
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "triage",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/sbin",
          mimeType: "<value>",
          size: 641688,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-29T09:14:44.543Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-01-28T12:07:26.307Z"),
          sizeReadable: "<value>",
          publicUrl: "https://urban-nephew.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-07-01T18:58:52.929Z"),
            modifiedAt: new Date("2022-07-24T16:26:37.343Z"),
            id: "<value>",
            metadata: {
              "key": 819270,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 734834,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2022-05-22T20:52:36.472Z"),
      modifiedAt: new Date("2023-04-27T15:44:29.662Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 626229,
      createdAt: new Date("2023-01-18T09:48:34.643Z"),
      modifiedAt: new Date("2022-11-30T07:16:21.333Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-03-06T14:54:00.303Z"),
      endsAt: new Date("2022-12-03T11:11:57.521Z"),
      maxRedemptions: 431501,
      redemptionsCount: 708746,
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