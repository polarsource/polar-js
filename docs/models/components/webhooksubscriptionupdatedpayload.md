# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-08-29T13:57:36.367Z"),
    modifiedAt: new Date("2025-03-24T05:48:45.842Z"),
    id: "<value>",
    amount: 897146,
    currency: "Bhutanese Ngultrum",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2023-02-17T10:11:30.743Z"),
    currentPeriodEnd: new Date("2025-05-27T15:12:15.895Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-02-18T15:55:24.931Z"),
    startedAt: new Date("2025-01-04T13:57:54.417Z"),
    endsAt: new Date("2024-05-31T22:39:05.751Z"),
    endedAt: new Date("2025-02-08T18:19:43.714Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2024-12-26T17:49:51.811Z"),
      modifiedAt: new Date("2025-07-22T01:12:42.157Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Lorenz25@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Romania",
      },
      taxId: [
        "ch_uid",
      ],
      organizationId: "<value>",
      avatarUrl: "https://well-to-do-longboat.name",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Ebony90@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-05-20T22:57:42.336Z"),
      modifiedAt: new Date("2024-02-07T12:10:52.161Z"),
      id: "<value>",
      name: "<value>",
      description:
        "modulo plugin meaty frizz strait barring after plus lest generally",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-06-09T23:00:47.892Z"),
          modifiedAt: new Date("2024-11-24T12:16:02.725Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-04-27T13:43:50.609Z"),
          modifiedAt: new Date("2023-04-12T03:19:21.133Z"),
          id: "<value>",
          description: "normal drat sidetrack meanwhile pace ah yawn nocturnal",
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
          path: "/net",
          mimeType: "<value>",
          size: 614175,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-04-04T21:10:04.657Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-07T08:29:49.788Z"),
          sizeReadable: "<value>",
          publicUrl: "https://hopeful-schnitzel.info",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-05-13T01:31:05.766Z"),
            modifiedAt: new Date("2024-05-05T20:59:07.282Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 793029,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-11-11T11:55:26.243Z"),
      modifiedAt: new Date("2024-03-02T04:19:36.988Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 288348,
      createdAt: new Date("2023-11-16T07:58:25.136Z"),
      modifiedAt: new Date("2025-10-03T03:11:16.049Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-08-11T21:05:33.502Z"),
      endsAt: new Date("2024-09-16T18:30:47.093Z"),
      maxRedemptions: 745764,
      redemptionsCount: 353036,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |