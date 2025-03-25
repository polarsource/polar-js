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
    createdAt: new Date("2025-06-14T23:45:05.207Z"),
    modifiedAt: new Date("2024-05-10T22:57:12.133Z"),
    id: "<value>",
    amount: 971436,
    currency: "Denar",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2025-01-25T00:48:07.635Z"),
    currentPeriodEnd: new Date("2023-09-14T18:48:26.866Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-02-04T16:45:44.018Z"),
    startedAt: new Date("2024-07-06T01:15:14.096Z"),
    endsAt: new Date("2023-01-29T05:00:23.216Z"),
    endedAt: new Date("2025-04-28T16:34:47.940Z"),
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
      createdAt: new Date("2024-06-04T20:01:47.770Z"),
      modifiedAt: new Date("2023-11-11T20:57:07.064Z"),
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
      deletedAt: new Date("2024-08-21T13:28:33.020Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Raphaelle77@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-06-13T18:55:12.078Z"),
      modifiedAt: new Date("2023-07-02T00:29:30.258Z"),
      id: "<value>",
      name: "<value>",
      description:
        "likewise vanadyl broadly daily fess huzzah impressive times inborn",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 454329,
      },
      prices: [
        {
          createdAt: new Date("2024-02-24T14:34:24.056Z"),
          modifiedAt: new Date("2023-02-12T21:10:23.646Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-08-02T08:31:07.216Z"),
          modifiedAt: new Date("2025-05-25T21:42:54.382Z"),
          id: "<value>",
          description: "whoever fixed hence damaged",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "triage",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/bin",
          mimeType: "<value>",
          size: 239858,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-08-12T22:36:01.997Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-15T19:14:05.843Z"),
          sizeReadable: "<value>",
          publicUrl: "https://austere-napkin.net/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-10-02T14:57:31.128Z"),
            modifiedAt: new Date("2025-04-10T11:26:32.069Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 572633,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 458279,
      createdAt: new Date("2023-02-22T16:38:20.435Z"),
      modifiedAt: new Date("2023-06-14T03:43:07.211Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-02-20T15:25:02.227Z"),
      endsAt: new Date("2025-03-30T02:29:26.135Z"),
      maxRedemptions: 831304,
      redemptionsCount: 162849,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-09-03T04:38:28.165Z"),
      modifiedAt: new Date("2025-11-27T19:05:06.518Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
    },
    prices: [
      {
        createdAt: new Date("2023-08-02T06:05:17.830Z"),
        modifiedAt: new Date("2025-08-24T17:04:22.462Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 842168,
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