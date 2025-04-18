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
    product: {
      createdAt: new Date("2024-02-17T10:00:08.680Z"),
      modifiedAt: new Date("2025-12-29T11:36:05.589Z"),
      id: "<value>",
      name: "<value>",
      description: "brr tricky zowie anesthetize annex",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-02-26T01:11:26.566Z"),
          modifiedAt: new Date("2024-02-18T01:49:21.003Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-12-09T05:14:07.293Z"),
          modifiedAt: new Date("2024-11-04T04:04:30.317Z"),
          description:
            "quaintly gratefully yum tremendously lazily vivacious sesame yet bewail",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 210451,
          },
          properties: {
            units: 807621,
            meterId: "<value>",
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
        "key": 1805.21,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-14T14:40:13.024Z"),
      endsAt: new Date("2025-07-07T15:51:16.470Z"),
      maxRedemptions: 955414,
      redemptionsCount: 105262,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2023-01-18T21:48:10.883Z"),
        modifiedAt: new Date("2025-10-08T13:23:38.203Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 843146,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    meters: [
      {
        createdAt: new Date("2025-10-16T00:45:41.650Z"),
        modifiedAt: new Date("2025-05-23T00:35:37.316Z"),
        id: "<value>",
        consumedUnits: 25,
        creditedUnits: 100,
        amount: 0,
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        meter: {
          metadata: {
            "key": 973.17,
          },
          createdAt: new Date("2024-06-11T03:24:15.349Z"),
          modifiedAt: new Date("2023-04-02T01:28:32.139Z"),
          id: "<value>",
          name: "<value>",
          filter: {
            conjunction: "or",
            clauses: [],
          },
          aggregation: {
            func: "max",
            property: "<value>",
          },
          organizationId: "<value>",
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