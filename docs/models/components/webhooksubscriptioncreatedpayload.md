# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-21T08:43:45.283Z"),
    modifiedAt: new Date("2024-09-06T06:05:32.228Z"),
    id: "<value>",
    amount: 668218,
    currency: "Pound Sterling",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2023-12-05T03:31:10.013Z"),
    currentPeriodEnd: new Date("2025-10-29T15:13:36.657Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2025-08-31T12:55:25.056Z"),
    endedAt: new Date("2025-07-31T21:36:43.500Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 344289,
    },
    customer: {
      createdAt: new Date("2024-08-24T12:55:52.067Z"),
      modifiedAt: new Date("2025-06-12T11:40:46.096Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Allan.Schoen@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Central African Republic",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://odd-whack.org",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Birdie.Frami75@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-09-12T16:15:37.701Z"),
      modifiedAt: new Date("2023-07-23T15:43:25.483Z"),
      id: "<value>",
      name: "<value>",
      description: "against so immense",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-04-02T14:57:04.115Z"),
          modifiedAt: new Date("2025-05-06T14:43:32.754Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 693747,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-12T06:39:45.765Z"),
          modifiedAt: new Date("2025-04-10T23:31:39.054Z"),
          id: "<value>",
          description: "probable than boo yum huzzah outside",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 937865,
              timeframe: "month",
            },
            activations: {
              limit: 97810,
              enableCustomerAdmin: false,
            },
            limitUsage: 884361,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/libexec",
          mimeType: "<value>",
          size: 711871,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-28T21:24:26.026Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-03-10T06:14:35.072Z"),
          sizeReadable: "<value>",
          publicUrl: "https://sunny-premier.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-29T02:57:40.478Z"),
            modifiedAt: new Date("2025-12-25T16:18:25.276Z"),
            id: "<value>",
            metadata: {
              "key": 37129,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 14251,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-06-21T12:36:00.354Z"),
      modifiedAt: new Date("2025-08-07T06:48:26.335Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 960813,
      maximumAmount: 65121,
      presetAmount: 44571,
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      durationInMonths: 982445,
      type: "fixed",
      amount: 665872,
      currency: "Iranian Rial",
      createdAt: new Date("2025-04-21T22:35:32.835Z"),
      modifiedAt: new Date("2024-08-01T09:00:29.309Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-25T08:26:08.475Z"),
      endsAt: new Date("2023-10-10T19:59:22.296Z"),
      maxRedemptions: 532320,
      redemptionsCount: 703189,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |