# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2025-03-30T02:29:26.135Z"),
    modifiedAt: new Date("2025-06-30T02:36:41.216Z"),
    id: "<value>",
    amount: 162849,
    currency: "Sudanese Pound",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2025-11-27T19:05:06.518Z"),
    currentPeriodEnd: new Date("2023-05-17T09:48:42.675Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-03-30T10:02:42.903Z"),
    startedAt: new Date("2025-05-26T12:06:04.723Z"),
    endsAt: new Date("2023-06-27T17:44:33.524Z"),
    endedAt: new Date("2023-08-02T06:05:17.830Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-12-16T01:04:03.360Z"),
      modifiedAt: new Date("2025-07-12T00:23:22.970Z"),
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
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-09-23T02:51:12.661Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Libby.Daugherty@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-11-23T12:15:29.574Z"),
      modifiedAt: new Date("2024-12-09T12:22:34.653Z"),
      id: "<value>",
      name: "<value>",
      description: "guidance anti fast advocate",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-02-27T22:59:15.859Z"),
          modifiedAt: new Date("2025-04-21T00:39:36.408Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-21T15:32:06.862Z"),
          modifiedAt: new Date("2025-08-06T22:08:29.288Z"),
          id: "<value>",
          description: "so like uselessly ew vamoose wherever",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "maintain",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 476604,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-24T06:34:09.259Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-10-20T05:24:13.548Z"),
          sizeReadable: "<value>",
          publicUrl: "https://sleepy-account.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-12-02T23:26:14.676Z"),
            modifiedAt: new Date("2024-02-08T01:12:43.433Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 316292,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 590573,
      createdAt: new Date("2025-11-29T00:32:22.656Z"),
      modifiedAt: new Date("2025-12-17T20:16:52.685Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-11-13T12:53:28.095Z"),
      endsAt: new Date("2023-02-21T00:08:54.044Z"),
      maxRedemptions: 27863,
      redemptionsCount: 943865,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2024-04-29T21:18:20.189Z"),
      modifiedAt: new Date("2024-06-25T12:36:35.482Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 774567,
    },
    prices: [
      {
        createdAt: new Date("2025-03-17T00:12:28.102Z"),
        modifiedAt: new Date("2025-03-19T17:13:45.452Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 99908,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.active                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |