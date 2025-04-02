# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2025-05-02T10:48:39.763Z"),
    modifiedAt: new Date("2023-03-19T21:53:46.097Z"),
    id: "<value>",
    amount: 342406,
    currency: "Cayman Islands Dollar",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-04-08T15:25:59.804Z"),
    currentPeriodEnd: new Date("2023-04-15T20:23:47.603Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-03-19T09:04:49.131Z"),
    startedAt: new Date("2024-08-10T08:24:04.543Z"),
    endsAt: new Date("2025-09-18T05:15:49.402Z"),
    endedAt: new Date("2023-11-20T04:30:15.274Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 505192,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-08-03T16:08:13.556Z"),
      modifiedAt: new Date("2023-06-08T14:54:19.992Z"),
      metadata: {
        "key": 779391,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-02-24T11:01:10.144Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Abbigail47@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-02-01T21:48:33.617Z"),
      modifiedAt: new Date("2023-05-07T08:21:22.430Z"),
      id: "<value>",
      name: "<value>",
      description: "uh-huh consequently terribly murky phooey innocently",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-10-12T14:02:55.133Z"),
          modifiedAt: new Date("2023-07-16T21:27:56.154Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 163292,
          maximumAmount: 419995,
          presetAmount: 693509,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-06T16:56:17.091Z"),
          modifiedAt: new Date("2025-05-19T10:43:02.366Z"),
          id: "<value>",
          description: "react slump via only lest",
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
          path: "/opt/share",
          mimeType: "<value>",
          size: 208224,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-29T01:07:14.865Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-10-30T09:38:04.338Z"),
          sizeReadable: "<value>",
          publicUrl: "https://distant-tenant.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-05-14T15:19:31.084Z"),
            modifiedAt: new Date("2024-11-21T11:58:20.036Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 956532,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 215813,
      type: "percentage",
      amount: 804333,
      currency: "Algerian Dinar",
      createdAt: new Date("2025-09-25T12:13:11.837Z"),
      modifiedAt: new Date("2023-02-14T00:14:15.718Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-05-16T19:46:49.907Z"),
      endsAt: new Date("2025-07-04T15:55:26.085Z"),
      maxRedemptions: 465486,
      redemptionsCount: 65582,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-01-02T06:12:27.588Z"),
      modifiedAt: new Date("2023-06-25T16:40:06.343Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    prices: [
      {
        createdAt: new Date("2023-11-23T01:56:02.309Z"),
        modifiedAt: new Date("2023-02-21T22:50:06.852Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 691129,
        maximumAmount: 519586,
        presetAmount: 805167,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.uncanceled                                            |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |