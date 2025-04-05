# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-09-20T20:10:21.776Z"),
    modifiedAt: new Date("2024-05-30T19:17:05.187Z"),
    id: "<value>",
    amount: 260850,
    currency: "Iranian Rial",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2025-01-16T02:08:01.537Z"),
    currentPeriodEnd: new Date("2024-11-27T03:44:13.940Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-09-09T05:19:56.213Z"),
    startedAt: new Date("2023-02-20T01:26:56.034Z"),
    endsAt: new Date("2025-11-23T16:59:17.145Z"),
    endedAt: new Date("2025-01-03T00:40:49.320Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-08-12T20:01:22.287Z"),
      modifiedAt: new Date("2024-07-23T06:36:50.439Z"),
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
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-12-04T14:18:21.541Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Garrison_Gottlieb-Hintz@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-06-23T18:15:12.066Z"),
      modifiedAt: new Date("2023-10-20T17:00:54.341Z"),
      id: "<value>",
      name: "<value>",
      description: "tricky zowie anesthetize annex quietly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-02-11T17:37:15.587Z"),
          modifiedAt: new Date("2023-01-17T13:22:28.668Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          unitAmount: 232321,
          capAmount: 211491,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-10-22T01:15:08.215Z"),
          modifiedAt: new Date("2024-10-29T08:31:22.754Z"),
          id: "<value>",
          description: "lost over dimly flint dearest fathom but whereas",
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
          path: "/srv",
          mimeType: "<value>",
          size: 558056,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-02-05T12:45:04.304Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-04-15T16:46:37.097Z"),
          sizeReadable: "<value>",
          publicUrl: "https://blond-signature.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-10-08T08:36:56.779Z"),
            modifiedAt: new Date("2024-12-15T16:28:15.952Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 850928,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 596610,
      currency: "Jamaican Dollar",
      createdAt: new Date("2024-12-01T12:57:56.793Z"),
      modifiedAt: new Date("2023-08-28T23:54:27.461Z"),
      id: "<value>",
      metadata: {
        "key": 180521,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-14T14:40:13.024Z"),
      endsAt: new Date("2025-07-07T15:51:16.470Z"),
      maxRedemptions: 955414,
      redemptionsCount: 105262,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-01-18T21:48:10.883Z"),
      modifiedAt: new Date("2025-10-08T13:23:38.203Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      unitAmount: 843146,
      capAmount: 929774,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    prices: [
      {
        createdAt: new Date("2023-04-17T15:50:54.511Z"),
        modifiedAt: new Date("2024-06-11T03:24:15.349Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.updated                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |