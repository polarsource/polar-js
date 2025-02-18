# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2025-04-30T16:47:28.347Z"),
    modifiedAt: new Date("2025-05-02T10:48:39.763Z"),
    id: "<value>",
    amount: 71087,
    currency: "Hong Kong Dollar",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2025-09-11T11:00:37.375Z"),
    currentPeriodEnd: new Date("2024-04-08T15:25:59.804Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-04-15T20:23:47.603Z"),
    startedAt: new Date("2024-03-19T09:04:49.131Z"),
    endsAt: new Date("2024-08-10T08:24:04.543Z"),
    endedAt: new Date("2025-09-18T05:15:49.402Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2024-11-18T09:25:40.086Z"),
      modifiedAt: new Date("2024-07-07T16:33:31.193Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Jena_Satterfield@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Afghanistan",
      },
      taxId: [
        "my_itn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://limp-toothbrush.com",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Garrick_Bogisich@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-10-15T14:55:58.519Z"),
      modifiedAt: new Date("2025-06-21T23:23:51.519Z"),
      id: "<value>",
      name: "<value>",
      description: "until duh small helpfully",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-09-07T07:22:34.884Z"),
          modifiedAt: new Date("2024-01-19T20:13:53.893Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 731502,
          maximumAmount: 342655,
          presetAmount: 122365,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-16T21:27:56.154Z"),
          modifiedAt: new Date("2023-03-05T15:06:48.452Z"),
          id: "<value>",
          description: "rightfully behind tuxedo enchanting",
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
          path: "/Network",
          mimeType: "<value>",
          size: 979244,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-07-20T09:36:10.465Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-09-18T18:59:50.287Z"),
          sizeReadable: "<value>",
          publicUrl: "https://free-couch.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-03-24T00:00:29.730Z"),
            modifiedAt: new Date("2023-07-06T17:45:36.083Z"),
            id: "<value>",
            metadata: {
              "key": 436110,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 208224,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-08-09T10:04:30.253Z"),
      modifiedAt: new Date("2023-08-08T07:40:34.349Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 610335,
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 956532,
      currency: "Iraqi Dinar",
      createdAt: new Date("2024-10-27T17:13:19.444Z"),
      modifiedAt: new Date("2023-08-25T12:45:17.173Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-05-31T13:10:23.082Z"),
      endsAt: new Date("2023-09-27T05:11:28.515Z"),
      maxRedemptions: 911049,
      redemptionsCount: 40155,
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