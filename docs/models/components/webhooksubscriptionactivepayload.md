# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2025-07-30T07:22:19.737Z"),
    modifiedAt: new Date("2024-10-25T12:11:28.317Z"),
    id: "<value>",
    amount: 566089,
    currency: "Mauritius Rupee",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2023-09-24T23:08:07.624Z"),
    currentPeriodEnd: new Date("2023-07-14T16:26:23.129Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-03-28T14:14:55.511Z"),
    startedAt: new Date("2025-02-12T12:50:53.686Z"),
    endsAt: new Date("2024-11-12T02:02:01.997Z"),
    endedAt: new Date("2025-11-23T12:15:29.574Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-06-26T16:41:01.976Z"),
      modifiedAt: new Date("2023-04-13T00:02:16.989Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-09-06T16:17:40.992Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Keegan_Hahn@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-07-09T16:29:33.851Z"),
      modifiedAt: new Date("2024-05-21T19:39:49.574Z"),
      id: "<value>",
      name: "<value>",
      description: "until fatally orderly after colossal bitter",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 896695,
      },
      prices: [
        {
          createdAt: new Date("2025-10-14T07:35:36.976Z"),
          modifiedAt: new Date("2023-07-04T08:56:40.158Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 729016,
          maximumAmount: 260924,
          presetAmount: 229849,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-05-12T22:50:38.700Z"),
          modifiedAt: new Date("2025-09-25T10:30:22.038Z"),
          id: "<value>",
          description: "acquire upon concerning",
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
          path: "/media",
          mimeType: "<value>",
          size: 316292,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-11T19:46:55.808Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-07T20:11:39.205Z"),
          sizeReadable: "<value>",
          publicUrl: "https://overdue-violin.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-11-13T12:53:28.095Z"),
            modifiedAt: new Date("2023-02-21T00:08:54.044Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 943865,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 442416,
      type: "fixed",
      basisPoints: 860282,
      createdAt: new Date("2024-11-19T04:44:06.594Z"),
      modifiedAt: new Date("2025-04-28T22:11:42.800Z"),
      id: "<value>",
      metadata: {
        "key": 648414,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-03-17T00:12:28.102Z"),
      endsAt: new Date("2025-03-19T17:13:45.452Z"),
      maxRedemptions: 1737,
      redemptionsCount: 99908,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-02-24T18:09:40.072Z"),
      modifiedAt: new Date("2024-03-02T23:09:58.976Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 567072,
      maximumAmount: 706351,
      presetAmount: 887199,
    },
    prices: [
      {
        createdAt: new Date("2023-11-09T17:28:43.650Z"),
        modifiedAt: new Date("2025-06-11T07:37:49.605Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 351509,
        maximumAmount: 293991,
        presetAmount: 924506,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.active                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |