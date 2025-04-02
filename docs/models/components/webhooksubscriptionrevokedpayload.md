# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-12-27T02:03:10.092Z"),
    modifiedAt: new Date("2023-07-09T21:33:40.829Z"),
    id: "<value>",
    amount: 219634,
    currency: "New Taiwan Dollar",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2024-03-04T16:26:01.578Z"),
    currentPeriodEnd: new Date("2023-02-27T00:35:31.829Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-02-11T05:06:25.414Z"),
    startedAt: new Date("2024-08-14T22:06:31.036Z"),
    endsAt: new Date("2025-01-11T01:11:19.363Z"),
    endedAt: new Date("2023-11-01T22:35:54.505Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-04-04T23:19:54.974Z"),
      modifiedAt: new Date("2024-12-17T05:26:17.145Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2024-04-01T08:07:24.314Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Jasmin_McCullough94@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-03-11T00:12:11.849Z"),
      modifiedAt: new Date("2023-07-20T12:22:04.142Z"),
      id: "<value>",
      name: "<value>",
      description:
        "suddenly CD after playfully finding tragic lightly ultimately inasmuch supposing",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 309221,
      },
      prices: [
        {
          createdAt: new Date("2025-01-04T22:33:57.738Z"),
          modifiedAt: new Date("2024-05-23T08:39:03.249Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 187910,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-17T19:55:21.199Z"),
          modifiedAt: new Date("2025-08-01T23:38:40.461Z"),
          id: "<value>",
          description: "kit um oh sedately mount although",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            note: "<value>",
          },
          isTaxApplicable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/yp",
          mimeType: "<value>",
          size: 274368,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-09T15:56:51.918Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-04T00:18:10.806Z"),
          sizeReadable: "<value>",
          publicUrl: "https://brown-unit.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-05-12T19:14:37.630Z"),
            modifiedAt: new Date("2023-07-12T12:59:47.341Z"),
            id: "<value>",
            metadata: {
              "key": 362259,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 558138,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 28501,
      currency: "Azerbaijanian Manat",
      createdAt: new Date("2024-02-17T11:17:08.578Z"),
      modifiedAt: new Date("2023-03-09T17:02:11.941Z"),
      id: "<value>",
      metadata: {
        "key": 241750,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-07-25T19:06:35.622Z"),
      endsAt: new Date("2024-03-19T12:41:53.835Z"),
      maxRedemptions: 119904,
      redemptionsCount: 349639,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-10-19T08:32:01.767Z"),
      modifiedAt: new Date("2023-12-04T22:32:03.049Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2024-01-19T06:49:45.505Z"),
        modifiedAt: new Date("2023-02-28T07:48:13.094Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 561813,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.revoked                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |