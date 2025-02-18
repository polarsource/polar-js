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
    createdAt: new Date("2023-05-09T06:57:52.992Z"),
    modifiedAt: new Date("2023-09-18T19:19:03.998Z"),
    id: "<value>",
    amount: 901607,
    currency: "Liberian Dollar",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-05-21T17:10:05.507Z"),
    currentPeriodEnd: new Date("2023-03-03T03:31:17.515Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-18T21:08:22.069Z"),
    startedAt: new Date("2023-05-28T17:38:48.226Z"),
    endsAt: new Date("2025-07-20T05:47:38.512Z"),
    endedAt: new Date("2024-01-20T17:37:00.236Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 267684,
    },
    customer: {
      createdAt: new Date("2023-04-13T15:39:03.902Z"),
      modifiedAt: new Date("2023-11-04T15:42:22.170Z"),
      id: "<value>",
      metadata: {
        "key": 817509,
      },
      email: "Walton.Bailey68@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Paraguay",
      },
      taxId: [
        "ae_trn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://noteworthy-birth.info",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Shanel32@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-02-03T08:25:10.389Z"),
      modifiedAt: new Date("2024-03-29T16:52:10.152Z"),
      id: "<value>",
      name: "<value>",
      description: "equally as postbox who for dulcimer disposer similar",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 135243,
      },
      prices: [
        {
          createdAt: new Date("2023-12-13T23:26:10.852Z"),
          modifiedAt: new Date("2025-05-08T17:23:17.763Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-03-30T08:14:55.210Z"),
          modifiedAt: new Date("2024-03-23T17:25:25.814Z"),
          id: "<value>",
          description: "considering hungrily than",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/Users",
          mimeType: "<value>",
          size: 978229,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-29T04:45:03.855Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-10-29T05:30:25.003Z"),
          sizeReadable: "<value>",
          publicUrl: "https://rough-guard.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-05-23T18:32:43.807Z"),
            modifiedAt: new Date("2023-09-30T08:09:25.269Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 693988,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-10-31T12:23:46.032Z"),
      modifiedAt: new Date("2025-11-27T23:07:28.367Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 272396,
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 346534,
      createdAt: new Date("2023-07-18T04:47:58.471Z"),
      modifiedAt: new Date("2023-02-22T04:36:59.376Z"),
      id: "<value>",
      metadata: {
        "key": 825283,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-10-28T01:51:14.384Z"),
      endsAt: new Date("2025-10-02T14:57:31.128Z"),
      maxRedemptions: 757735,
      redemptionsCount: 61300,
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