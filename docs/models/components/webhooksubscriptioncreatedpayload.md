# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2022-01-19T16:45:32.510Z"),
    modifiedAt: new Date("2024-11-25T21:24:45.235Z"),
    id: "<value>",
    amount: 615058,
    currency: "Tugrik",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2022-10-19T10:22:53.837Z"),
    currentPeriodEnd: new Date("2024-06-26T15:34:06.651Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-12-15T16:17:55.325Z"),
    endedAt: new Date("2024-05-08T14:27:55.309Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 66074,
    },
    user: {
      email: "Ian.Kassulke@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://mixed-amnesty.org/",
    },
    product: {
      createdAt: new Date("2024-06-13T17:38:48.093Z"),
      modifiedAt: new Date("2023-08-29T15:05:57.733Z"),
      id: "<value>",
      name: "<value>",
      description:
        "amidst however astride until fabricate usefully beneath frankly for",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 706872,
      },
      prices: [
        {
          createdAt: new Date("2024-08-08T01:54:34.103Z"),
          modifiedAt: new Date("2024-06-13T12:01:45.796Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-10-30T20:46:20.876Z"),
          modifiedAt: new Date("2023-02-09T23:56:49.919Z"),
          id: "<value>",
          description: "whose buttery once worth yippee gadzooks",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 401688,
              timeframe: "year",
            },
            activations: {
              limit: 62688,
              enableUserAdmin: false,
            },
            limitUsage: 278116,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/ppp",
          mimeType: "<value>",
          size: 965095,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-06-15T17:57:35.415Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-06-01T18:53:02.233Z"),
          sizeReadable: "<value>",
          publicUrl: "https://official-laughter.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-05-13T13:20:09.287Z"),
            modifiedAt: new Date("2023-09-01T14:27:22.330Z"),
            id: "<value>",
            metadata: {
              "key": 955466,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 598316,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-04-03T14:57:04.115Z"),
      modifiedAt: new Date("2024-05-06T14:43:32.754Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 693747,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 459875,
      type: "percentage",
      amount: 955047,
      currency: "Lesotho Loti",
      createdAt: new Date("2024-08-02T07:17:19.375Z"),
      modifiedAt: new Date("2023-01-29T13:41:23.264Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-01T21:58:32.911Z"),
      endsAt: new Date("2023-04-17T06:38:07.129Z"),
      maxRedemptions: 35742,
      redemptionsCount: 770128,
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