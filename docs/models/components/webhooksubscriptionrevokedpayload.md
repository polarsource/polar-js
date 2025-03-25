# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-06-09T00:10:54.046Z"),
    modifiedAt: new Date("2025-11-01T23:11:27.876Z"),
    id: "<value>",
    amount: 898229,
    currency: "Yen",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2024-08-10T08:24:04.543Z"),
    currentPeriodEnd: new Date("2025-09-18T05:15:49.402Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-11-20T04:30:15.274Z"),
    startedAt: new Date("2023-12-05T12:21:44.955Z"),
    endsAt: new Date("2024-11-18T09:25:40.086Z"),
    endedAt: new Date("2024-07-07T16:33:31.193Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-20T11:44:04.584Z"),
      modifiedAt: new Date("2025-05-04T05:05:58.982Z"),
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
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-03-05T14:53:14.109Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Richie.Russel92@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-05-07T08:21:22.430Z"),
      modifiedAt: new Date("2024-02-17T02:45:35.925Z"),
      id: "<value>",
      name: "<value>",
      description: "dishearten until duh",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-11-10T23:33:24.251Z"),
          modifiedAt: new Date("2024-08-07T15:17:18.675Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-15T23:43:44.923Z"),
          modifiedAt: new Date("2023-08-18T07:04:21.930Z"),
          id: "<value>",
          description: "deduction cop ack creak exaggerate",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "admin",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/mail",
          mimeType: "<value>",
          size: 395184,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-09-17T22:15:47.415Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-03T06:05:43.351Z"),
          sizeReadable: "<value>",
          publicUrl: "https://youthful-valentine.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-11T08:00:43.248Z"),
            modifiedAt: new Date("2025-12-09T06:01:03.753Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 904920,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 527872,
      createdAt: new Date("2025-01-05T23:32:58.692Z"),
      modifiedAt: new Date("2025-03-24T00:00:29.730Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-08-10T07:59:51.924Z"),
      endsAt: new Date("2024-04-22T23:25:57.748Z"),
      maxRedemptions: 208224,
      redemptionsCount: 552962,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-08-08T07:40:34.349Z"),
      modifiedAt: new Date("2025-09-13T08:05:18.568Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 610335,
    },
    prices: [
      {
        createdAt: new Date("2023-10-26T03:44:56.705Z"),
        modifiedAt: new Date("2025-11-14T08:36:25.032Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 607407,
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