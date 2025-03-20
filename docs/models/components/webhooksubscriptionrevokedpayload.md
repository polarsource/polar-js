# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2025-09-17T22:15:47.415Z"),
    modifiedAt: new Date("2024-01-03T06:05:43.351Z"),
    id: "<value>",
    amount: 324600,
    currency: "Zimbabwe Dollar",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2025-07-06T13:45:43.629Z"),
    currentPeriodEnd: new Date("2024-01-11T08:00:43.248Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-12-09T06:01:03.753Z"),
    startedAt: new Date("2025-07-20T09:36:10.465Z"),
    endsAt: new Date("2025-09-18T18:59:50.287Z"),
    endedAt: new Date("2024-09-20T17:54:28.966Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-08-01T13:08:34.793Z"),
      modifiedAt: new Date("2025-01-05T23:32:58.692Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2024-04-22T23:25:57.748Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Kavon.Leuschke@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-10-30T22:14:28.998Z"),
      modifiedAt: new Date("2023-05-14T15:19:31.084Z"),
      id: "<value>",
      name: "<value>",
      description:
        "ack innovation and shark instead energetically alongside judgementally",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-03-04T18:57:25.826Z"),
          modifiedAt: new Date("2024-09-02T03:56:53.526Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-08-20T21:26:11.367Z"),
          modifiedAt: new Date("2024-07-02T21:21:03.279Z"),
          id: "<value>",
          description: "tankful sans fairly than knotty place consequently",
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
          path: "/etc/mail",
          mimeType: "<value>",
          size: 347583,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-29T01:36:34.090Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-27T10:09:19.664Z"),
          sizeReadable: "<value>",
          publicUrl: "https://gigantic-rule.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-01-03T10:27:21.788Z"),
            modifiedAt: new Date("2024-10-22T19:31:34.443Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 439473,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 129870,
      type: "percentage",
      amount: 463832,
      currency: "Fiji Dollar",
      createdAt: new Date("2025-03-30T04:46:00.514Z"),
      modifiedAt: new Date("2023-07-25T22:46:51.003Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-01-17T19:55:21.199Z"),
      endsAt: new Date("2025-08-01T23:38:40.461Z"),
      maxRedemptions: 492366,
      redemptionsCount: 516716,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-01-01T19:50:19.256Z"),
      modifiedAt: new Date("2024-07-19T18:55:51.097Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 499270,
      maximumAmount: 831559,
      presetAmount: 377392,
    },
    prices: [
      {
        createdAt: new Date("2023-04-04T03:54:32.981Z"),
        modifiedAt: new Date("2023-12-19T23:19:10.766Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 857355,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.revoked                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |