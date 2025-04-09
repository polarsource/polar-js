# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2023-01-04T02:09:35.584Z"),
    modifiedAt: new Date("2024-02-17T07:58:05.914Z"),
    id: "<value>",
    amount: 468834,
    currency: "Tunisian Dinar",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2024-04-02T21:35:12.738Z"),
    currentPeriodEnd: new Date("2023-01-14T19:06:02.832Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-08-16T23:25:09.940Z"),
    startedAt: new Date("2024-10-26T01:10:41.598Z"),
    endsAt: new Date("2024-02-09T01:46:30.865Z"),
    endedAt: new Date("2025-04-09T09:40:32.922Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-04-05T07:42:47.950Z"),
      modifiedAt: new Date("2023-08-07T20:37:12.416Z"),
      metadata: {
        "key": 512800,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-12-12T05:57:43.171Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Leanne_Marquardt@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-11-30T01:35:31.732Z"),
      modifiedAt: new Date("2025-12-18T19:10:27.977Z"),
      id: "<value>",
      name: "<value>",
      description: "putrefy hungrily grimy of lightly skeleton baggy but",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-04-05T22:59:55.619Z"),
          modifiedAt: new Date("2023-02-22T22:06:38.953Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-25T19:57:05.573Z"),
          modifiedAt: new Date("2024-03-13T08:46:49.760Z"),
          id: "<value>",
          description: "garage above perky editor or mysterious swill busy who",
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
          path: "/net",
          mimeType: "<value>",
          size: 752037,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-03T10:22:33.878Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-28T02:37:57.625Z"),
          sizeReadable: "<value>",
          publicUrl: "https://illustrious-moment.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-02-08T18:18:23.677Z"),
            modifiedAt: new Date("2024-08-31T22:00:09.828Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 2440,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "fixed",
      basisPoints: 566581,
      createdAt: new Date("2025-08-19T00:44:59.777Z"),
      modifiedAt: new Date("2024-06-29T23:43:46.893Z"),
      id: "<value>",
      metadata: {
        "key": 507782,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-01-20T07:20:24.458Z"),
      endsAt: new Date("2025-09-15T05:27:52.930Z"),
      maxRedemptions: 693705,
      redemptionsCount: 862364,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-05-08T07:05:04.640Z"),
      modifiedAt: new Date("2023-02-21T14:49:02.543Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 696420,
      maximumAmount: 188361,
      presetAmount: 841823,
    },
    prices: [
      {
        createdAt: new Date("2023-02-24T22:10:54.859Z"),
        modifiedAt: new Date("2024-06-15T16:00:57.620Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 292834,
        maximumAmount: 206541,
        presetAmount: 66284,
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