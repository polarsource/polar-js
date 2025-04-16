# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-02-05T04:48:33.398Z"),
    modifiedAt: new Date("2023-09-04T15:41:09.328Z"),
    id: "<value>",
    amount: 247395,
    currency: "Turkish Lira",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-05-20T22:06:23.650Z"),
    currentPeriodEnd: new Date("2024-04-22T12:07:17.975Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-02-07T21:24:40.307Z"),
    startedAt: new Date("2025-06-13T08:43:41.276Z"),
    endsAt: new Date("2024-09-18T13:27:37.485Z"),
    endedAt: new Date("2024-07-21T01:01:03.969Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-09-14T09:50:37.468Z"),
      modifiedAt: new Date("2025-07-27T11:08:54.033Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2023-01-17T12:02:49.326Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Rhianna.Hoppe85@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-03-18T06:11:41.355Z"),
      modifiedAt: new Date("2025-02-10T12:05:00.524Z"),
      id: "<value>",
      name: "<value>",
      description: "ugh strictly now plump merrily until",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 695919,
      },
      prices: [
        {
          createdAt: new Date("2023-10-16T16:05:50.889Z"),
          modifiedAt: new Date("2024-01-01T16:45:56.034Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 368763,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-08-04T05:27:35.532Z"),
          modifiedAt: new Date("2023-11-25T00:39:20.443Z"),
          id: "<value>",
          description: "an toward which oh ad aw",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 593281,
              timeframe: "year",
            },
            activations: {
              limit: 965688,
              enableCustomerAdmin: false,
            },
            limitUsage: 500467,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Network",
          mimeType: "<value>",
          size: 920761,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-03-05T01:18:22.768Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-04-21T23:58:30.400Z"),
          sizeReadable: "<value>",
          publicUrl: "https://cute-lace.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-12-09T05:10:54.261Z"),
            modifiedAt: new Date("2024-08-08T21:00:59.780Z"),
            id: "<value>",
            metadata: {
              "key": 477902,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 851411,
          required: false,
        },
      ],
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 322549,
      createdAt: new Date("2024-07-04T07:29:08.024Z"),
      modifiedAt: new Date("2024-11-25T04:52:34.457Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-03-07T19:03:58.176Z"),
      endsAt: new Date("2024-11-20T17:15:44.366Z"),
      maxRedemptions: 62591,
      redemptionsCount: 512376,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-02-10T20:15:27.351Z"),
      modifiedAt: new Date("2025-09-09T18:11:37.889Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2024-02-17T21:51:07.026Z"),
        modifiedAt: new Date("2024-11-22T07:06:20.439Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.revoked                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |