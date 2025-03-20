# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-01-03T21:31:22.687Z"),
    modifiedAt: new Date("2025-01-02T07:08:19.179Z"),
    id: "<value>",
    amount: 287797,
    currency: "Yuan Renminbi",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2024-05-20T03:04:11.342Z"),
    currentPeriodEnd: new Date("2023-09-05T01:19:12.734Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-12-19T07:07:14.338Z"),
    startedAt: new Date("2023-01-04T00:53:14.075Z"),
    endsAt: new Date("2025-04-08T08:46:52.324Z"),
    endedAt: new Date("2023-09-05T08:13:10.951Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-07-03T14:38:48.317Z"),
      modifiedAt: new Date("2023-07-25T10:32:48.478Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2023-10-15T19:48:15.809Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Gwendolyn_Walter@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-06-23T01:09:41.277Z"),
      modifiedAt: new Date("2024-05-17T10:30:26.732Z"),
      id: "<value>",
      name: "<value>",
      description: "singe search until for perfection overcooked",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-04-01T10:43:53.018Z"),
          modifiedAt: new Date("2025-07-05T05:12:43.324Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-09-12T12:16:23.117Z"),
          modifiedAt: new Date("2023-05-12T09:56:36.366Z"),
          id: "<value>",
          description:
            "capitalise sheathe seal fen pleasant outsource frivolous coexist",
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
          path: "/opt/bin",
          mimeType: "<value>",
          size: 876636,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-28T23:33:37.930Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-02-22T12:02:15.142Z"),
          sizeReadable: "<value>",
          publicUrl: "https://extroverted-scenario.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-01-19T22:47:13.292Z"),
            modifiedAt: new Date("2024-09-13T07:38:37.187Z"),
            id: "<value>",
            metadata: {
              "key": 125422,
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
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |