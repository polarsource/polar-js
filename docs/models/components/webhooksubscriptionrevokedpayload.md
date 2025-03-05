# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2025-10-13T09:06:30.714Z"),
    modifiedAt: new Date("2025-05-14T17:43:19.421Z"),
    id: "<value>",
    amount: 761914,
    currency: "Moldovan Leu",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2024-05-24T20:20:45.368Z"),
    currentPeriodEnd: new Date("2024-06-25T04:13:58.670Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-09-17T15:41:11.631Z"),
    startedAt: new Date("2025-10-09T07:44:18.634Z"),
    endsAt: new Date("2023-10-11T14:10:39.907Z"),
    endedAt: new Date("2023-08-06T04:23:14.951Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-04-22T07:49:28.033Z"),
      modifiedAt: new Date("2024-04-13T02:37:02.963Z"),
      metadata: {
        "key": "<value>",
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
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Oswaldo.Rutherford@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-08-11T14:00:17.759Z"),
      modifiedAt: new Date("2025-02-27T15:41:38.993Z"),
      id: "<value>",
      name: "<value>",
      description:
        "hm thorn vague promise fisherman unethically onto indeed yum",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-08-16T13:50:34.495Z"),
          modifiedAt: new Date("2024-11-19T01:05:43.827Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 782079,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-06-08T22:29:24.231Z"),
          modifiedAt: new Date("2025-02-03T07:55:19.464Z"),
          id: "<value>",
          description:
            "before coin after kindheartedly whereas obvious matter cheerfully yuck statement",
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
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 438281,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-16T09:16:04.113Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-31T06:08:34.343Z"),
          sizeReadable: "<value>",
          publicUrl: "https://winged-statue.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-29T23:34:23.967Z"),
            modifiedAt: new Date("2024-08-30T01:40:43.170Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 777784,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-06-09T00:10:54.046Z"),
      modifiedAt: new Date("2025-11-01T23:11:27.876Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 423032,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 904398,
      currency: "Lari",
      createdAt: new Date("2023-12-05T12:21:44.955Z"),
      modifiedAt: new Date("2024-11-18T09:25:40.086Z"),
      id: "<value>",
      metadata: {
        "key": 195869,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-06-08T14:54:19.992Z"),
      endsAt: new Date("2024-06-20T11:44:04.584Z"),
      maxRedemptions: 779391,
      redemptionsCount: 778832,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.revoked                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |