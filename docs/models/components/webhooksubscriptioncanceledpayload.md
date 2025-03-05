# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2025-11-23T12:15:29.574Z"),
    modifiedAt: new Date("2024-12-09T12:22:34.653Z"),
    id: "<value>",
    amount: 141314,
    currency: "Canadian Dollar",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-10-17T08:30:01.769Z"),
    currentPeriodEnd: new Date("2025-07-07T18:17:14.780Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-06T16:17:40.992Z"),
    startedAt: new Date("2024-03-14T10:45:15.823Z"),
    endsAt: new Date("2024-09-04T04:58:04.742Z"),
    endedAt: new Date("2025-06-05T21:11:09.859Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 174082,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-06T06:55:01.621Z"),
      modifiedAt: new Date("2023-07-09T16:29:33.851Z"),
      metadata: {
        "key": 396820,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Dorthy_Rice58@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-09-12T14:57:06.534Z"),
      modifiedAt: new Date("2023-03-28T20:15:02.629Z"),
      id: "<value>",
      name: "<value>",
      description: "weird qualified woot",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-08-17T16:34:38.040Z"),
          modifiedAt: new Date("2024-07-26T00:25:02.800Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 762734,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-02-08T22:48:14.333Z"),
          modifiedAt: new Date("2024-04-05T14:30:06.008Z"),
          id: "<value>",
          description:
            "ew vamoose wherever softly eyeliner dependent likely shocked yahoo however",
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
          path: "/usr/local/src",
          mimeType: "<value>",
          size: 901842,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-21T06:06:28.878Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-19T05:08:45.306Z"),
          sizeReadable: "<value>",
          publicUrl: "https://hairy-pecan.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-07-03T08:31:11.803Z"),
            modifiedAt: new Date("2025-10-08T20:41:24.877Z"),
            id: "<value>",
            metadata: {
              "key": 208826,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 682430,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-09-04T21:26:38.743Z"),
      modifiedAt: new Date("2025-01-17T10:05:42.613Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 451252,
    },
    discount: {
      duration: "once",
      durationInMonths: 483774,
      type: "fixed",
      basisPoints: 10180,
      createdAt: new Date("2023-09-18T17:04:06.742Z"),
      modifiedAt: new Date("2024-03-17T21:26:22.971Z"),
      id: "<value>",
      metadata: {
        "key": 886506,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-11-27T16:51:17.097Z"),
      endsAt: new Date("2024-04-21T03:33:11.876Z"),
      maxRedemptions: 987998,
      redemptionsCount: 614224,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |