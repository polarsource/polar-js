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
          unitAmount: "<value>",
          capAmount: 232321,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-01T03:30:48.489Z"),
          modifiedAt: new Date("2025-10-22T01:15:08.215Z"),
          id: "<value>",
          description:
            "whenever outside intermesh um worthwhile flimsy athwart",
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
          path: "/etc/mail",
          mimeType: "<value>",
          size: 217249,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-06T06:59:25.674Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-01-23T21:41:05.424Z"),
          sizeReadable: "<value>",
          publicUrl: "https://heavy-cuckoo.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-09-03T15:06:19.693Z"),
            modifiedAt: new Date("2025-02-05T12:45:04.304Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 309749,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 263252,
      currency: "Nakfa",
      createdAt: new Date("2024-12-15T16:28:15.952Z"),
      modifiedAt: new Date("2023-06-12T15:59:05.929Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-03-03T00:24:57.453Z"),
      endsAt: new Date("2024-04-13T00:40:40.925Z"),
      maxRedemptions: 885584,
      redemptionsCount: 596610,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-08-28T23:54:27.461Z"),
      modifiedAt: new Date("2024-08-04T17:08:09.196Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 956763,
    },
    prices: [
      {
        createdAt: new Date("2023-04-26T08:49:35.470Z"),
        modifiedAt: new Date("2025-03-04T23:00:56.508Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 922955,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
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