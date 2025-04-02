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
    createdAt: new Date("2023-09-20T21:13:27.799Z"),
    modifiedAt: new Date("2025-08-12T22:36:01.997Z"),
    id: "<value>",
    amount: 346534,
    currency: "Chilean Peso",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2025-06-23T12:13:21.771Z"),
    currentPeriodEnd: new Date("2023-10-28T01:51:14.384Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-10-02T14:57:31.128Z"),
    startedAt: new Date("2025-04-10T11:26:32.069Z"),
    endsAt: new Date("2023-03-09T04:27:11.348Z"),
    endedAt: new Date("2024-09-19T14:32:18.040Z"),
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
      createdAt: new Date("2024-01-02T15:51:19.211Z"),
      modifiedAt: new Date("2024-05-17T06:34:04.861Z"),
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
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-02-20T15:25:02.227Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Ricky89@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-05-17T09:48:42.675Z"),
      modifiedAt: new Date("2023-03-30T10:02:42.903Z"),
      id: "<value>",
      name: "<value>",
      description:
        "whether convoke confirm mid individual reboot inquisitively prickly frugal",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-10-28T22:56:20.342Z"),
          modifiedAt: new Date("2024-04-20T23:53:31.948Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-01T14:53:00.063Z"),
          modifiedAt: new Date("2024-08-17T16:34:38.040Z"),
          id: "<value>",
          description: "ew geez oxidise row a mmm upsell",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/bin",
          mimeType: "<value>",
          size: 943865,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-20T18:53:01.615Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-11T09:12:10.015Z"),
          sizeReadable: "<value>",
          publicUrl: "https://majestic-strategy.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-06-15T15:59:14.720Z"),
            modifiedAt: new Date("2024-12-11T15:52:26.486Z"),
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
          order: 737882,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 61197,
      currency: "Bhutanese Ngultrum",
      createdAt: new Date("2024-03-02T23:09:58.976Z"),
      modifiedAt: new Date("2025-10-05T13:49:22.673Z"),
      id: "<value>",
      metadata: {
        "key": 706351,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-08-30T08:52:26.881Z"),
      endsAt: new Date("2024-04-29T13:46:10.741Z"),
      maxRedemptions: 1962,
      redemptionsCount: 285336,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-01-21T06:06:28.878Z"),
      modifiedAt: new Date("2023-11-19T05:08:45.306Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      unitAmount: 652245,
      capAmount: 280309,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    prices: [
      {
        createdAt: new Date("2025-10-08T20:41:24.877Z"),
        modifiedAt: new Date("2024-11-09T00:43:35.009Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 682430,
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