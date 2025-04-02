# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2023-12-30T04:23:53.970Z"),
    modifiedAt: new Date("2023-09-12T04:16:01.192Z"),
    id: "<value>",
    amount: 377691,
    currency: "Cuban Peso",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2024-12-09T11:55:43.052Z"),
    currentPeriodEnd: new Date("2023-07-23T22:58:59.535Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-02-10T23:22:02.780Z"),
    startedAt: new Date("2024-09-28T02:52:29.724Z"),
    endsAt: new Date("2024-05-22T02:09:12.082Z"),
    endedAt: new Date("2023-08-07T21:00:43.658Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 632917,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-06T09:38:16.528Z"),
      modifiedAt: new Date("2025-11-30T15:31:00.419Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2023-09-17T06:35:06.033Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Nona_Zemlak92@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-06-19T09:00:36.637Z"),
      modifiedAt: new Date("2025-01-20T02:57:30.792Z"),
      id: "<value>",
      name: "<value>",
      description: "printer even boo amongst brr cautious",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 314053,
      },
      prices: [
        {
          createdAt: new Date("2024-09-22T12:52:03.409Z"),
          modifiedAt: new Date("2023-06-08T22:29:24.231Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: 250101,
          capAmount: 958686,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-26T03:39:31.331Z"),
          modifiedAt: new Date("2024-11-07T00:51:46.255Z"),
          id: "<value>",
          description: "upliftingly affect incidentally vamoose quiet",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 566193,
              timeframe: "day",
            },
            activations: {
              limit: 94105,
              enableCustomerAdmin: false,
            },
            limitUsage: 377621,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/ppp",
          mimeType: "<value>",
          size: 242044,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-08-09T02:28:54.372Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-05T15:23:23.139Z"),
          sizeReadable: "<value>",
          publicUrl: "https://whole-legend.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-10-22T16:49:52.571Z"),
            modifiedAt: new Date("2023-04-28T00:24:53.119Z"),
            id: "<value>",
            metadata: {
              "key": false,
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
          order: 197907,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 655271,
      currency: "Afghani",
      createdAt: new Date("2023-08-31T17:49:26.889Z"),
      modifiedAt: new Date("2025-02-11T07:57:22.128Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-24T02:51:09.358Z"),
      endsAt: new Date("2023-08-22T14:52:03.725Z"),
      maxRedemptions: 449234,
      redemptionsCount: 867423,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-04-25T08:32:58.370Z"),
      modifiedAt: new Date("2023-04-16T09:16:04.113Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2025-07-15T05:01:41.750Z"),
        modifiedAt: new Date("2023-06-27T19:15:20.127Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: 553896,
        capAmount: 776186,
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |