# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2025-04-15T01:22:04.252Z"),
    modifiedAt: new Date("2024-07-30T14:43:18.489Z"),
    id: "<value>",
    amount: 824862,
    currency: "North Korean Won",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-09-17T15:41:11.631Z"),
    currentPeriodEnd: new Date("2025-10-09T07:44:18.634Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-10-11T14:10:39.907Z"),
    startedAt: new Date("2023-08-06T04:23:14.951Z"),
    endsAt: new Date("2023-09-25T03:38:49.818Z"),
    endedAt: new Date("2025-06-14T19:37:48.267Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 13781,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-12-05T09:44:03.533Z"),
      modifiedAt: new Date("2023-05-26T06:05:41.394Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2025-04-27T15:28:30.620Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Dario_Doyle@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-07-23T22:58:59.535Z"),
      modifiedAt: new Date("2023-02-10T23:22:02.780Z"),
      id: "<value>",
      name: "<value>",
      description: "warp now likewise printer even boo amongst",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-11-02T10:11:22.695Z"),
          modifiedAt: new Date("2023-12-23T04:03:58.629Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 696368,
          maximumAmount: 240262,
          presetAmount: 325326,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-09-27T19:30:45.650Z"),
          modifiedAt: new Date("2024-11-02T16:02:14.499Z"),
          id: "<value>",
          description: "courteous pixellate yahoo",
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
          path: "/usr/share",
          mimeType: "<value>",
          size: 163304,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-22T12:02:15.142Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-29T12:02:54.413Z"),
          sizeReadable: "<value>",
          publicUrl: "https://spherical-pasta.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-09-13T07:38:37.187Z"),
            modifiedAt: new Date("2024-11-25T02:07:27.856Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 610462,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 116194,
      currency: "Yemeni Rial",
      createdAt: new Date("2025-12-03T05:54:00.678Z"),
      modifiedAt: new Date("2024-05-02T17:19:27.947Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-16T14:52:05.958Z"),
      endsAt: new Date("2025-06-15T14:10:54.332Z"),
      maxRedemptions: 724229,
      redemptionsCount: 461812,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-07-23T11:55:05.448Z"),
      modifiedAt: new Date("2024-12-24T23:57:09.287Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    prices: [
      {
        createdAt: new Date("2024-02-18T20:56:42.794Z"),
        modifiedAt: new Date("2023-07-03T03:06:50.452Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 503322,
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