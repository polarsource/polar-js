# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-21T02:44:46.039Z"),
    modifiedAt: new Date("2024-09-18T10:03:22.825Z"),
    id: "<value>",
    amount: 983556,
    currency: "UAE Dirham",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2025-06-01T10:04:24.136Z"),
    currentPeriodEnd: new Date("2025-04-23T02:16:34.389Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-08-11T13:13:07.788Z"),
    startedAt: new Date("2025-12-08T19:51:14.504Z"),
    endsAt: new Date("2024-03-10T05:14:19.198Z"),
    endedAt: new Date("2024-10-21T17:31:37.327Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 722500,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-09-19T15:47:11.283Z"),
      modifiedAt: new Date("2025-10-31T10:26:27.251Z"),
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
      deletedAt: new Date("2023-04-02T03:33:58.167Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Amara_Fritsch0@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-04-01T00:20:32.487Z"),
      modifiedAt: new Date("2024-08-06T10:34:04.832Z"),
      id: "<value>",
      name: "<value>",
      description: "jubilantly dark machine",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-02-11T07:29:56.575Z"),
          modifiedAt: new Date("2025-11-27T03:50:32.760Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-09T08:53:00.971Z"),
          modifiedAt: new Date("2023-09-10T17:33:40.761Z"),
          id: "<value>",
          description: "soybean showy contractor seemingly wombat",
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
          path: "/opt",
          mimeType: "<value>",
          size: 102019,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-13T11:35:30.480Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-02-15T01:12:10.982Z"),
          sizeReadable: "<value>",
          publicUrl: "https://educated-cappelletti.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-13T00:14:07.257Z"),
            modifiedAt: new Date("2023-12-17T12:12:43.741Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 539537,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 538368,
      currency: "Mauritius Rupee",
      createdAt: new Date("2023-09-04T08:32:34.245Z"),
      modifiedAt: new Date("2025-07-18T02:56:07.362Z"),
      id: "<value>",
      metadata: {
        "key": 713246,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-12T02:57:22.912Z"),
      endsAt: new Date("2024-04-14T07:20:14.969Z"),
      maxRedemptions: 881067,
      redemptionsCount: 7281,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-12-08T08:21:53.641Z"),
      modifiedAt: new Date("2023-09-30T02:40:00.548Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 318403,
    },
    prices: [
      {
        createdAt: new Date("2025-05-14T18:48:08.000Z"),
        modifiedAt: new Date("2025-06-28T21:29:27.010Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |