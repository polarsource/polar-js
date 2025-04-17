# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2025-05-26T03:04:18.633Z"),
    modifiedAt: new Date("2025-08-17T08:38:12.962Z"),
    id: "<value>",
    amount: 763138,
    currency: "Rufiyaa",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2025-04-10T06:28:48.544Z"),
    currentPeriodEnd: new Date("2024-07-08T14:40:56.923Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-12-12T07:39:41.542Z"),
    startedAt: new Date("2024-08-05T00:54:37.375Z"),
    endsAt: new Date("2023-03-07T01:03:04.491Z"),
    endedAt: new Date("2023-07-20T18:35:29.433Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-01-20T17:41:07.841Z"),
      modifiedAt: new Date("2023-02-17T00:31:21.328Z"),
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
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-12-16T10:26:19.141Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    product: {
      createdAt: new Date("2023-02-19T12:41:57.376Z"),
      modifiedAt: new Date("2025-02-09T06:42:45.214Z"),
      id: "<value>",
      name: "<value>",
      description:
        "moor unwelcome supposing huzzah austere hoof idolized ouch righteously",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 651458,
      },
      prices: [
        {
          createdAt: new Date("2024-08-30T00:59:04.800Z"),
          modifiedAt: new Date("2023-12-06T03:10:40.880Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-01-20T11:57:59.883Z"),
          modifiedAt: new Date("2023-09-12T19:25:13.898Z"),
          description: "clearly government splay",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 572089,
          },
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
          path: "/sys",
          mimeType: "<value>",
          size: 468105,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-09T17:37:57.976Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-04-30T10:26:58.812Z"),
          sizeReadable: "<value>",
          publicUrl: "https://scary-secret.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-04-11T11:08:20.926Z"),
            modifiedAt: new Date("2024-11-10T05:55:39.748Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 529929,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 32211,
      type: "percentage",
      basisPoints: 56931,
      createdAt: new Date("2024-08-07T22:10:14.113Z"),
      modifiedAt: new Date("2023-07-12T13:41:20.569Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-04-10T01:44:05.499Z"),
      endsAt: new Date("2025-09-25T17:06:51.116Z"),
      maxRedemptions: 702937,
      redemptionsCount: 934924,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2025-07-28T05:12:23.569Z"),
        modifiedAt: new Date("2023-01-30T20:38:09.922Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |