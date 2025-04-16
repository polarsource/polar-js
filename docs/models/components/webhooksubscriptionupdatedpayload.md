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
        "key": 5354.74,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-06-09T04:21:37.227Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Zoe_Hintz@yahoo.com",
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
        "key": 614206,
      },
      prices: [
        {
          createdAt: new Date("2023-01-17T13:22:28.668Z"),
          modifiedAt: new Date("2024-09-10T14:22:40.771Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 211491,
          maximumAmount: 611448,
          presetAmount: 935267,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-12-09T17:39:14.446Z"),
          modifiedAt: new Date("2025-05-31T20:54:47.388Z"),
          metadata: {
            "key": "<value>",
          },
          description: "galvanize instance phooey ravage",
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
          path: "/var/mail",
          mimeType: "<value>",
          size: 786237,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-12-15T01:50:25.991Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-06T14:47:23.679Z"),
          sizeReadable: "<value>",
          publicUrl: "https://snoopy-pick.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-11-03T08:48:00.788Z"),
            modifiedAt: new Date("2023-12-24T05:25:51.563Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 171159,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      durationInMonths: 523207,
      type: "fixed",
      basisPoints: 118214,
      createdAt: new Date("2023-08-27T02:31:05.577Z"),
      modifiedAt: new Date("2025-03-06T06:59:25.674Z"),
      id: "<value>",
      metadata: {
        "key": 642.82,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-02-02T22:25:43.761Z"),
      endsAt: new Date("2023-08-19T15:42:42.925Z"),
      maxRedemptions: 807621,
      redemptionsCount: 598595,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-04-15T16:46:37.097Z"),
      modifiedAt: new Date("2023-12-06T11:38:25.894Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
    },
    prices: [
      {
        createdAt: new Date("2023-10-08T08:36:56.779Z"),
        modifiedAt: new Date("2024-12-15T16:28:15.952Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 850928,
        maximumAmount: 55672,
        presetAmount: 427033,
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.updated                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |